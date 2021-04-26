using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IImagemRepository {
        IQueryable<imagem> List();
        imagem GetById(Guid idimagem);
        void Insert(imagem imagem);
        void Delete(Guid idimagem);
        void Update(Guid idimagem, imagem imagemNew);
    }
}
