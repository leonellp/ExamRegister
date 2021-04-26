using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IMedicoGrupoRepository {
        IQueryable<medicogrupo> List();
        medicogrupo GetById(Guid idmedicogrupo);
        void Insert(medicogrupo medicogrupo);
        void Delete(Guid idmedicogrupo);
        void Update(Guid idmedicogrupo, medicogrupo medicogrupoNew);
    }
}
