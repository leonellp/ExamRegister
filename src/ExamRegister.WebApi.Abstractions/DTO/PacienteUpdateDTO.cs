using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class PacienteUpdateDTO 
        {
        public Guid idpaciente { get; set; }
        public string idexterno { get; set; }
        public string nome { get; set; }
        public char sexo { get; set; }
        public DateTime nascimento { get; set; }
        public DateTime? inativo { get; set; }

        public IEnumerable<HistoricoPacienteUpdateDTO> historicoPaciente { get; set; }
        public IEnumerable<PacienteInformacaoUpdateDTO> pacienteInformacao { get; set; }
    }
}
