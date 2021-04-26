using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class clinica
    {
        public clinica()
        {
            exame = new HashSet<exame>();
            medicoclinica = new HashSet<medicoclinica>();
        }

        public Guid idclinica { get; set; }
        public string email { get; set; }
        public Guid idendereco { get; set; }
        public string telefone { get; set; }
        public string celular { get; set; }
        public DateTime? inativo { get; set; }
        public string nome { get; set; }
        public string idexterno { get; set; }

        public virtual endereco endereco { get; set; }
        public virtual ICollection<exame> exame { get; set; }
        public virtual ICollection<medicoclinica> medicoclinica { get; set; }
    }
}
