using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class ExameService : IExameService {

        private readonly IExameRepository repository;
        private IMapper mapper;

        public ExameService(IExameRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }
        public void Delete(Guid Idexame) {
            repository.Delete(Idexame);
        }

        public ExameDTO GetById(Guid Idexame) {
            return mapper.Map<ExameDTO>(repository.GetById(Idexame));
        }

        public void Insert(ExameInsertDTO Exame) {
            var r = mapper.Map<exame>(Exame);
            r.idexame = Guid.NewGuid();
            repository.Insert(r);
        }

        public IQueryable<ExameDTO> List(bool soinativos) {
            var exames = repository.List();
            if (soinativos) {
                exames = exames.Where(a => a.inativo != null);
            } else {
                exames = exames.Where(a => a.inativo == null);
            }

            return exames.ProjectTo<ExameDTO>(mapper.ConfigurationProvider);
        }

        public void Update(Guid Idexame, ExameDTO exameNew) {
            repository.Update(Idexame, mapper.Map<exame>(exameNew));
        }
    }
}
