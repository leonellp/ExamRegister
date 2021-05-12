using Microsoft.AspNetCore.Mvc;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;
using ExamRegister.Business.Abstractions.DTO;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class CategoriaController : ControllerBase {

        private readonly ICategoriaService service;
        public CategoriaController(ICategoriaService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public paginacao<CategoriaDTO> List(
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
        public CategoriaDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(CategoriaInsertDTO categoria) {
            service.Insert(categoria);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, CategoriaDTO categoria) {
            service.Update(Id, categoria);
        }
    }
}
