using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.DA.Abstractions.Models
{
    public partial class usuario
    {
        public Guid idusuario { get; set; }
        public string nome { get; set; }
        public string user { get; set; }
        public string password_hash { get; set; }
        public string password_salt { get; set; }
        public DateTime? inativo { get; set; }
        public string idexterno { get; set; }
    }
}
