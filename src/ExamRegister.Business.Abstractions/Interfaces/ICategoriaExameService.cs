using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface ICategoriaExameService {
        IQueryable<CategoriaExameDTO> List();
        CategoriaExameDTO GetById(Guid IdCategoriaexame);
        void Insert(CategoriaExameInsertDTO categoriaexame);
        void Delete(Guid IdCategoriaexame);
        void Update(Guid IdCategoriaexame, CategoriaExameDTO categoriaexameNew);
    }
}
