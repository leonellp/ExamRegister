using ExamRegister.DA.Abstractions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class PecaRepository : IPecaRepository {
        private readonly ExamRegisterContext examregisterContext;

        public PecaRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }

        public void Delete(Guid Idpeca) {
            var peca = examregisterContext.peca.Where(a => a.idpeca == Idpeca).FirstOrDefault();
            peca.inativo = DateTime.Now;
            examregisterContext.SaveChanges();
        }

        public peca GetById(Guid Idpeca) {
            var peca = examregisterContext.peca.Where(a => a.idpeca == Idpeca).FirstOrDefault();
            return peca;
        }

        public void Insert(peca peca) {
            examregisterContext.peca.Add(peca);
            examregisterContext.SaveChanges();
        }

        public IQueryable<peca> List() {
            return examregisterContext.peca;
        }

        public void Update(Guid Idpeca, peca pecaNew) {
            peca peca = examregisterContext.peca.Where(a => a.idpeca == Idpeca).FirstOrDefault();
            
            peca.nome_ = pecaNew.nome_;
            peca.inativo = pecaNew.inativo;
            peca.idexterno = pecaNew.idexterno;
            
            examregisterContext.SaveChanges();
        }
    }
}
