using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO {
    public partial class HistoricoPacienteDTO {
        public Guid idhispaciente { get; set; }
        public string descricao { get; set; }
        public Guid idpaciente { get; set; }
        public DateTime data { get; set; }
        public DateTime? inativo { get; set; }
    }
}
