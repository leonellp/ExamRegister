using System;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class ExameMedicorespDiagnosticoDTO {
        public Guid idexmeddiag { get; set; }
        public Guid idmedico { get; set; }
        public Guid idexame { get; set; }

        public MedicoDTO medico { get; set; }
    }
}
