using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IMedicoRepository {
        IQueryable<medico> List();
        medico GetById(Guid Idmedico);
        void Insert(medico medico);
        void Delete(Guid Idmedico);
        void Update(Guid Idmedico, medico medicoNew);
    }
}
