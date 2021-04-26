using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class categoriaexame
    {
        public Guid idcategoriaexame { get; set; }
        public Guid idcategoria { get; set; }
        public Guid idexame { get; set; }

        public virtual categoria idcategoriaNavigation { get; set; }
        public virtual exame idexameNavigation { get; set; }
    }
}
