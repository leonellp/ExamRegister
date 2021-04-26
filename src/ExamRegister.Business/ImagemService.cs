using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

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

        public void Insert(ImagemInsertDTO imagem) {
            var r = mapper.Map<imagem>(imagem);
            r.idimagem = Guid.NewGuid();
            repository.Insert(r);
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
