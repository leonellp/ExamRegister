using Microsoft.AspNetCore.Mvc;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class UsuarioController : ControllerBase {

        private readonly IUsuarioService service;
        public UsuarioController(IUsuarioService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<UsuarioDTO> List(bool excluidos = false) {
            return service.List(excluidos);
        }

        [HttpGet]
        [Route("{id}")]
        public UsuarioDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(UsuarioInsertDTO usuario) {
            service.Insert(usuario);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, UsuarioDTO usuario) {
            service.Update(Id, usuario);
        }
    }
}
