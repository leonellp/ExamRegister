using ExamRegister.Business.Abstractions.Interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class AuthenticationController : ControllerBase {

        private readonly IAuthenticationService service;

        public AuthenticationController(IAuthenticationService service) {
            this.service = service;
        }

        [HttpPost]
        public ActionResult<AuthorizationSaidaDTO> Authenticate([FromBody] AuthorizationEntradaDTO usuario) {
            return service.Authenticate(usuario);
        }
    }
}