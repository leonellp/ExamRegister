using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class estado
    {
        public estado()
        {
            cidade = new HashSet<cidade>();
            endereco = new HashSet<endereco>();
        }

        public Guid idestado { get; set; }
        public string sigla { get; set; }
        public string nome { get; set; }
        public DateTime? inativo { get; set; }

        public virtual ICollection<cidade> cidade { get; set; }
        public virtual ICollection<endereco> endereco { get; set; }
    }
}
