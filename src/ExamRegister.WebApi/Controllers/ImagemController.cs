using Microsoft.AspNetCore.Mvc;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using System.IO;

namespace ExamRegister.WebApi.Controllers {
    [ApiController]
    [Route("/v1/[controller]")]
    public class ImagemController : ControllerBase {

        private readonly IImagemService service;
        public static IWebHostEnvironment _environment;

        public ImagemController(IImagemService service, IWebHostEnvironment environment) {
            this.service = service;
            _environment = environment;
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

        [HttpPost("upload")]
        public async Task<string> EnviaImagem([FromForm] IFormFile arquivo) {
            if (arquivo.Length > 0) {
                try {
                    if (!Directory.Exists(_environment.WebRootPath + "\\imagens\\")) {
                        Directory.CreateDirectory(_environment.WebRootPath + "\\imagens\\");
                    }
                    using (FileStream filestream = System.IO.File.Create(_environment.WebRootPath + "\\imagens\\" + arquivo.FileName)) {
                        await arquivo.CopyToAsync(filestream);
                        filestream.Flush();
                        return "\\imagens\\" + arquivo.FileName;
                    }
                } catch (Exception ex) {
                    return ex.ToString();
                }
            } else {
                return "Ocorreu uma falha no envio do arquivo...";
            }
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
