using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IExameRepository {
        IQueryable<exame> List();
        exame GetById(Guid Idexame);
        void Insert(exame Exame);
        void Delete(Guid Idexame);
        void Update(Guid Idexame, exame exameNew);
    }
}
