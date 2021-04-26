using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class grupodemedico
    {
        public grupodemedico()
        {
            exame = new HashSet<exame>();
            medicogrupo = new HashSet<medicogrupo>();
        }

        public Guid idgrupodemedicos { get; set; }
        public string idexterno { get; set; }
        public string nome { get; set; }
        public DateTime? inativo { get; set; }

        public virtual ICollection<exame> exame { get; set; }
        public virtual ICollection<medicogrupo> medicogrupo { get; set; }
    }
}
