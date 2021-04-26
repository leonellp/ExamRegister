using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class categoria
    {
        public categoria()
        {
            InverseidcategoriapaiNavigation = new HashSet<categoria>();
            categoriaexame = new HashSet<categoriaexame>();
        }

        public Guid idcategoria { get; set; }
        public string nome { get; set; }
        public string nomecompleto { get; set; }
        public Guid? idcategoriapai { get; set; }
        public DateTime? inativo { get; set; }
        public string idexterno { get; set; }

        public virtual categoria idcategoriapaiNavigation { get; set; }
        public virtual ICollection<categoria> InverseidcategoriapaiNavigation { get; set; }
        public virtual ICollection<categoriaexame> categoriaexame { get; set; }
    }
}
