using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class CidadeRepository : ICidadeRepository {

        private readonly ExamRegisterContext examregisterContext;

        public CidadeRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }

        public void Delete(Guid Idcidade) {
            var cidade = examregisterContext.cidade.Where(a => a.idcidade == Idcidade).FirstOrDefault();
            cidade.inativo = DateTime.Now;
            examregisterContext.SaveChanges();
        }

        public cidade GetById(Guid Idcidade) {
            var cidade = examregisterContext.cidade.Where(a => a.idcidade == Idcidade).FirstOrDefault();
            return cidade;
        }

        public void Insert(cidade Cidade) {
            examregisterContext.cidade.Add(Cidade);
            examregisterContext.SaveChanges();
        }

        public IQueryable<cidade> List() {
            return examregisterContext.cidade;
        }

        public void Update(Guid Idcidade, cidade cidadeNew) {
            cidade cidade = examregisterContext.cidade.Where(a => a.idcidade == Idcidade).FirstOrDefault();
            cidade.nome = cidadeNew.nome;
            cidade.idestado = cidadeNew.idestado;
            cidade.inativo = cidadeNew.inativo;

            examregisterContext.SaveChanges();
        }
    }
}
