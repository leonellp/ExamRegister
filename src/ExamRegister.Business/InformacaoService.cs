using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class InformacaoService : IInformacaoService {
        private readonly IInformacaoRepository repository;
        private IMapper mapper;

        public InformacaoService(IInformacaoRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }
        public void Delete(Guid Idinformacao) {
            repository.Delete(Idinformacao);
        }

        public InformacaoDTO GetById(Guid Idinformacao) {
            return mapper.Map<InformacaoDTO>(repository.GetById(Idinformacao));
        }

        public void Insert(InformacaoInsertDTO informacao) {
            var r = mapper.Map<informacao>(informacao);
            r.idinformacao = Guid.NewGuid();
            repository.Insert(r);
        }

        public paginacao<InformacaoDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            ) {

            int? nCount = null;

            var informacoes = repository.List();
            if (soinativos == true) {
                informacoes = informacoes.Where(a => a.inativo != null);
            } else {
                informacoes = informacoes.Where(a => a.inativo == null);
            }

            if (pesquisa != null) {
                informacoes = informacoes.Where(a => a.idexterno.ToUpper().Contains(pesquisa.ToUpper()) || a.nome.ToUpper().Contains(pesquisa.ToUpper()));
            }

            if (count) {
                nCount = informacoes.Count();
            }

            if (skip < 0) skip = 0;
            informacoes = informacoes.OrderBy(a => a.nome);
            informacoes = informacoes.Skip(skip).Take(top);


            return new paginacao<InformacaoDTO>() {
                values = informacoes.ProjectTo<InformacaoDTO>(mapper.ConfigurationProvider),
                count = nCount
            };
        }

        public void Update(Guid Idinformacao, InformacaoDTO informacaoNew) {
            repository.Update(Idinformacao, mapper.Map<informacao>(informacaoNew));
        }
    }
}
