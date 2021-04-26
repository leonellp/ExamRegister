using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IMedicoClinicaRepository {
        IQueryable<medicoclinica> List();
        medicoclinica GetById(Guid IdmedicosClinicas);
        void Insert(medicoclinica medicosClinicas);
        void Delete(Guid IdmedicosClinicas);
        void Update(Guid IdmedicosClinicas, medicoclinica medicosClinicasNew);
    }
}
