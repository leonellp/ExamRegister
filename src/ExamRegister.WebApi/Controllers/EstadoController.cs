using Microsoft.AspNetCore.Mvc;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class EstadoController : ControllerBase {

        private readonly IEstadoService service;
        public EstadoController(IEstadoService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<EstadoDTO> List(bool excluidos = false) {
            return service.List(excluidos);
        }

        [HttpGet]
        [Route("{id}")]
        public EstadoDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(EstadoInsertDTO estado) {
            service.Insert(estado);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, EstadoDTO estado) {
            service.Update(Id, estado);
        }
    }
}
