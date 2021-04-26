using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class PacienteRepository : IPacienteRepository {
        private readonly ExamRegisterContext examregisterContext;

        public PacienteRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid Idpaciente) {
            var paciente = examregisterContext.paciente.Where(a => a.idpaciente == Idpaciente).FirstOrDefault();
            paciente.inativo = DateTime.Now;
            examregisterContext.SaveChanges();
        }

        public paciente GetById(Guid Idpaciente) {
            var paciente = examregisterContext.paciente.Where(a => a.idpaciente == Idpaciente).FirstOrDefault();
            return paciente;
        }

        public void Insert(paciente paciente) {
            examregisterContext.paciente.Add(paciente);
            examregisterContext.SaveChanges();
        }

        public IQueryable<paciente> List() {
            return examregisterContext.paciente;
        }

        public void Update(Guid Idpaciente, paciente pacienteNew) {
            paciente paciente = examregisterContext.paciente.Where(a => a.idpaciente == Idpaciente).FirstOrDefault();
            
            paciente.idexterno = pacienteNew.idexterno;
            paciente.nome = pacienteNew.nome;
            paciente.sexo = pacienteNew.sexo;
            paciente.nascimento = pacienteNew.nascimento;
            paciente.inativo = pacienteNew.inativo;
            
            examregisterContext.SaveChanges();
        }
    }
}
