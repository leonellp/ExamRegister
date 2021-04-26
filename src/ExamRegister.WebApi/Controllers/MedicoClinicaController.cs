using Microsoft.AspNetCore.Mvc;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class MedicoClinicaController : ControllerBase {

        private readonly IMedicoClinicaService service;
        public MedicoClinicaController(IMedicoClinicaService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<MedicoClinicaDTO> List(Guid idmedico) {
            return service.List(idmedico);
        }

        [HttpGet]
        [Route("{id}")]
        public MedicoClinicaDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(MedicoClinicaInsertDTO medicosClinicas) {
            service.Insert(medicosClinicas);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, MedicoClinicaDTO medicosClinicas) {
            service.Update(Id, medicosClinicas);
        }
    }
}
