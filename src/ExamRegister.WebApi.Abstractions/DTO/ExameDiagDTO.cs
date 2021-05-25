using System;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class ExameDiagDTO
    {
        public Guid idexamediag { get; set; }
        public Guid idexame { get; set; }
        public Guid iddiag { get; set; }

        public DiagnosticoDTO diagnostico { get; set; }
    }
}
