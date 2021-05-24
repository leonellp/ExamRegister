using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class PecaInsertDTO {
        public string nome_ { get; set; }
        public DateTime? inativo { get; set; }
        public string idexterno { get; set; }
    }
}
