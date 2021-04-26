using Microsoft.AspNetCore.Mvc;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class ImagemController : ControllerBase {

        private readonly IImagemService service;
        public ImagemController(IImagemService service) {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public IEnumerable<ImagemDTO> List(bool excluidos = false) {
            return service.List(excluidos);
        }

        [HttpGet]
        [Route("{id}")]
        public ImagemDTO Get(Guid Id) {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(ImagemInsertDTO imagem) {
            service.Insert(imagem);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id) {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, ImagemDTO imagem) {
            service.Update(Id, imagem);
        }
    }
}
