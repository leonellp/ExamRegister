using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class ExameDiagRepository : IExameDiagRepository {
        private readonly ExamRegisterContext examregisterContext;

        public ExameDiagRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid idexamediag) {
            var examediag = examregisterContext.examediag.Where(a => a.idexamediag == idexamediag).FirstOrDefault();
            examregisterContext.examediag.Remove(examediag);
            examregisterContext.SaveChanges();
        }

        public examediag GetById(Guid idexamediag) {
            var examediag = examregisterContext.examediag.Where(a => a.idexamediag == idexamediag).FirstOrDefault();
            return examediag;
        }

        public void Insert(examediag examediag) {
            examregisterContext.examediag.Add(examediag);
            examregisterContext.SaveChanges();
        }

        public IQueryable<examediag> List() {
            return examregisterContext.examediag;
        }

        public void Update(Guid idexamediag, examediag medicosClinicasNew) {
            examediag medcli = examregisterContext.examediag.Where(a => a.idexamediag == idexamediag).FirstOrDefault();
            
            medcli.idexame = medicosClinicasNew.idexame;
            medcli.iddiag = medicosClinicasNew.iddiag;

            examregisterContext.SaveChanges();
        }
    }
}
