using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class CidadeInsertDTO {
        public string nome { get; set; }
        public Guid idestado { get; set; }
        public DateTime? inativo { get; set; }
    }
}
