using ExamRegister.DA.Abstractions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class MedicoGrupoRepository : IMedicoGrupoRepository {
        private readonly ExamRegisterContext examregisterContext;

        public MedicoGrupoRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid idgrupomedico) {
            var grupomedico = examregisterContext.medicogrupo.Where(a => a.idgrupomedico == idgrupomedico).FirstOrDefault();
            examregisterContext.medicogrupo.Remove(grupomedico);
            examregisterContext.SaveChanges();
        }

        public medicogrupo GetById(Guid idgrupomedico) {
            var grupomedico = examregisterContext.medicogrupo.Where(a => a.idgrupomedico == idgrupomedico).FirstOrDefault();
            return grupomedico;
        }

        public void Insert(medicogrupo grupomedicos) {
            examregisterContext.medicogrupo.Add(grupomedicos);
            examregisterContext.SaveChanges();
        }

        public IQueryable<medicogrupo> List() {
            return examregisterContext.medicogrupo;
        }

        public void Update(Guid idgrupomedico, medicogrupo idgrupomedicoNew) {
            medicogrupo grupomedico = examregisterContext.medicogrupo.Where(a => a.idgrupomedico == idgrupomedico).FirstOrDefault();

            grupomedico.idgrupo = idgrupomedicoNew.idgrupo;
            grupomedico.idmedico = idgrupomedicoNew.idmedico;

            examregisterContext.SaveChanges();
        }
    }
}
