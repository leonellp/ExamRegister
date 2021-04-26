using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IPacienteService {
        paginacao<PacienteDTO> List(
            int skip,
            int top,
            bool count, 
            bool? soinativos = null, 
            string pesquisa = null
            );
        PacienteDTO GetById(Guid Idpaciente);
        void Insert(PacienteInsertDTO paciente);
        void Delete(Guid Idpaciente);
        void Update(Guid Idpaciente, PacienteUpdateDTO pacienteNew);
    }
}
