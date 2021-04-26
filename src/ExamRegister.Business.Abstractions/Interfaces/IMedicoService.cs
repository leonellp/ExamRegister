using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IMedicoService {
        paginacao<MedicoDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            );
        MedicoDTO GetById(Guid Idmedico);
        void Insert(MedicoInsertDTO medico);
        void Delete(Guid Idmedico);
        void Update(Guid Idmedico, MedicoUpdateDTO medicoNew);
    }
}