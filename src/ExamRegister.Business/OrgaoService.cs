using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class OrgaoService : IOrgaoService {
        private readonly IOrgaoRepository repository;
        private IMapper mapper;

        public OrgaoService(IOrgaoRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }
        public void Delete(Guid Idorgao) {
            repository.Delete(Idorgao);
        }

        public OrgaoDTO GetById(Guid Idorgao) {
            return mapper.Map<OrgaoDTO>(repository.GetById(Idorgao));
        }

        public void Insert(OrgaoInsertDTO orgao) {
            var r = mapper.Map<orgao>(orgao);
            r.idorgao = Guid.NewGuid();
            repository.Insert(r);
        }

        public paginacao<OrgaoDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            ) {

            int? nCount = null;

            var orgaos = repository.List();
            if (soinativos == true) {
                orgaos = orgaos.Where(a => a.inativo != null);
            } else {
                orgaos = orgaos.Where(a => a.inativo == null);
            }

            if (pesquisa != null) {
                orgaos = orgaos.Where(a => a.idexterno.ToUpper().Contains(pesquisa.ToUpper()) || a.nome.ToUpper().Contains(pesquisa.ToUpper()));
            }

            if (count) {
                nCount = orgaos.Count();
            }

            if (skip < 0) skip = 0;
            orgaos = orgaos.OrderBy(a => a.nome);
            orgaos = orgaos.Skip(skip).Take(top);

            return new paginacao<OrgaoDTO>() {
                values = orgaos.ProjectTo<OrgaoDTO>(mapper.ConfigurationProvider).ToArray(),
                count = nCount
            };
        }

        public void Update(Guid Idorgao, OrgaoDTO orgaoNew) {
            repository.Update(Idorgao, mapper.Map<orgao>(orgaoNew));
        }
    }
}
