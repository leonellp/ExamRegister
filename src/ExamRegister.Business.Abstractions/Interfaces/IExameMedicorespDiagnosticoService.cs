using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IExameMedicorespDiagnosticoService {
        IQueryable<ExameMedicorespDiagnosticoDTO> List();
        ExameMedicorespDiagnosticoDTO GetById(Guid Idexmeddiag);
        void Insert(ExameMedicorespDiagnosticoInsertDTO Exmeddiag);
        void Delete(Guid Idexmeddiag);
        void Update(Guid Idexmeddiag, ExameMedicorespDiagnosticoDTO ExmeddiagNew);
    }
}
