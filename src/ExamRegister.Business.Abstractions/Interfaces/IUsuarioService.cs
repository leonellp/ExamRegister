using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IUsuarioService {
        IQueryable<UsuarioDTO> List(bool soinativos);
        UsuarioDTO GetById(Guid Idusuario);
        void Insert(UsuarioInsertDTO usuario);
        void Delete(Guid Idusuario);
        void Update(Guid Idusuario, UsuarioDTO usuarioNew);
    }
}
