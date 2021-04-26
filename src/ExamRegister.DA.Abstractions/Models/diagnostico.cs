using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class diagnostico
    {
        public diagnostico()
        {
            examediag = new HashSet<examediag>();
        }

        public string idexterno { get; set; }
        public Guid iddiagnostico { get; set; }
        public string nome { get; set; }
        public DateTime? inativo { get; set; }

        public virtual ICollection<examediag> examediag { get; set; }
    }
}
