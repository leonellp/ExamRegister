using ExamRegister.DA.Abstractions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class ImagemRepository : IImagemRepository {
        private readonly ExamRegisterContext examregisterContext;

        public ImagemRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid idimagem) {
            var imagem = examregisterContext.imagem.Where(a => a.idimagem == idimagem).FirstOrDefault();
            examregisterContext.Remove(imagem);
            examregisterContext.SaveChanges();
        }

        public imagem GetById(Guid idimagem) {
            var imagem = examregisterContext.imagem.Where(a => a.idimagem == idimagem).FirstOrDefault();
            return imagem;
        }

        public void Insert(imagem imagem) {
            examregisterContext.imagem.Add(imagem);
            examregisterContext.SaveChanges();
        }

        public IQueryable<imagem> List() {
            return examregisterContext.imagem;
        }

        public void Update(Guid idimagem, imagem imagemNew) {
            imagem imagem = examregisterContext.imagem.Where(a => a.idimagem == idimagem).FirstOrDefault();

            imagem.idexame = imagemNew.idexame;
            imagem.nome = imagemNew.nome;
            imagem.url = imagemNew.url;
            imagem.dataupload = imagemNew.dataupload;
            imagem.inativo = imagemNew.inativo;

            examregisterContext.SaveChanges();
        }
    }
}
