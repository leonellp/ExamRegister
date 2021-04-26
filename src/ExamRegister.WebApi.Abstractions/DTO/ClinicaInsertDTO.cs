using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class ClinicaInsertDTO {
        public string email { get; set; }        
        public string telefone { get; set; }
        public string celular { get; set; }
        public DateTime? inativo { get; set; }
        public string nome { get; set; }
        public string idexterno { get; set; }

        public EnderecoInsertDTO endereco { get; set; }
    }
}
