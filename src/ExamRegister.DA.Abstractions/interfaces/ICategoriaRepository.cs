using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface ICategoriaRepository {
        IQueryable<categoria> List();
        categoria GetById(Guid IdCategoria);
        void Insert(categoria categoria);
        void Delete(Guid IdCategoria);
        void Update(Guid IdCategoria, categoria categoriaNew);
    }
}
