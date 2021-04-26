using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class ExameMedicorespDiagnosticoRepository : IExameMedicorespDiagnosticoRepository {
        private readonly ExamRegisterContext examregisterContext;

        public ExameMedicorespDiagnosticoRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid Idexmeddiag) {
            var exmeddiag = examregisterContext.examemedicorespdiagnostico.Where(a => a.idexmeddiag == Idexmeddiag).FirstOrDefault();
            examregisterContext.examemedicorespdiagnostico.Remove(exmeddiag);
            examregisterContext.SaveChanges();
        }

        public examemedicorespdiagnostico GetById(Guid Idexmeddiag) {
            var exmeddiag = examregisterContext.examemedicorespdiagnostico.Where(a => a.idexmeddiag == Idexmeddiag).FirstOrDefault();
            return exmeddiag;
        }

        public void Insert(examemedicorespdiagnostico Exmeddiag) {
            examregisterContext.examemedicorespdiagnostico.Add(Exmeddiag);
            examregisterContext.SaveChanges();
        }

        public IQueryable<examemedicorespdiagnostico> List() {
            return examregisterContext.examemedicorespdiagnostico;
        }

        public void Update(Guid Idexmeddiag, examemedicorespdiagnostico ExmeddiagNew) {
            examemedicorespdiagnostico exmeddiag = examregisterContext.examemedicorespdiagnostico.Where(a => a.idexmeddiag == Idexmeddiag).FirstOrDefault();
            
            exmeddiag.idmedico = ExmeddiagNew.idmedico;
            exmeddiag.idexame = ExmeddiagNew.idexame;

            examregisterContext.SaveChanges();
        }
    }
}
