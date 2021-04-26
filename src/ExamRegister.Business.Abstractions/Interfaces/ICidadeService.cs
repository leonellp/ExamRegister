using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface ICidadeService{
        IQueryable<CidadeDTO> List(Guid idestado, bool? soinativos);
        CidadeDTO GetById(Guid Idcidade);
        void Insert(CidadeInsertDTO Cidade);
        void Delete(Guid Idcidade);
        void Update(Guid Idcidade, CidadeDTO cidadeNew);
    }
}