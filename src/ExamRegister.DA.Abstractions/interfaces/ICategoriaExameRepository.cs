using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface ICategoriaExameRepository {
        IQueryable<categoriaexame> List();
        categoriaexame GetById(Guid IdCategoriaexame);
        void Insert(categoriaexame categoriaexame);
        void Delete(Guid IdCategoriaexame);
        void Update(Guid IdCategoriaexame, categoriaexame categoriaexameNew);
    }
}
