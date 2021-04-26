using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class HistoricoPacienteInsertDTO {
        public string descricao { get; set; }
        public DateTime data { get; set; }
        public DateTime? inativo { get; set; }
    }
}
