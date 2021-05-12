using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class PecaService : IPecaService {

        private readonly IPecaRepository repository;
        private IMapper mapper;

        public PecaService(IPecaRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }
        public void Delete(Guid Idpeca) {
            repository.Delete(Idpeca);
        }

        public PecaDTO GetById(Guid Idpeca) {
            return mapper.Map<PecaDTO>(repository.GetById(Idpeca));
        }

        public void Insert(PecaInsertDTO peca) {
            var r = mapper.Map<peca>(peca);
            r.idpeca = Guid.NewGuid();
            repository.Insert(r);
        }

        public paginacao<PecaDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            ) {

            int? nCount = null;

            var pecas = repository.List();
            if (soinativos == true) {
                pecas = pecas.Where(a => a.inativo != null);
            } else {
                pecas = pecas.Where(a => a.inativo == null);
            }
            if (pesquisa != null) {
                pecas = pecas.Where(a => a.idexterno.ToUpper().Contains(pesquisa.ToUpper()) || a.nome_.ToUpper().Contains(pesquisa.ToUpper()));
            }

            if (count) {
                nCount = pecas.Count();
            }

            if (skip < 0) skip = 0;
            pecas = pecas.OrderBy(a => a.nome_);
            pecas = pecas.Skip(skip).Take(top);


            return new paginacao<PecaDTO>() {
                values = pecas.ProjectTo<PecaDTO>(mapper.ConfigurationProvider).ToArray(),
                count = nCount
            };
        }

        public void Update(Guid Idpeca, PecaDTO pecaNew) {
            repository.Update(Idpeca, mapper.Map<peca>(pecaNew));
        }
    }
}
