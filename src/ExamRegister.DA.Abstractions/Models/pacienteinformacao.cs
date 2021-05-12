using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class pacienteinformacao
    {
        public Guid Idpacienteinformacao { get; set; }
        public Guid idpaciente { get; set; }
        public Guid idinformacao { get; set; }

        public virtual informacao idinformacaoNavigation { get; set; }
        public virtual paciente idpacienteNavigation { get; set; }
    }
}
