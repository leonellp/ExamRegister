using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IEstadoRepository {
        IQueryable<estado> List();
        estado GetById(Guid Idestado);
        void Insert(estado Estado);
        void Delete(Guid Idestado);
        void Update(Guid Idestado, estado estadoNew);
    }
}
