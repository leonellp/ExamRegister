using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class CidadeService : ICidadeService {

        private readonly ICidadeRepository repository;
        private IMapper mapper;

        public CidadeService(ICidadeRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }

        public void Delete(Guid Idcidade) {
            repository.Delete(Idcidade);
        }

        public CidadeDTO GetById(Guid Idcidade) {
            return mapper.Map<CidadeDTO>(repository.GetById(Idcidade));
        }

        public void Insert(CidadeInsertDTO cidade) {
            var r = mapper.Map<cidade>(cidade);
            r.idcidade = Guid.NewGuid();
            repository.Insert(r);
        }

        public IQueryable<CidadeDTO> List(Guid idestado, bool? soinativos) {
            var cidades = repository.List();
            if (soinativos == true) {
                cidades = cidades.Where(a => a.inativo != null);
            } else {
                cidades = cidades.Where(a => a.inativo == null);
            }

            cidades = cidades.Where(a => a.idestado == idestado);

            return cidades.ProjectTo<CidadeDTO>(mapper.ConfigurationProvider);
        }

        public void Update(Guid Idcidade, CidadeDTO cidadeNew) {
            repository.Update(Idcidade, mapper.Map<cidade>(cidadeNew));
        }
    }
}
