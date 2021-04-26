using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class ReuniaoRepository : IReuniaoRepository {
        private readonly ExamRegisterContext examregisterContext;

        public ReuniaoRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid Idreunioes) {
            var reuniao = examregisterContext.reuniao.Where(a => a.idrenuiao == Idreunioes).FirstOrDefault();
            reuniao.inativo = DateTime.Now;
            examregisterContext.SaveChanges();
        }

        public reuniao GetById(Guid Idreunioes) {
            var reuniao = examregisterContext.reuniao.Where(a => a.idrenuiao == Idreunioes).FirstOrDefault();
            return reuniao;
        }

        public void Insert(reuniao reuniao) {
            examregisterContext.reuniao.Add(reuniao);
            examregisterContext.SaveChanges();
        }

        public IQueryable<reuniao> List() {
            return examregisterContext.reuniao;
        }

        public void Update(Guid Idreunioes, reuniao reuniaoNew) {
            reuniao reuniao = examregisterContext.reuniao.Where(a => a.idrenuiao == Idreunioes).FirstOrDefault();
            
            reuniao.nome = reuniaoNew.nome;
            reuniao.data = reuniaoNew.data;
            reuniao.idexterno = reuniaoNew.idexterno;
            reuniao.inativo = reuniaoNew.inativo;

            examregisterContext.SaveChanges();
        }
    }
}
