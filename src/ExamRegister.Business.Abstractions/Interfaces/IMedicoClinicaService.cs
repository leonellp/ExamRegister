using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IMedicoClinicaService {
        IQueryable<MedicoClinicaDTO> List(Guid idmedico);
        MedicoClinicaDTO GetById(Guid IdmedicosClinicas);
        void Insert(MedicoClinicaInsertDTO medicosClinicas);
        void Delete(Guid IdmedicosClinicas);
        void Update(Guid IdmedicosClinicas, MedicoClinicaDTO medicosClinicasNew);
    }
}
