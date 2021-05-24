using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IImagemService {
        IQueryable<ImagemDTO> List(bool soinativos);
        ImagemDTO GetById(Guid idimagem);
        ImagemDTO Insert(IFormFile arquivo);
        void Delete(Guid idimagem);
        void Update(Guid idimagem, ImagemDTO imagemNew);
    }
}
