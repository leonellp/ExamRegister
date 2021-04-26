using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class CidadeDTO
    {
        public Guid idcidade { get; set; }
        public string nome { get; set; }
        public Guid idestado { get; set; }
        public DateTime? inativo { get; set; }
    }
}
