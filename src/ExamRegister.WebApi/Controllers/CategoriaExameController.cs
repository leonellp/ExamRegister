using Microsoft.AspNetCore.Mvc;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class CategoriaExameController : ControllerBase {

        private readonly ICategoriaExameService service;
        public CategoriaExameController(ICategoriaExameService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<CategoriaExameDTO> List() {
            return service.List();
        }

        [HttpGet]
        [Route("{id}")]
        public CategoriaExameDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(CategoriaExameInsertDTO categoriaexame) {
            service.Insert(categoriaexame);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, CategoriaExameDTO categoriaexame) {
            service.Update(Id, categoriaexame);
        }
    }
}
