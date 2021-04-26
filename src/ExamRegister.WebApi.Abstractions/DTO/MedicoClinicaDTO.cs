using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class MedicoClinicaDTO
    {
        public Guid idmedcli { get; set; }
        public Guid idmedico { get; set; }
        public Guid idclinica { get; set; }

        public ClinicaDTO clinica { get; set; }
    }
}
