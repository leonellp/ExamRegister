using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class orgao
    {
        public orgao()
        {
            exame = new HashSet<exame>();
        }

        public Guid idorgao { get; set; }
        public string idexterno { get; set; }
        public string nome { get; set; }
        public DateTime? inativo { get; set; }

        public virtual ICollection<exame> exame { get; set; }
    }
}
