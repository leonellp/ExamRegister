using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class EnderecoInsertDTO {
        public string cep { get; set; }
        public string bairro { get; set; }
        public string rua { get; set; }
        public int numero { get; set; }
        public string complemento { get; set; }
        public DateTime? inativo { get; set; }
        public Guid idcidade { get; set; }
        public Guid idestado { get; set; }
    }
}
