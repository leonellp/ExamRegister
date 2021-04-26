using Microsoft.AspNetCore.Mvc;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class CidadeController : ControllerBase {

        private readonly ICidadeService service;
        public CidadeController(ICidadeService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<CidadeDTO> List(Guid idestado, bool? soinativos = false) {
            return service.List(idestado, soinativos);
        }

        [HttpGet]
        [Route("{id}")]
        public CidadeDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(CidadeInsertDTO cidade) {
            service.Insert(cidade);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, CidadeDTO cidade) {
            service.Update(Id, cidade);
        }
    }
}
