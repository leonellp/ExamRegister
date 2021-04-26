using ExamRegister.DA.Abstractions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class OrgaoRepository : IOrgaoRepository {
        private readonly ExamRegisterContext examregisterContext;

        public OrgaoRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid Idorgao) {
            var orgao = examregisterContext.orgao.Where(a => a.idorgao == Idorgao).FirstOrDefault();
            orgao.inativo = DateTime.Now;
            examregisterContext.SaveChanges();
        }

        public orgao GetById(Guid Idorgao) {
            var orgao = examregisterContext.orgao.Where(a => a.idorgao == Idorgao).FirstOrDefault();
            return orgao;
        }

        public void Insert(orgao orgao) {
            examregisterContext.orgao.Add(orgao);
            examregisterContext.SaveChanges();
        }

        public IQueryable<orgao> List() {
            return examregisterContext.orgao;
        }

        public void Update(Guid Idorgao, orgao orgaoNew) {
            orgao orgao = examregisterContext.orgao.Where(a => a.idorgao == Idorgao).FirstOrDefault();
            
            orgao.idexterno = orgaoNew.idexterno;
            orgao.nome = orgaoNew.nome;
            orgao.inativo = orgaoNew.inativo;
            
            examregisterContext.SaveChanges();
        }
    }
}
