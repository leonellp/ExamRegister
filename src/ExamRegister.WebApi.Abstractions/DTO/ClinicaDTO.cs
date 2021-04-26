using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class ClinicaDTO
    {
        public Guid idclinica { get; set; }
        public string email { get; set; }
        public Guid idendereco { get; set; }
        public string telefone { get; set; }
        public string celular { get; set; }
        public DateTime? inativo { get; set; }
        public string nome { get; set; }
        public string idexterno { get; set; }

        public EnderecoDTO endereco { get; set; }
    }
}
