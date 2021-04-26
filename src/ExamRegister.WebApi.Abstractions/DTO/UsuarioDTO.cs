using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class UsuarioDTO {
        public Guid idusuario { get; set; }
        public string nome { get; set; }
        public string user { get; set; }
        public string password { get; set; }
        public DateTime? inativo { get; set; }
        public string idexterno { get; set; }
    }
}
