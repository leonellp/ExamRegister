using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class MedicoGrupoService : IMedicoGrupoService {
        private readonly IMedicoGrupoRepository repository;
        private IMapper mapper;

        public MedicoGrupoService(IMedicoGrupoRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }
        public void Delete(Guid idmedicogrupo) {
            repository.Delete(idmedicogrupo);            
        }

        public MedicoGrupoDTO GetById(Guid idmedicogrupo) {
            return mapper.Map<MedicoGrupoDTO>(repository.GetById(idmedicogrupo));
        }

        public void Insert(MedicoGrupoInsertDTO medicogrupo) {
            var r = mapper.Map<medicogrupo>(medicogrupo);
            r.idgrupomedico = Guid.NewGuid();
            repository.Insert(r);
        }

        public IQueryable<MedicoGrupoDTO> List() {
            var medicogrupo = repository.List();            
            return medicogrupo.ProjectTo<MedicoGrupoDTO>(mapper.ConfigurationProvider);
        }

        public void Update(Guid idmedicogrupo, MedicoGrupoDTO medicogrupoNew) {
            repository.Update(idmedicogrupo, mapper.Map<medicogrupo>(medicogrupoNew));
        }
    }
}
