using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class ExameDiagService : IExameDiagService {
        private readonly IExameDiagRepository repository;
        private IMapper mapper;

        public ExameDiagService(IExameDiagRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }
        public void Delete(Guid Idexmeddiag) {
            repository.Delete(Idexmeddiag);
        }

        public ExameDiagDTO GetById(Guid Idexmeddiag) {
            return mapper.Map<ExameDiagDTO>(repository.GetById(Idexmeddiag));
        }

        public void Insert(ExameDiagInsertDTO Exmeddiag) {
            var r = mapper.Map<examediag>(Exmeddiag);
            r.idexamediag = Guid.NewGuid();
            repository.Insert(r);
        }

        public IQueryable<ExameDiagDTO> List() {
            var Exmeddiags = repository.List();
            return Exmeddiags.ProjectTo<ExameDiagDTO>(mapper.ConfigurationProvider);
        }

        public void Update(Guid Idexmeddiag, ExameDiagDTO ExmeddiagNew) {
            repository.Update(Idexmeddiag, mapper.Map<examediag>(ExmeddiagNew));
        }
    }
}
