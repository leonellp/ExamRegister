using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IPacienteInformacaoRepository {
        IQueryable<pacienteinformacao> List();
        pacienteinformacao GetById(Guid IdpacienteInformacao);
        void Insert(pacienteinformacao pacienteInformacao);
        void Delete(Guid IdpacienteInformacao);
        void Update(Guid IdpacienteInformacao, pacienteinformacao pacienteInformacaoNew);
    }
}
