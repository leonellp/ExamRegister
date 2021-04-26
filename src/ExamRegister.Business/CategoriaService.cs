using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class CategoriaService : ICategoriaService {

        private readonly ICategoriaRepository repository;
        private IMapper mapper;

        public CategoriaService(ICategoriaRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }
        public void Delete(Guid IdCategoria) {
            repository.Delete(IdCategoria);
        }

        public CategoriaDTO GetById(Guid IdCategoria) {
            return mapper.Map<CategoriaDTO>(repository.GetById(IdCategoria));
        }

        public void Insert(CategoriaInsertDTO categoria) {
            var r = mapper.Map<categoria>(categoria);
            r.idcategoria = Guid.NewGuid();
            repository.Insert(r);
        }

        public IQueryable<CategoriaDTO> List(bool soinativos) {
            var categorias = repository.List();
            if (soinativos) {
                categorias = categorias.Where(a => a.inativo != null);
            } else {
                categorias = categorias.Where(a => a.inativo == null);
            }

            return categorias.ProjectTo<CategoriaDTO>(mapper.ConfigurationProvider);
        }

        public void Update(Guid IdCategoria, CategoriaDTO categoriaNew) {
            repository.Update(IdCategoria, mapper.Map<categoria>(categoriaNew));
        }
    }
}
