using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IPecaService {
        paginacao<PecaDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            );
        PecaDTO GetById(Guid Idpeca);
        void Insert(PecaInsertDTO peca);
        void Delete(Guid Idpeca);
        void Update(Guid Idpeca, PecaDTO pecaNew);
    }
}
