using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class CategoriaExameService : ICategoriaExameService {

        private readonly ICategoriaExameRepository repository;
        private IMapper mapper;

        public CategoriaExameService(ICategoriaExameRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }
        public void Delete(Guid IdCategoria) {
            repository.Delete(IdCategoria);
        }

        public CategoriaExameDTO GetById(Guid IdCategoriaexame) {
            return mapper.Map<CategoriaExameDTO>(repository.GetById(IdCategoriaexame));
        }

        public void Insert(CategoriaExameInsertDTO categoriaexame) {
            var r = mapper.Map<categoriaexame>(categoriaexame);
            r.idcategoriaexame = Guid.NewGuid();
            repository.Insert(r);
        }

        public IQueryable<CategoriaExameDTO> List() {
            var categoriaexame = repository.List();
            return categoriaexame.ProjectTo<CategoriaExameDTO>(mapper.ConfigurationProvider);
        }

        public void Update(Guid IdCategoriaexame, CategoriaExameDTO categoriaexameNew) {
            repository.Update(IdCategoriaexame, mapper.Map<categoriaexame>(categoriaexameNew));
        }
    }
}
