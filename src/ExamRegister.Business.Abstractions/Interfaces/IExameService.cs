using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IExameService {
        IQueryable<ExameDTO> List(bool soinativos);
        ExameDTO GetById(Guid Idexame);
        void Insert(ExameInsertDTO Exame);
        void Delete(Guid Idexame);
        void Update(Guid Idexame, ExameDTO exameNew);
    }
}
