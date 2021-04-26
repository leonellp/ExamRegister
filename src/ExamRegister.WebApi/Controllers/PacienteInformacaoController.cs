using Microsoft.AspNetCore.Mvc;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class PacienteInformacaoController : ControllerBase {

        private readonly IPacienteInformacaoService service;
        public PacienteInformacaoController(IPacienteInformacaoService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<PacienteInformacaoDTO> List(Guid? idpaciente = null) {
            return service.List(idpaciente);
        }

        [HttpGet]
        [Route("{id}")]
        public PacienteInformacaoDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(PacienteInformacaoInsertDTO PacienteInformacao) {
            service.Insert(PacienteInformacao);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, PacienteInformacaoUpdateDTO PacienteInformacao) {
            service.Update(Id, PacienteInformacao);
        }
    }
}
