using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class ExameMedicorespDiagnosticoService : IExameMedicorespDiagnosticoService {
        private readonly IExameMedicorespDiagnosticoRepository repository;
        private IMapper mapper;

        public ExameMedicorespDiagnosticoService(IExameMedicorespDiagnosticoRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }
        public void Delete(Guid Idexmeddiag) {
            repository.Delete(Idexmeddiag);
        }

        public ExameMedicorespDiagnosticoDTO GetById(Guid Idexmeddiag) {
            return mapper.Map<ExameMedicorespDiagnosticoDTO>(repository.GetById(Idexmeddiag));
        }

        public void Insert(ExameMedicorespDiagnosticoInsertDTO Exmeddiag) {
            var r = mapper.Map<examemedicorespdiagnostico>(Exmeddiag);
            r.idexmeddiag = Guid.NewGuid();
            repository.Insert(r);
        }

        public IQueryable<ExameMedicorespDiagnosticoDTO> List() {
            var Exmeddiags = repository.List();
            return Exmeddiags.ProjectTo<ExameMedicorespDiagnosticoDTO>(mapper.ConfigurationProvider);
        }

        public void Update(Guid Idexmeddiag, ExameMedicorespDiagnosticoDTO ExmeddiagNew) {
            repository.Update(Idexmeddiag, mapper.Map<examemedicorespdiagnostico>(ExmeddiagNew));
        }
    }
}
