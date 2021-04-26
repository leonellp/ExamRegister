using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class medicoclinica
    {
        public Guid idmedcli { get; set; }
        public Guid idmedico { get; set; }
        public Guid idclinica { get; set; }

        public virtual clinica clinica { get; set; }
        public virtual medico medico { get; set; }
    }
}
