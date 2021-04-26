using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class HistoricoPacienteService : IHistoricoPacienteService {
        private readonly IHistoricoPacienteRepository repository;
        private IMapper mapper;

        public HistoricoPacienteService(IHistoricoPacienteRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }

        public void Delete(Guid Idhistoricopaciente) {
            repository.Delete(Idhistoricopaciente);
        }

        public HistoricoPacienteDTO GetById(Guid Idhistoricopaciente) {
            return mapper.Map<HistoricoPacienteDTO>(repository.GetById(Idhistoricopaciente));
        }

        public void Insert(HistoricoPacienteInsertDTO historicoPaciente) {
            var r = mapper.Map<historicopaciente>(historicoPaciente);
            r.idhispaciente = Guid.NewGuid();
            repository.Insert(r);
        }

        public IQueryable<HistoricoPacienteDTO> List(Guid? idpacinte = null, bool? soinativos = null) {
            var historicospacientes = repository.List();

            if (soinativos != null) {
                if (soinativos == true) {
                    historicospacientes = historicospacientes.Where(a => a.inativo != null);
                } else {
                    historicospacientes = historicospacientes.Where(a => a.inativo == null);
                }
            }

            if (idpacinte != null) {
                historicospacientes = historicospacientes.Where(a => a.idpaciente == idpacinte);
            }

            return historicospacientes.ProjectTo<HistoricoPacienteDTO>(mapper.ConfigurationProvider);
        }

        public void Update(Guid Idhistoricopaciente, HistoricoPacienteUpdateDTO historicoPacienteNew) {
            repository.Update(Idhistoricopaciente, mapper.Map<historicopaciente>(historicoPacienteNew));
        }
    }
}
