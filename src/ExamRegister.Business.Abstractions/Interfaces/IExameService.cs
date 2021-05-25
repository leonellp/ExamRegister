using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces
{
    public interface IExameService
    {
        paginacao<ExameDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            );
        ExameDTO GetById(Guid Idexame);
        void Insert(ExameInsertDTO Exame);
        void Delete(Guid Idexame);
        void Update(Guid Idexame, ExameDTO exameNew);
    }
}
