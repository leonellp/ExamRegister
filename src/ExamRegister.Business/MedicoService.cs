using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class MedicoService : IMedicoService {
        private readonly IMedicoRepository repository;
        private readonly IMedicoClinicaRepository medicoClinicaRepository;
        private readonly IClinicaRepository ClinicaRepository;
        private IMapper mapper;

        public MedicoService(
            IMedicoRepository repository, 
            IMedicoClinicaRepository medicoClinicaRepository,
            IClinicaRepository ClinicaRepository,
            IMapper _mapper
            ) {
            this.repository = repository;
            this.medicoClinicaRepository = medicoClinicaRepository;
            this.ClinicaRepository = ClinicaRepository;
            mapper = _mapper;
        }
        public void Delete(Guid Idmedico) {
            repository.Delete(Idmedico);
        }

        public MedicoDTO GetById(Guid Idmedico) {
            return mapper.Map<MedicoDTO>(repository.GetById(Idmedico));
        }

        public void Insert(MedicoInsertDTO medico) {
            var _medico = mapper.Map<medico>(medico);
            _medico.idmedico = Guid.NewGuid();
            repository.Insert(_medico);

            var clinicas = mapper.Map<medicoclinica[]>(medico.MedicoClinica);
            foreach (var clinica in clinicas) {

                clinica.idmedcli = Guid.NewGuid();
                clinica.idmedico = _medico.idmedico;
                clinica.idclinicaNavigation = ClinicaRepository.GetById(clinica.idclinica);

                medicoClinicaRepository.Insert(clinica);
            }
        }

        public paginacao<MedicoDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            ) {

            int? nCount = null;

            var medicos = repository.List();
            if (soinativos == true) {
                medicos = medicos.Where(a => a.inativo != null);
            } else {
                medicos = medicos.Where(a => a.inativo == null);
            }

            if (pesquisa != null) {
                medicos = medicos.Where(a => a.crm.ToUpper().Contains(pesquisa.ToUpper()) || a.nome.ToUpper().Contains(pesquisa.ToUpper()));
            }

            if (count) {
                nCount = medicos.Count();
            }

            if (skip < 0) skip = 0;
            medicos = medicos.OrderBy(a => a.nome);
            medicos = medicos.Skip(skip).Take(top);

            return new paginacao<MedicoDTO>() {
                values = medicos.ProjectTo<MedicoDTO>(mapper.ConfigurationProvider).ToArray(),
                count = nCount
            };
        }


        public void Update(Guid Idmedico, MedicoUpdateDTO medicoNew) {
            var _medicoNew = mapper.Map<medico>(medicoNew);
            repository.Update(Idmedico, _medicoNew);

            var IdClinicas = medicoNew.MedicoClinica.Where(a => a.idmedcli != null)
                .Select(a => (Guid)a.idmedcli)
                .ToArray();

            var IdClinicasDell = medicoClinicaRepository.List()
                .Where(a => a.idmedico == Idmedico && !IdClinicas.Contains(a.idmedcli))
                .Select(a => a.idmedcli)
                .ToArray();

            foreach (var IdDell in IdClinicasDell) {
                medicoClinicaRepository.Delete(IdDell);
            }

            foreach (var medicoClinica in medicoNew.MedicoClinica) {
                var _medicoClinica = mapper.Map<medicoclinica>(medicoClinica);

                if (medicoClinica.idmedcli == null) {

                    _medicoClinica.idmedcli = Guid.NewGuid();
                    _medicoClinica.idmedico = _medicoNew.idmedico;

                    medicoClinicaRepository.Insert(_medicoClinica);
                } else {
                    medicoClinicaRepository.Update(_medicoClinica.idmedcli, _medicoClinica);
                }
            }
        }
    }
}