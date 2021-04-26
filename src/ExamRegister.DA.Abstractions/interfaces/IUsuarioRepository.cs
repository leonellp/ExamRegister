using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IUsuarioRepository {
        IQueryable<usuario> List();
        usuario GetById(Guid Idusuario);
        void Insert(usuario usuario);
        void Delete(Guid Idusuario);
        void Update(Guid Idusuario, usuario usuarioNew);
    }
}
