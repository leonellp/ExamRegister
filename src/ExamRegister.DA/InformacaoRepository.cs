using ExamRegister.DA.Abstractions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class InformacaoRepository : IInformacaoRepository {
        private readonly ExamRegisterContext examregisterContext;

        public InformacaoRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid Idinformacao) {
            var info = examregisterContext.informacao.Where(a => a.idinformacao == Idinformacao).FirstOrDefault();
            info.inativo = DateTime.Now;
            examregisterContext.SaveChanges();
        }

        public informacao GetById(Guid Idinformacao) {
            var info = examregisterContext.informacao.Where(a => a.idinformacao == Idinformacao).FirstOrDefault();
            return info;
        }

        public void Insert(informacao informacao) {
            examregisterContext.informacao.Add(informacao);
            examregisterContext.SaveChanges();
        }

        public IQueryable<informacao> List() {
            return examregisterContext.informacao;
        }

        public void Update(Guid Idinformacao, informacao informacaoNew) {
            informacao info = examregisterContext.informacao.Where(a => a.idinformacao == Idinformacao).FirstOrDefault();
            
            info.nome = informacaoNew.nome;
            info.inativo = informacaoNew.inativo;
            info.idexterno = informacaoNew.idexterno;
            
            examregisterContext.SaveChanges();
        }
    }
}
