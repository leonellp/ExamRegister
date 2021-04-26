using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class PacienteInformacaoDTO {
        public Guid Idpacienteinformacao { get; set; }
        public Guid idpaciente { get; set; }
        public Guid idinformacao { get; set; }

        public InformacaoDTO informacao { get; set; }
    }
}
