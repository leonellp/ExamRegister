using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class medicoclinicaService : IMedicoClinicaService {
        private readonly IMedicoClinicaRepository repository;
        private IMapper mapper;

        public medicoclinicaService(IMedicoClinicaRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }

        public void Delete(Guid Idmedicoclinicas) {
            repository.Delete(Idmedicoclinicas);
        }

        public MedicoClinicaDTO GetById(Guid Idmedicoclinicas) {
            return mapper.Map<MedicoClinicaDTO>(repository.GetById(Idmedicoclinicas));
        }

        public void Insert(MedicoClinicaInsertDTO medicoclinicas) {
            var r = mapper.Map<medicoclinica>(medicoclinicas);
            r.idmedcli = Guid.NewGuid();
            repository.Insert(r);
        }

        public IQueryable<MedicoClinicaDTO> List(Guid idmedico) {
            var medicoclinicas = repository.List().Where(a => a.idmedico == idmedico);
            return medicoclinicas.ProjectTo<MedicoClinicaDTO>(mapper.ConfigurationProvider);
        }

        public void Update(Guid Idmedicoclinicas, MedicoClinicaDTO medicoclinicasNew) {
            repository.Update(Idmedicoclinicas, mapper.Map<medicoclinica>(medicoclinicasNew));
        }
    }
}
