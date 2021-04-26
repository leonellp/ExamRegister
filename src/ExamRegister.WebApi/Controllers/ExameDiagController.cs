using Microsoft.AspNetCore.Mvc;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class ExameDiagController : ControllerBase {

        private readonly IExameDiagService service;
        public ExameDiagController(IExameDiagService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<ExameDiagDTO> List() {
            return service.List();
        }

        [HttpGet]
        [Route("{id}")]
        public ExameDiagDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(ExameDiagInsertDTO examediag) {
            service.Insert(examediag);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, ExameDiagDTO examediag) {
            service.Update(Id, examediag);
        }
    }
}
