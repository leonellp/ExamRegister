using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class historicopaciente
    {
        public Guid idhispaciente { get; set; }
        public string descricao { get; set; }
        public Guid idpaciente { get; set; }
        public DateTime data { get; set; }
        public DateTime? inativo { get; set; }

        public virtual paciente idpacienteNavigation { get; set; }
    }
}
