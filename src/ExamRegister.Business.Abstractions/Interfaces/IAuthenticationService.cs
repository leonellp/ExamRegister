using ExamRegister.WebApi.Abstractions.DTO;

namespace ExamRegister.Business.Abstractions.Interfaces {
    public interface IAuthenticationService {
        string Login(LoginDTO usuario);
    }
}
