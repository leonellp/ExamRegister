using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class ReuniaoService : IReuniaoService {
        private readonly IReuniaoRepository repository;
        private IMapper mapper;

        public ReuniaoService(IReuniaoRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }
        public void Delete(Guid Idreunioes) {
            repository.Delete(Idreunioes);
        }

        public ReuniaoDTO GetById(Guid Idreunioes) {
            return mapper.Map<ReuniaoDTO>(repository.GetById(Idreunioes));
        }

        public void Insert(ReuniaoInsertDTO reuniao) {
            var r = mapper.Map<reuniao>(reuniao);
            r.idrenuiao = Guid.NewGuid();
            repository.Insert(r);
        }

        public paginacao<ReuniaoDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            ) {

            int? nCount = null;

            var reunioes = repository.List();
            if (soinativos ==  true) {
                reunioes = reunioes.Where(a => a.inativo != null);
            } else {
                reunioes = reunioes.Where(a => a.inativo == null);
            }

            if (pesquisa != null) {
                reunioes = reunioes.Where(a => a.idexterno.ToUpper().Contains(pesquisa.ToUpper()) || a.nome.ToUpper().Contains(pesquisa.ToUpper()));
            }

            if (count) {
                nCount = reunioes.Count();
            }

            if (skip < 0) skip = 0;
            reunioes = reunioes.OrderBy(a => a.nome);
            reunioes = reunioes.Skip(skip).Take(top);


            return new paginacao<ReuniaoDTO>() {
                values = reunioes.ProjectTo<ReuniaoDTO>(mapper.ConfigurationProvider).ToArray(),
                count = nCount
            };
        }

        public void Update(Guid Idreunioes, ReuniaoDTO reuniaoNew) {
            repository.Update(Idreunioes, mapper.Map<reuniao>(reuniaoNew));
        }        
    }
}
