using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IOrgaoService {
        paginacao<OrgaoDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            );
        OrgaoDTO GetById(Guid Idorgao);
        void Insert(OrgaoInsertDTO orgao);
        void Delete(Guid Idorgao);
        void Update(Guid Idorgao, OrgaoDTO orgaoNew);
    }
}
