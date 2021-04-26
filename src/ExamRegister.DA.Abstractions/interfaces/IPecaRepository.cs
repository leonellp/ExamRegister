using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IPecaRepository {
        IQueryable<peca> List();
        peca GetById(Guid Idpeca);
        void Insert(peca peca);
        void Delete(Guid Idpeca);
        void Update(Guid Idpeca, peca pecaNew);
    }
}
