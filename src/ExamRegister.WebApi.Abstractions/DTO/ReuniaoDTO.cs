using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class ReuniaoDTO {
        public Guid idrenuiao { get; set; }
        public string nome { get; set; }
        public DateTime data { get; set; }
        public string idexterno { get; set; }
        public DateTime? inativo { get; set; }
    }
}
