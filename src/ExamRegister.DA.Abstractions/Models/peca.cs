using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class peca
    {
        public peca()
        {
            exame = new HashSet<exame>();
        }

        public Guid idpeca { get; set; }
        public string nome { get; set; }
        public DateTime? inativo { get; set; }
        public string idexterno { get; set; }

        public virtual ICollection<exame> exame { get; set; }
    }
}
