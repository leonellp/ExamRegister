using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class examemedicorespdiagnostico
    {
        public Guid idexmeddiag { get; set; }
        public Guid idmedico { get; set; }
        public Guid idexame { get; set; }

        public virtual exame idexameNavigation { get; set; }
        public virtual medico idmedicoNavigation { get; set; }
    }
}
