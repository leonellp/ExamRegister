using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class ExameDiagInsertDTO {
        public Guid idexame { get; set; }
        public Guid iddiag { get; set; }
    }
}
