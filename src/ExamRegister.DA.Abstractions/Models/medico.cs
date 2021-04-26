using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class medico
    {
        public medico()
        {
            exameidmedicorespNavigation = new HashSet<exame>();
            exameidmedicosolicNavigation = new HashSet<exame>();
            examemedicorespdiagnostico = new HashSet<examemedicorespdiagnostico>();
            medicoclinica = new HashSet<medicoclinica>();
            medicogrupo = new HashSet<medicogrupo>();
        }

        public Guid idmedico { get; set; }
        public string nome { get; set; }
        public string email { get; set; }
        public string celular { get; set; }
        public string telefone { get; set; }
        public string telefone2 { get; set; }
        public string crm { get; set; }
        public DateTime? inativo { get; set; }

        public virtual ICollection<exame> exameidmedicorespNavigation { get; set; }
        public virtual ICollection<exame> exameidmedicosolicNavigation { get; set; }
        public virtual ICollection<examemedicorespdiagnostico> examemedicorespdiagnostico { get; set; }
        public virtual ICollection<medicoclinica> medicoclinica { get; set; }
        public virtual ICollection<medicogrupo> medicogrupo { get; set; }
    }
}
