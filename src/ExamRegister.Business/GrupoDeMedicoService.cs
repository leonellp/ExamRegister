using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class GrupoDeMedicoService : IGrupoDeMedicoService {
        private readonly IGrupoDeMedicosRepository repository;
        private readonly IMedicoGrupoRepository medicoGrupoRepository;
        private readonly IMedicoRepository medicoRepository;
        private IMapper mapper;

        public GrupoDeMedicoService(
            IGrupoDeMedicosRepository repository, 
            IMapper _mapper,
            IMedicoGrupoRepository medicoGrupoRepository,
            IMedicoRepository medicoRepository
            ) {
            this.repository = repository;
            this.medicoGrupoRepository = medicoGrupoRepository;
            this.medicoRepository = medicoRepository;
            mapper = _mapper;
        }
        public void Delete(Guid idgrupodemedico) {
            repository.Delete(idgrupodemedico);            
        }

        public GrupodeMedicoDTO GetById(Guid idgrupodemedico) {
            return mapper.Map<GrupodeMedicoDTO>(repository.GetById(idgrupodemedico));
        }

        public void Insert(GrupodeMedicoInsertDTO grupo) {
            var _grupo = mapper.Map<grupodemedico>(grupo);
            _grupo.idgrupodemedicos = Guid.NewGuid();
            repository.Insert(_grupo);

            var medicos = mapper.Map<medicogrupo[]>(grupo.MedicoGrupo);
            foreach (var medico in medicos) {

                medico.idgrupomedico = Guid.NewGuid();
                medico.idgrupo = _grupo.idgrupodemedicos;
                medico.Medico = medicoRepository.GetById(medico.idmedico);

                medicoGrupoRepository.Insert(medico);
            }
        }

        public paginacao<GrupodeMedicoDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            ) {

            int? nCount = null;

            var grupos = repository.List();
            if (soinativos == true) {
                grupos = grupos.Where(a => a.inativo != null);
            } else {
                grupos = grupos.Where(a => a.inativo == null);
            }

            if (pesquisa != null) {
                grupos = grupos.Where(a => a.idexterno.ToUpper().Contains(pesquisa.ToUpper()) || a.nome.ToUpper().Contains(pesquisa.ToUpper()));
            }

            if (count) {
                nCount = grupos.Count();
            }

            if (skip < 0) skip = 0;
            grupos = grupos.OrderBy(a => a.nome);
            grupos = grupos.Skip(skip).Take(top);

            
            return new paginacao<GrupodeMedicoDTO>() {
                values = grupos.ProjectTo<GrupodeMedicoDTO>(mapper.ConfigurationProvider).ToArray(),
                count = nCount
            };
        }

        public void Update(Guid idgrupodemedico, GrupodeMedicoDTO grupoNew) {
            var _grupoNew = mapper.Map<grupodemedico>(grupoNew);
            repository.Update(idgrupodemedico, _grupoNew);

            var IdMedicos = grupoNew.MedicoGrupo.Where(a => a.idgrupomedico != null)
                .Select(a => (Guid)a.idgrupomedico)
                .ToArray();

            var IdMedicosDell = medicoGrupoRepository.List()
                .Where(a => a.idgrupo == idgrupodemedico && !IdMedicos.Contains(a.idgrupomedico))
                .Select(a => a.idgrupomedico)
                .ToArray();

            foreach (var IdDell in IdMedicosDell) {
                medicoGrupoRepository.Delete(IdDell);
            }

            foreach (var medicoGrupo in grupoNew.MedicoGrupo) {
                var _medicoGrupo = mapper.Map<medicogrupo>(medicoGrupo);

                if (medicoGrupo.idgrupomedico == null) {
                    _medicoGrupo.idgrupomedico = Guid.NewGuid();
                    _medicoGrupo.idgrupo = _grupoNew.idgrupodemedicos;

                    medicoGrupoRepository.Insert(_medicoGrupo);
                } else {
                    medicoGrupoRepository.Update(_medicoGrupo.idgrupomedico, _medicoGrupo);
                }
            }
        }
    }
}
