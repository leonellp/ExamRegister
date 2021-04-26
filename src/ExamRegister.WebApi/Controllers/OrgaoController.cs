using Microsoft.AspNetCore.Mvc;
using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class OrgaoController : ControllerBase {

        private readonly IOrgaoService service;
        public OrgaoController(IOrgaoService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public paginacao<OrgaoDTO> List(
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
        public OrgaoDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(OrgaoInsertDTO orgaos) {
            service.Insert(orgaos);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, OrgaoDTO orgaos) {
            service.Update(Id, orgaos);
        }
    }
}
