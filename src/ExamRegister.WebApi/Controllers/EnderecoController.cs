using Microsoft.AspNetCore.Mvc;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class EnderecoController : ControllerBase {

        private readonly IEnderecoService service;
        public EnderecoController(IEnderecoService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<EnderecoDTO> List(bool excluidos = false) {
            return service.List(excluidos);
        }

        [HttpGet]
        [Route("{id}")]
        public EnderecoDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(EnderecoInsertDTO endereco) {
            service.Insert(endereco);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, EnderecoDTO endereco) {
            service.Update(Id, endereco);
        }
    }
}
