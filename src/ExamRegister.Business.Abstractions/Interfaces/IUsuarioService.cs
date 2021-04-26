using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IUsuarioService {
        paginacao<UsuarioDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            );
        UsuarioDTO GetById(Guid Idusuario);
        void Insert(UsuarioInsertDTO usuario);
        void Delete(Guid Idusuario);
        void Update(Guid Idusuario, UsuarioDTO usuarioNew);
    }
}
