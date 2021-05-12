using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class cidade
    {
        public cidade()
        {
            endereco = new HashSet<endereco>();
        }

        public Guid idcidade { get; set; }
        public string nome { get; set; }
        public Guid idestado { get; set; }
        public DateTime? inativo { get; set; }

        public virtual estado idestadoNavigation { get; set; }
        public virtual ICollection<endereco> endereco { get; set; }
    }
}
