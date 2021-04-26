using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IHistoricoPacienteService {
        IQueryable<HistoricoPacienteDTO> List(Guid? idpaciente = null, bool? soinativos = null);
        HistoricoPacienteDTO GetById(Guid Idhistoricopaciente);
        void Insert(HistoricoPacienteInsertDTO historicoPaciente);
        void Delete(Guid Idhistoricopaciente);
        void Update(Guid Idhistoricopaciente, HistoricoPacienteUpdateDTO historicoPacienteNew);
    }
}
