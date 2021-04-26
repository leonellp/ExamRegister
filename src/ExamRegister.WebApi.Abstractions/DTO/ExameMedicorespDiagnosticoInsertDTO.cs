using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class ExameMedicorespDiagnosticoInsertDTO {
        public Guid idmedico { get; set; }
        public Guid idexame { get; set; }
    }
}
