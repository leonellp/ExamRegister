using Microsoft.AspNetCore.Mvc;
using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class GrupoDeMedicoController : ControllerBase {

        private readonly IGrupoDeMedicoService service;
        public GrupoDeMedicoController(IGrupoDeMedicoService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public paginacao<GrupodeMedicoDTO> List(
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
        public GrupodeMedicoDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(GrupodeMedicoInsertDTO grupodemedico) {
            service.Insert(grupodemedico);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, GrupodeMedicoDTO grupodemedico) {
            service.Update(Id, grupodemedico);
        }
    }
}
