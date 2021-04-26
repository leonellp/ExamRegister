using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class OrgaoDTO
    {
        public Guid idorgao { get; set; }
        public string idexterno { get; set; }
        public string nome { get; set; }
        public DateTime? inativo { get; set; }
    }
}
