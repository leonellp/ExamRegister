using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IInformacaoService {
        paginacao<InformacaoDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            );
        InformacaoDTO GetById(Guid Idinformacao);
        void Insert(InformacaoInsertDTO informacao);
        void Delete(Guid Idinformacao);
        void Update(Guid Idinformacao, InformacaoDTO informacaoNew);
    }
}
