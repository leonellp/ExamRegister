using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IHistoricoPacienteRepository {
        IQueryable<historicopaciente> List();
        historicopaciente GetById(Guid Idhistoricopaciente);
        void Insert(historicopaciente historicoPaciente);
        void Delete(Guid Idhistoricopaciente);
        void Update(Guid Idhistoricopaciente, historicopaciente historicoPacienteNew);
    }
}
