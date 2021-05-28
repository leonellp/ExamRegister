using ExamRegister.DA.Abstractions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class HistoricoPacienteRepository : IHistoricoPacienteRepository {
        private readonly ExamRegisterContext examregisterContext;

        public HistoricoPacienteRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid Idhistoricopaciente) {
            var historicopaciente = examregisterContext.historicopaciente.Where(a => a.idhispaciente == Idhistoricopaciente).FirstOrDefault();
            //historicopaciente.inativo = DateTime.Now;
            examregisterContext.Remove(historicopaciente);
            examregisterContext.SaveChanges();
        }

        public historicopaciente GetById(Guid Idhistoricopaciente) {
            var historicopaciente = examregisterContext.historicopaciente.Where(a => a.idhispaciente == Idhistoricopaciente).FirstOrDefault();
            return historicopaciente;
        }

        public void Insert(historicopaciente historicoPaciente) {
            examregisterContext.historicopaciente.Add(historicoPaciente);
            examregisterContext.SaveChanges();
        }

        public IQueryable<historicopaciente> List() {
            return examregisterContext.historicopaciente;
        }

        public void Update(Guid Idhistoricopaciente, historicopaciente historicoPacienteNew) {
            historicopaciente historicopaciente = examregisterContext.historicopaciente.Where(a => a.idhispaciente == Idhistoricopaciente).FirstOrDefault();

            historicopaciente.descricao = historicoPacienteNew.descricao;
            historicopaciente.idpaciente = historicoPacienteNew.idpaciente;
            historicopaciente.data = historicoPacienteNew.data;
            historicopaciente.inativo = historicoPacienteNew.inativo;

            examregisterContext.SaveChanges();
        }
    }
}
