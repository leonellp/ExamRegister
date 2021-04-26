using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class imagem
    {
        public Guid idimagem { get; set; }
        public string nome { get; set; }
        public string url { get; set; }
        public Guid idexame { get; set; }
        public DateTime dataupload { get; set; }
        public DateTime? inativo { get; set; }

        public virtual exame idexameNavigation { get; set; }
    }
}
