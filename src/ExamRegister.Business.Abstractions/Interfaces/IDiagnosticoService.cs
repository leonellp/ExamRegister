using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IDiagnosticoService {
        paginacao<DiagnosticoDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null);
        DiagnosticoDTO GetById(Guid iddiagnostico);
        void Insert(DiagnosticoInsertDTO diagnostico);
        void Delete(Guid iddiagnostico);
        void Update(Guid iddiagnostico, DiagnosticoDTO diagnosticoNew);
    }
}
