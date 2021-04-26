using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class reuniao
    {
        public reuniao()
        {
            exame = new HashSet<exame>();
        }

        public Guid idrenuiao { get; set; }
        public string nome { get; set; }
        public DateTime data { get; set; }
        public string idexterno { get; set; }
        public DateTime? inativo { get; set; }

        public virtual ICollection<exame> exame { get; set; }
    }
}
