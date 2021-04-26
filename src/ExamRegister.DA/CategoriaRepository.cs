using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class CategoriaRepository : ICategoriaRepository {

        private readonly ExamRegisterContext examregisterContext;

        public CategoriaRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }

        public void Delete(Guid IdCategoria) {
            var categoria = examregisterContext.categoria.Where(a => a.idcategoria == IdCategoria).FirstOrDefault();
            categoria.inativo = DateTime.Now;
            examregisterContext.SaveChanges();
        }

        public categoria GetById(Guid IdCategoria) {
            var categoria = examregisterContext.categoria.Where(a => a.idcategoria == IdCategoria).FirstOrDefault();
            return categoria;
        }

        public void Insert(categoria categoria) {
            examregisterContext.categoria.Add(categoria);
            examregisterContext.SaveChanges();
        }

        public IQueryable<categoria> List() {
            return examregisterContext.categoria;
        }

        public void Update(Guid IdCategoria, categoria categoriaNew) {
            categoria categoria = examregisterContext.categoria.Where(a => a.idcategoria == IdCategoria).FirstOrDefault();

            categoria.idcategoriapai = categoriaNew.idcategoriapai;
            categoria.nome = categoriaNew.nome;
            categoria.nomecompleto = categoriaNew.nomecompleto;
            categoria.inativo = categoriaNew.inativo;
            categoria.idexterno = categoriaNew.idexterno;

            examregisterContext.SaveChanges();
        }
    }
}