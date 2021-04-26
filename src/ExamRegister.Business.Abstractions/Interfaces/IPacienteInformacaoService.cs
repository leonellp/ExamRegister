using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IPacienteInformacaoService {
        IQueryable<PacienteInformacaoDTO> List(Guid? idpaciente = null);
        PacienteInformacaoDTO GetById(Guid IdpacienteInformacao);
        void Insert(PacienteInformacaoInsertDTO pacienteInformacao);
        void Delete(Guid IdpacienteInformacao);
        void Update(Guid IdpacienteInformacao, PacienteInformacaoUpdateDTO pacienteInformacaoNew);
    }
}
