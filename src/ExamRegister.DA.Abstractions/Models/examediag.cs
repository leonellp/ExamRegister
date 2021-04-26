using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class examediag
    {
        public Guid idexamediag { get; set; }
        public Guid idexame { get; set; }
        public Guid iddiag { get; set; }

        public virtual diagnostico iddiagNavigation { get; set; }
        public virtual exame idexameNavigation { get; set; }
    }
}
