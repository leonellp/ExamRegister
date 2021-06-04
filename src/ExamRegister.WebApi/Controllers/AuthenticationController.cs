using ExamRegister.Business.Abstractions.Interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using Microsoft.AspNetCore.Mvc;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class AuthenticationController : ControllerBase {

        private readonly IAuthenticationService service;

        public AuthenticationController(IAuthenticationService service) {
            this.service = service;
        }

        [HttpPost]
        public UsuarioDTO Login(UsuarioDTO usuario) {
            return service.Login(usuario);
        }
    }
}