using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class MedicoGrupoUpdateDTO {
        public Guid idgrupomedico { get; set; }
        public Guid idgrupo { get; set; }
        public Guid idmedico { get; set; }

        public MedicoDTO Medico { get; set; }
    }
}
