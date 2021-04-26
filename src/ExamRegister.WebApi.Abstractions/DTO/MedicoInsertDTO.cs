using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class MedicoInsertDTO {
        public string nome { get; set; }
        public string email { get; set; }
        public string celular { get; set; }
        public string telefone { get; set; }
        public string telefone2 { get; set; }
        public string crm { get; set; }
        public DateTime? inativo { get; set; }

        public MedicoClinicaInsertDTO[] MedicoClinica { get; set; }
    }
}
