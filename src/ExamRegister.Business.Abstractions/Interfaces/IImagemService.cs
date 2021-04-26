using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IImagemService {
        IQueryable<ImagemDTO> List(bool soinativos);
        ImagemDTO GetById(Guid idimagem);
        void Insert(ImagemInsertDTO imagem);
        void Delete(Guid idimagem);
        void Update(Guid idimagem, ImagemDTO imagemNew);
    }
}
