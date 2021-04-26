using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class paciente
    {
        public paciente()
        {
            exame = new HashSet<exame>();
            historicopaciente = new HashSet<historicopaciente>();
            pacienteinformacao = new HashSet<pacienteinformacao>();
        }

        public Guid idpaciente { get; set; }
        public string idexterno { get; set; }
        public string nome { get; set; }
        public char sexo { get; set; }
        public DateTime nascimento { get; set; }
        public DateTime? inativo { get; set; }

        public virtual ICollection<exame> exame { get; set; }
        public virtual ICollection<historicopaciente> historicopaciente { get; set; }
        public virtual ICollection<pacienteinformacao> pacienteinformacao { get; set; }
    }
}
