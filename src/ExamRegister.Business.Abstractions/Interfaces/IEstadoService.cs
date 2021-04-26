using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IEstadoService {
        IQueryable<EstadoDTO> List(bool soinativos);
        EstadoDTO GetById(Guid Idestado);
        void Insert(EstadoInsertDTO Estado);
        void Delete(Guid Idestado);
        void Update(Guid Idestado, EstadoDTO estadoNew);
    }
}
