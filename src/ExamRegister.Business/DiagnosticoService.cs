using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class DiagnosticoService : IDiagnosticoService {
        private readonly IDiagnosticoRepository repository;
        private IMapper mapper;

        public DiagnosticoService(IDiagnosticoRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }
        public void Delete(Guid iddiagnostico) {
            repository.Delete(iddiagnostico);
        }

        public DiagnosticoDTO GetById(Guid iddiagnostico) {
            return mapper.Map<DiagnosticoDTO>(repository.GetById(iddiagnostico));
        }

        public void Insert(DiagnosticoInsertDTO diagnostico) {
            var r = mapper.Map<diagnostico>(diagnostico);
            r.iddiagnostico = Guid.NewGuid();
            repository.Insert(r);
        }

        public paginacao<DiagnosticoDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            ) {

            int? nCount = null;

            var diagnosticos = repository.List();
            if (soinativos == true) {
                diagnosticos = diagnosticos.Where(a => a.inativo != null);
            } else {
                diagnosticos = diagnosticos.Where(a => a.inativo == null);
            }

            if (pesquisa != null) {
                diagnosticos = diagnosticos.Where(a => a.idexterno.ToUpper().Contains(pesquisa.ToUpper()) || a.nome.ToUpper().Contains(pesquisa.ToUpper()));
            }

            if (count) {
                nCount = diagnosticos.Count();
            }

            if (skip < 0) skip = 0;
            diagnosticos = diagnosticos.OrderBy(a => a.nome);
            diagnosticos = diagnosticos.Skip(skip).Take(top);

            return new paginacao<DiagnosticoDTO>() {
                values = diagnosticos.ProjectTo<DiagnosticoDTO>(mapper.ConfigurationProvider).ToArray(),
                count = nCount
            };
        }

        public void Update(Guid iddiagnostico, DiagnosticoDTO diagnosticoNew) {
            repository.Update(iddiagnostico, mapper.Map<diagnostico>(diagnosticoNew));
        }
    }
}
