using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class DiagnosticoDTO
    {
        public string idexterno { get; set; }
        public Guid iddiagnostico { get; set; }
        public string nome { get; set; }
        public DateTime? inativo { get; set; }
    }
}
