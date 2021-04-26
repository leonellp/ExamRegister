using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class PacienteInsertDTO {
        public string idexterno { get; set; }
        public string nome { get; set; }
        public char sexo { get; set; }
        public DateTime nascimento { get; set; }
        public DateTime? inativo { get; set; }

        public HistoricoPacienteInsertDTO[] historicoPaciente { get; set; }
        public PacienteInformacaoInsertDTO[] pacienteInformacao { get; set; }
    }
}
