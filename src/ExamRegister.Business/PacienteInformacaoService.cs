using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class PacienteInformacaoService : IPacienteInformacaoService {
        private readonly IPacienteInformacaoRepository repository;
        private IMapper mapper;

        public PacienteInformacaoService(IPacienteInformacaoRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }

        public void Delete(Guid IdpacienteInformacao) {
            repository.Delete(IdpacienteInformacao);
        }

        public PacienteInformacaoDTO GetById(Guid IdpacienteInformacao) {
            return mapper.Map<PacienteInformacaoDTO>(repository.GetById(IdpacienteInformacao));
        }

        public void Insert(PacienteInformacaoInsertDTO pacienteInformacao) {
            var r = mapper.Map<pacienteinformacao>(pacienteInformacao);
            r.Idpacienteinformacao = Guid.NewGuid();
            repository.Insert(r);
        }

        public IQueryable<PacienteInformacaoDTO> List(Guid? idpaciente = null) {
            var pacienteInformacao = repository.List();

            if (idpaciente != null) {
                pacienteInformacao = repository.List().Where(a => a.idpaciente == idpaciente);
            }

            return pacienteInformacao.ProjectTo<PacienteInformacaoDTO>(mapper.ConfigurationProvider);
        }

        public void Update(Guid IdpacienteInformacao, PacienteInformacaoUpdateDTO pacienteInformacaoNew) {
            repository.Update(IdpacienteInformacao, mapper.Map<pacienteinformacao>(pacienteInformacaoNew));
        }
    }
}
