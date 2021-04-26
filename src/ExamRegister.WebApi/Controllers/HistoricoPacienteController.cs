using Microsoft.AspNetCore.Mvc;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class HistoricoPacienteController : ControllerBase {

        private readonly IHistoricoPacienteService service;
        public HistoricoPacienteController(IHistoricoPacienteService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<HistoricoPacienteDTO> List(Guid? idpaciente = null , bool? inativos = false) {
            return service.List(idpaciente, inativos);
        }

        [HttpGet]
        [Route("{id}")]
        public HistoricoPacienteDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(HistoricoPacienteInsertDTO historico) {
            service.Insert(historico);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, HistoricoPacienteUpdateDTO exame) {
            service.Update(Id, exame);
        }
    }
}
