using ExamRegister.DA.Abstractions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class MedicoClinicaRepository : IMedicoClinicaRepository {
        private readonly ExamRegisterContext examregisterContext;

        public MedicoClinicaRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid IdmedicosClinicas) {
            var medcli = examregisterContext.medicoclinica.Where(a => a.idmedcli == IdmedicosClinicas).FirstOrDefault();
            examregisterContext.medicoclinica.Remove(medcli);
            examregisterContext.SaveChanges();
        }

        public medicoclinica GetById(Guid IdmedicosClinicas) {
            var medcli = examregisterContext.medicoclinica.Where(a => a.idmedcli == IdmedicosClinicas).FirstOrDefault();
            return medcli;
        }

        public void Insert(medicoclinica medicosClinicas) {
            examregisterContext.medicoclinica.Add(medicosClinicas);
            examregisterContext.SaveChanges();
        }

        public IQueryable<medicoclinica> List() {
            return examregisterContext.medicoclinica;
        }

        public void Update(Guid IdmedicosClinicas, medicoclinica medicosClinicasNew) {
            medicoclinica medcli = examregisterContext.medicoclinica.Where(a => a.idmedcli == IdmedicosClinicas).FirstOrDefault();
            
            medcli.idmedico = medicosClinicasNew.idmedico;
            medcli.idclinica = medicosClinicasNew.idclinica;

            examregisterContext.SaveChanges();
        }
    }
}
