using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;
using System.IO;
using Microsoft.AspNetCore.Http;

namespace ExamRegister.Business {
    public class ImagemService : IImagemService {
        private readonly IImagemRepository repository;
        private IMapper mapper;

        public ImagemService(IImagemRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }

        public void Delete(Guid idimagem) {
            repository.Delete(idimagem);
        }

        public ImagemDTO GetById(Guid idimagem) {
            return mapper.Map<ImagemDTO>(repository.GetById(idimagem));
        }

        public ImagemDTO Insert(IFormFile arquivo) {
            Guid idimagem = Guid.NewGuid();

            string imagemKeyBase = Path.Combine(
                "imagens",
                DateTime.Now.Year.ToString(),
                DateTime.Now.Month.ToString()
                );

            string pastaImagens = Path.Combine(Directory.GetCurrentDirectory(), imagemKeyBase);

            if (!Directory.Exists(pastaImagens)) {
                Directory.CreateDirectory(pastaImagens);
            }

            string extensaoImagem = Path.GetExtension(arquivo.FileName);

            string imagemKey = Path.Combine(
                imagemKeyBase,
                idimagem.ToString() +
                extensaoImagem
                );

            string imagemKeyFull = Path.Combine(
                Directory.GetCurrentDirectory(),
                imagemKey
                );

            using (FileStream filestream = File.Create(imagemKeyFull)) {
                arquivo.CopyToAsync(filestream);
                filestream.Flush();
            }

            imagem imagem = new imagem();

            imagem.idimagem = idimagem;
            imagem.url = imagemKey;
            imagem.dataupload = DateTime.Now;
            imagem.nome = arquivo.FileName;

            repository.Insert(imagem);

            return mapper.Map<ImagemDTO>(imagem);
        }

        public IQueryable<ImagemDTO> List(bool soinativos) {
            var imagem = repository.List();
            if (soinativos) {
                imagem = imagem.Where(a => a.inativo != null);
            } else {
                imagem = imagem.Where(a => a.inativo == null);
            }

            return imagem.ProjectTo<ImagemDTO>(mapper.ConfigurationProvider);
        }

        public void Update(Guid idimagem, ImagemDTO imagemNew) {
            repository.Update(idimagem, mapper.Map<imagem>(imagemNew));
        }
    }
}
