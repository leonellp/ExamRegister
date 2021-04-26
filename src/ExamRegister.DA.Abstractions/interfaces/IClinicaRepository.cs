using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IClinicaRepository {
        IQueryable<clinica> List();
        clinica GetById(Guid Idclinica);
        void Insert(clinica Clinica);
        void Delete(Guid Idclinica);
        void Update(Guid Idclinica, clinica clinicaNew);
    }
}
