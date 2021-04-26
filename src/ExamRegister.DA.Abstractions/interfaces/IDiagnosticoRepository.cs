using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IDiagnosticoRepository {
        IQueryable<diagnostico> List();
        diagnostico GetById(Guid iddiagnostico);
        void Insert(diagnostico diagnostico);
        void Delete(Guid iddiagnostico);
        void Update(Guid iddiagnostico, diagnostico diagnosticoNew);
    }
}
