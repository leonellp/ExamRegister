using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class informacao
    {
        public informacao()
        {
            pacienteinformacao = new HashSet<pacienteinformacao>();
        }

        public Guid idinformacao { get; set; }
        public string nome { get; set; }
        public DateTime? inativo { get; set; }
        public string idexterno { get; set; }

        public virtual ICollection<pacienteinformacao> pacienteinformacao { get; set; }
    }
}
