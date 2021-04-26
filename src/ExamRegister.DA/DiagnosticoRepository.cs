using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class DiagnosticoRepository : IDiagnosticoRepository {
        private readonly ExamRegisterContext examregisterContext;

        public DiagnosticoRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid iddiagnostico) {
            var diagnostico = examregisterContext.diagnostico.Where(a => a.iddiagnostico == iddiagnostico).FirstOrDefault();
            diagnostico.inativo = DateTime.Now;
            examregisterContext.SaveChanges();
        }

        public diagnostico GetById(Guid iddiagnostico) {
            var diagnostico = examregisterContext.diagnostico.Where(a => a.iddiagnostico == iddiagnostico).FirstOrDefault();
            return diagnostico;
        }

        public void Insert(diagnostico diagnosticos) {
            examregisterContext.diagnostico.Add(diagnosticos);
            examregisterContext.SaveChanges();
        }

        public IQueryable<diagnostico> List() {
            return examregisterContext.diagnostico;

        }

        public void Update(Guid iddiagnostico, diagnostico diagnosticoNew) {
            diagnostico diagnostico = examregisterContext.diagnostico.Where(a => a.iddiagnostico == iddiagnostico).FirstOrDefault();

            diagnostico.nome = diagnosticoNew.nome;
            diagnostico.inativo = diagnosticoNew.inativo;
            diagnostico.idexterno = diagnosticoNew.idexterno;

            examregisterContext.SaveChanges();
        }
    }
}
