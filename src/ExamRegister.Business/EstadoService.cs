using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class EstadoService : IEstadoService {
        private readonly IEstadoRepository repository;
        private IMapper mapper;

        public EstadoService(IEstadoRepository repository, IMapper _mapper) {
            this.repository = repository;
            mapper = _mapper;
        }
        public void Delete(Guid Idestado) {
            repository.Delete(Idestado);
        }

        public EstadoDTO GetById(Guid Idestado) {
            return mapper.Map<EstadoDTO>(repository.GetById(Idestado));
        }

        public void Insert(EstadoInsertDTO Estado) {
            var r = mapper.Map<estado>(Estado);
            r.idestado = Guid.NewGuid();
            repository.Insert(r);
        }

        public IQueryable<EstadoDTO> List(bool soinativos) {
            var estados = repository.List();
            if (soinativos) {
                estados = estados.Where(a => a.inativo != null);
            } else {
                estados = estados.Where(a => a.inativo == null);
            }
            return estados.ProjectTo<EstadoDTO>(mapper.ConfigurationProvider);
        }

        public void Update(Guid Idestado, EstadoDTO estadoNew) {
            repository.Update(Idestado, mapper.Map<estado>(estadoNew));
        }
    }
}
