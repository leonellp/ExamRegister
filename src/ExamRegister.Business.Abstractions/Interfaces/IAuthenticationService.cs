using ExamRegister.WebApi.Abstractions.DTO;

namespace ExamRegister.Business.Abstractions.Interfaces {
    public interface IAuthenticationService {
        UsuarioDTO Login(UsuarioDTO usuario);
    }
}
