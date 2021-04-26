using Microsoft.AspNetCore.Mvc;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class ExameMedicorespDiagnosticoController : ControllerBase {

        private readonly IExameMedicorespDiagnosticoService service;
        public ExameMedicorespDiagnosticoController(IExameMedicorespDiagnosticoService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<ExameMedicorespDiagnosticoDTO> List() {
            return service.List();
        }

        [HttpGet]
        [Route("{id}")]
        public ExameMedicorespDiagnosticoDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(ExameMedicorespDiagnosticoInsertDTO exameMedicorespDiagnostico) {
            service.Insert(exameMedicorespDiagnostico);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, ExameMedicorespDiagnosticoDTO exameMedicorespDiagnostico) {
            service.Update(Id, exameMedicorespDiagnostico);
        }
    }
}
