using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class InformacaoInsertDTO {
        public string nome { get; set; }
        public DateTime? inativo { get; set; }
        public string idexterno { get; set; }
    }
}
