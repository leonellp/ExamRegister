using ExamRegister.DA.Abstractions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class PacienteInformacaoRepository : IPacienteInformacaoRepository {
        private readonly ExamRegisterContext examregisterContext;

        public PacienteInformacaoRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid IdpacienteInformacao) {
            var pacinfo = examregisterContext.pacienteinformacao.Where(a => a.Idpacienteinformacao == IdpacienteInformacao).FirstOrDefault();
            examregisterContext.pacienteinformacao.Remove(pacinfo);
            examregisterContext.SaveChanges();
        }

        public pacienteinformacao GetById(Guid IdpacienteInformacao) {
            var pacinfo = examregisterContext.pacienteinformacao.Where(a => a.Idpacienteinformacao == IdpacienteInformacao).FirstOrDefault();
            return pacinfo;
        }

        public void Insert(pacienteinformacao pacienteInformacao) {
            examregisterContext.pacienteinformacao.Add(pacienteInformacao);
            examregisterContext.SaveChanges();
        }

        public IQueryable<pacienteinformacao> List() {
            return examregisterContext.pacienteinformacao;
        }

        public void Update(Guid IdpacienteInformacao, pacienteinformacao pacienteInformacaoNew) {
            pacienteinformacao pacinfo = examregisterContext.pacienteinformacao.Where(a => a.Idpacienteinformacao == IdpacienteInformacao).FirstOrDefault();
            
            pacinfo.idpaciente = pacienteInformacaoNew.idpaciente;
            pacinfo.idinformacao = pacienteInformacaoNew.idinformacao;
            
            examregisterContext.SaveChanges();
        }
    }
}
