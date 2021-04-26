using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface ICategoriaService {
        IQueryable<CategoriaDTO> List(bool soinativos);
        CategoriaDTO GetById(Guid IdCategoria);
        void Insert(CategoriaInsertDTO categoria);
        void Delete(Guid IdCategoria);
        void Update(Guid IdCategoria, CategoriaDTO categoriaNew);
    }
}
