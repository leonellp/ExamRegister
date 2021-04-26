using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IExameDiagService {
        IQueryable<ExameDiagDTO> List();
        ExameDiagDTO GetById(Guid Idexamediag);
        void Insert(ExameDiagInsertDTO examediag);
        void Delete(Guid Idexamediag);
        void Update(Guid Idexamediag, ExameDiagDTO examediagNew);
    }
}
