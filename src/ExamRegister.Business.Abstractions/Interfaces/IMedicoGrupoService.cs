using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IMedicoGrupoService {
        IQueryable<MedicoGrupoDTO> List();
        MedicoGrupoDTO GetById(Guid idmedicogrupo);
        void Insert(MedicoGrupoInsertDTO medicogrupo);
        void Delete(Guid idmedicogrupo);
        void Update(Guid idmedicogrupo, MedicoGrupoDTO medicogrupoNew);
    }
}
