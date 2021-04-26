using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class EnderecoService : IEnderecoService {
        private readonly IEnderecoRepository repository;
        private IMapper mapper;

        public EnderecoService(IEnderecoRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }
        public void Delete(Guid Idendereco) {
            repository.Delete(Idendereco);
        }

        public EnderecoDTO GetById(Guid Idendereco) {
            return mapper.Map<EnderecoDTO>(repository.GetById(Idendereco));
        }

        public void Insert(EnderecoInsertDTO Endereco) {
            var r = mapper.Map<endereco>(Endereco);
            r.idendereco = Guid.NewGuid();
            repository.Insert(r);
        }

        public IQueryable<EnderecoDTO> List(bool soinativos) {
            var enderecos = repository.List();
            if (soinativos) {
                enderecos = enderecos.Where(a => a.inativo != null);
            } else {
                enderecos = enderecos.Where(a => a.inativo == null);
            }

            return enderecos.ProjectTo<EnderecoDTO>(mapper.ConfigurationProvider);
        }

        public void Update(Guid Idendereco, EnderecoDTO enderecoNew) {
            repository.Update(Idendereco, mapper.Map<endereco>(enderecoNew));
        }
    }
}
