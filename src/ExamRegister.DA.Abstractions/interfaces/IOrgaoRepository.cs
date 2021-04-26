using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IOrgaoRepository {
        IQueryable<orgao> List();
        orgao GetById(Guid Idorgao);
        void Insert(orgao orgao);
        void Delete(Guid Idorgao);
        void Update(Guid Idorgao, orgao orgaoNew);
    }
}
