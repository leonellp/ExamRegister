using Microsoft.AspNetCore.Mvc;
using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class DiagnosticoController : ControllerBase {

        private readonly IDiagnosticoService service;
        public DiagnosticoController(IDiagnosticoService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public paginacao<DiagnosticoDTO> List(
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
        public DiagnosticoDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(DiagnosticoInsertDTO diagnostico) {
            service.Insert(diagnostico);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, DiagnosticoDTO diagnostico) {
            service.Update(Id, diagnostico);
        }
    }
}
