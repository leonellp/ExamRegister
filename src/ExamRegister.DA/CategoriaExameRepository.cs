using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class CategoriaExameRepository : ICategoriaExameRepository {

        private readonly ExamRegisterContext examregisterContext;

        public CategoriaExameRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }

        public void Delete(Guid IdCategoriaexame) {
            var categoriaexame = examregisterContext.categoriaexame.Where(a => a.idcategoriaexame == IdCategoriaexame).FirstOrDefault();            
            examregisterContext.categoriaexame.Remove(categoriaexame);
            examregisterContext.SaveChanges();
        }

        public categoriaexame GetById(Guid idcategoriaexame) {
            var categoriaexame = examregisterContext.categoriaexame.Where(a => a.idcategoriaexame == idcategoriaexame).FirstOrDefault();
            return categoriaexame;
        }

        public void Insert(categoriaexame categoriaexame) {
            examregisterContext.categoriaexame.Add(categoriaexame);
            examregisterContext.SaveChanges();
        }

        public IQueryable<categoriaexame> List() {
            return examregisterContext.categoriaexame;
        }

        public void Update(Guid idcategoriaexame, categoriaexame categoriaexameNew) {
            categoriaexame categoriaexame = examregisterContext.categoriaexame.Where(a => a.idcategoriaexame == idcategoriaexame).FirstOrDefault();

            categoriaexame.idexame = categoriaexameNew.idexame;            
            categoriaexame.idcategoria = categoriaexameNew.idcategoria;            

            examregisterContext.SaveChanges();
        }
    }
}