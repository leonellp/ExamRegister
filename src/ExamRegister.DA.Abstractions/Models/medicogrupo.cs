﻿using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class medicogrupo
    {
        public Guid idgrupomedico { get; set; }
        public Guid idgrupo { get; set; }
        public Guid idmedico { get; set; }

        public virtual grupodemedico GrupodeMedico { get; set; }
        public virtual medico Medico { get; set; }
    }
}
