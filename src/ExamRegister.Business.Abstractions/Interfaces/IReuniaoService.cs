using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IReuniaoService {
        paginacao<ReuniaoDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            );
        ReuniaoDTO GetById(Guid Idreunioes);
        void Insert(ReuniaoInsertDTO reuniao);
        void Delete(Guid Idreunioes);
        void Update(Guid Idreunioes, ReuniaoDTO reuniaoNew);
    }
}
