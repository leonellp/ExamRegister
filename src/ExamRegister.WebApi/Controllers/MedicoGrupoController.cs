using Microsoft.AspNetCore.Mvc;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class MedicoGrupoController : ControllerBase {

        private readonly IMedicoGrupoService service;
        public MedicoGrupoController(IMedicoGrupoService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<MedicoGrupoDTO> List() {
            return service.List();
        }

        [HttpGet]
        [Route("{id}")]
        public MedicoGrupoDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(MedicoGrupoInsertDTO medicogrupo) {
            service.Insert(medicogrupo);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, MedicoGrupoDTO medicogrupo) {
            service.Update(Id, medicogrupo);
        }
    }
}
