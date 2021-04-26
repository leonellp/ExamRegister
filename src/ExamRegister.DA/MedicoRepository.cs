using ExamRegister.DA.Abstractions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class MedicoRepository : IMedicoRepository {
        private readonly ExamRegisterContext examregisterContext;

        public MedicoRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid Idmedico) {
            var medico = examregisterContext.medico.Where(a => a.idmedico == Idmedico).FirstOrDefault();
            medico.inativo = DateTime.Now;
            examregisterContext.SaveChanges();
        }

        public medico GetById(Guid Idmedico) {
            var medico = examregisterContext.medico.Where(a => a.idmedico == Idmedico).FirstOrDefault();
            return medico;
        }

        public void Insert(medico medico) {
            examregisterContext.medico.Add(medico);
            examregisterContext.SaveChanges();
        }

        public IQueryable<medico> List() {
            return examregisterContext.medico;
        }

        public void Update(Guid Idmedico, medico medicoNew) {
            medico medico = examregisterContext.medico.Where(a => a.idmedico == Idmedico).FirstOrDefault();
            
            medico.nome = medicoNew.nome;
            medico.email = medicoNew.email;
            medico.celular = medicoNew.celular;
            medico.telefone = medicoNew.telefone;
            medico.telefone2 = medicoNew.telefone2;
            medico.crm = medicoNew.crm;
            medico.inativo = medicoNew.inativo;

            examregisterContext.SaveChanges();
        }
    }
}
