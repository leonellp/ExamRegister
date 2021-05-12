using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class endereco
    {
        public endereco()
        {
            clinica = new HashSet<clinica>();
        }

        public Guid idendereco { get; set; }
        public string cep { get; set; }
        public string bairro { get; set; }
        public string rua { get; set; }
        public int numero { get; set; }
        public string complemento { get; set; }
        public Guid idcidade { get; set; }
        public Guid idestado { get; set; }
        public DateTime? inativo { get; set; }

        public virtual cidade idcidadeNavigation { get; set; }
        public virtual estado idestadoNavigation { get; set; }
        public virtual ICollection<clinica> clinica { get; set; }
    }
}
