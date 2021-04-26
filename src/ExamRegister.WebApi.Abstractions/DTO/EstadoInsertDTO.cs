using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class EstadoInsertDTO {
        public string sigla { get; set; }
        public string nome { get; set; }
        public DateTime? inativo { get; set; }
    }
}
