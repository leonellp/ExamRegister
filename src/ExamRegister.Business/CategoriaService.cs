using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.Business.Abstractions.DTO;
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
            var categoriaNew = mapper.Map<categoria>(categoria);
            categoriaNew.idcategoria = Guid.NewGuid();
            repository.Insert(categoriaNew);
        }

        public paginacao<CategoriaDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            ) {

            int? nCount = null;

            var categorias = repository.List();
            if (soinativos == true) {
                categorias = categorias.Where(a => a.inativo != null);
            } else {
                categorias = categorias.Where(a => a.inativo == null);
            }

            if (pesquisa != null) {
                categorias = categorias.Where(a =>
                a.idexterno.ToUpper().Contains(pesquisa.ToUpper()) ||
                a.nome.ToUpper().Contains(pesquisa.ToUpper()) ||
                a.nomecompleto.ToUpper().Contains(pesquisa.ToUpper())
                );
            }

            if (count) {
                nCount = categorias.Count();
            }

            if (skip < 0) skip = 0;
            categorias = categorias.OrderBy(a => a.nome);
            categorias = categorias.Skip(skip).Take(top);

            return new paginacao<CategoriaDTO>() {
                values = categorias.ProjectTo<CategoriaDTO>(mapper.ConfigurationProvider).ToArray(),
                count = nCount
            };
        }

        public void Update(Guid IdCategoria, CategoriaDTO categoriaNew) {
            repository.Update(IdCategoria, mapper.Map<categoria>(categoriaNew));
        }
    }
}
