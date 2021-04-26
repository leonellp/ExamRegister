using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class PacienteDTO
    {
        public Guid idpaciente { get; set; }
        public string idexterno { get; set; }
        public string nome { get; set; }
        public char sexo { get; set; }
        public DateTime nascimento { get; set; }
        public DateTime? inativo { get; set; }

        public IEnumerable<HistoricoPacienteDTO> historicoPaciente { get; set; }
        public IEnumerable<PacienteInformacaoDTO> pacienteInformacao { get; set; }
    }
}
