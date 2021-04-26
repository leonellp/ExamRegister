using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class GrupoDeMedicoRepository : IGrupoDeMedicosRepository {
        private readonly ExamRegisterContext examregisterContext;

        public GrupoDeMedicoRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid idgrupodemedico) {
            var grupodemedico = examregisterContext.grupodemedico.Where(a => a.idgrupodemedicos == idgrupodemedico).FirstOrDefault();
            grupodemedico.inativo = DateTime.Now;
            examregisterContext.SaveChanges();
        }

        public grupodemedico GetById(Guid idgrupodemedico) {
            var grupodemedico = examregisterContext.grupodemedico.Where(a => a.idgrupodemedicos == idgrupodemedico).FirstOrDefault();
            return grupodemedico;
        }

        public void Insert(grupodemedico usuario) {
            examregisterContext.grupodemedico.Add(usuario);
            examregisterContext.SaveChanges();
        }

        public IQueryable<grupodemedico> List() {
            return examregisterContext.grupodemedico;

        }

        public void Update(Guid idgrupodemedico, grupodemedico grupodemedicoNew) {
            grupodemedico grupodemedico = examregisterContext.grupodemedico.Where(a => a.idgrupodemedicos == idgrupodemedico).FirstOrDefault();

            grupodemedico.nome = grupodemedicoNew.nome;
            grupodemedico.inativo = grupodemedicoNew.inativo;
            grupodemedico.idexterno = grupodemedicoNew.idexterno;

            examregisterContext.SaveChanges();
        }
    }
}
