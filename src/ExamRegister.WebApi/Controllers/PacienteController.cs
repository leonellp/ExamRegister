using Microsoft.AspNetCore.Mvc;
using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class PacienteController : ControllerBase {

        private readonly IPacienteService service;
        public PacienteController(IPacienteService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public paginacao<PacienteDTO> List(
            int skip = 0,
            int top = 10, 
            bool count = false, 
            bool? soinativos = false, 
            string pesquisa = null
            ) {
            return service.List(skip, top, count, soinativos, pesquisa);
        }

        [HttpGet]
        [Route("{id}")]
        public PacienteDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(PacienteInsertDTO Paciente) {
            service.Insert(Paciente);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, PacienteUpdateDTO Paciente) {
            service.Update(Id, Paciente);
        }
    }
}
