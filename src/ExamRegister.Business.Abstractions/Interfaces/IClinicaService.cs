using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IClinicaService {
        paginacao<ClinicaDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null);
        ClinicaDTO GetById(Guid Idclinica);
        void Insert(ClinicaInsertDTO Clinica);
        void Delete(Guid Idclinica);
        void Update(Guid Idclinica, ClinicaUpdateDTO clinicaNew);
    }
}
