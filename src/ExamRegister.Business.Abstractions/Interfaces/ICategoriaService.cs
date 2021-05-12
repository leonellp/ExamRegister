using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface ICategoriaService {
        paginacao<CategoriaDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            );
        CategoriaDTO GetById(Guid IdCategoria);
        void Insert(CategoriaInsertDTO categoria);
        void Delete(Guid IdCategoria);
        void Update(Guid IdCategoria, CategoriaDTO categoriaNew);
    }
}
