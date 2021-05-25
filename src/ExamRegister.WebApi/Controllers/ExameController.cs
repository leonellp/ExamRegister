using Microsoft.AspNetCore.Mvc;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using ExamRegister.Business.Abstractions.DTO;

namespace ExamRegister.WebApi.Controllers
{
    [ApiController]
    [Route("/v1/[controller]")]
    public class ExameController : ControllerBase
    {

        private readonly IExameService service;
        public ExameController(IExameService service)
        {
            this.service = service;
        }

        [HttpGet]
        [Route("")]
        public paginacao<ExameDTO> List(
            int skip = 0,
            int top = 5,
            bool count = false,
            bool? soinativos = false,
            string pesquisa = null
            )
        {
            return service.List(skip, top, count, soinativos, pesquisa);
        }

        [HttpGet]
        [Route("{id}")]
        public ExameDTO Get(Guid Id)
        {
            return service.GetById(Id);
        }

        [HttpPost]
        public void Insert(ExameInsertDTO exame)
        {
            service.Insert(exame);
        }

        [HttpDelete]
        [Route("{id}")]
        public void Delete(Guid Id)
        {
            service.Delete(Id);
        }

        [HttpPut]
        [Route("{id}")]
        public void Update(Guid Id, ExameDTO exame)
        {
            service.Update(Id, exame);
        }
    }
}
