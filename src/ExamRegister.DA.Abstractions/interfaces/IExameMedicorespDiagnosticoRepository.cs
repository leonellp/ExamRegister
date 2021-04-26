using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IExameMedicorespDiagnosticoRepository {
        IQueryable<examemedicorespdiagnostico> List();
        examemedicorespdiagnostico GetById(Guid Idexmeddiag);
        void Insert(examemedicorespdiagnostico Exmeddiag);
        void Delete(Guid Idexmeddiag);
        void Update(Guid Idexmeddiag, examemedicorespdiagnostico ExmeddiagNew);
    }
}
