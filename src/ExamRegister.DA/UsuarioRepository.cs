using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class UsuarioRepository : IUsuarioRepository {
        private readonly ExamRegisterContext examregisterContext;

        public UsuarioRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid Idusuario) {
            var usuario = examregisterContext.usuario.Where(a => a.idusuario == Idusuario).FirstOrDefault();
            usuario.inativo = DateTime.Now;
            examregisterContext.SaveChanges();
        }

        public usuario GetById(Guid Idusuario) {
            var usuario = examregisterContext.usuario.Where(a => a.idusuario == Idusuario).FirstOrDefault();
            return usuario;
        }

        public void Insert(usuario usuario) {
            examregisterContext.usuario.Add(usuario);
            examregisterContext.SaveChanges();
        }

        public IQueryable<usuario> List() {
            return examregisterContext.usuario;

        }

        public void Update(Guid Idusuario, usuario usuarioUpdate) {
            usuario usuario = examregisterContext.usuario.Where(a => a.idusuario == Idusuario).FirstOrDefault();

            usuario.nome = usuarioUpdate.nome;
            usuario.user = usuarioUpdate.user;
            usuario.inativo = usuarioUpdate.inativo;
            usuario.idexterno = usuarioUpdate.idexterno;
            usuario.password_hash = usuarioUpdate.password_hash;
            usuario.password_salt = usuarioUpdate.password_salt;

            examregisterContext.SaveChanges();
        }
    }
}
