using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IExameDiagRepository {
        IQueryable<examediag> List();
        examediag GetById(Guid Idexamediag);
        void Insert(examediag examediag);
        void Delete(Guid Idexamediag);
        void Update(Guid Idexamediag, examediag examediagNew);
    }
}
