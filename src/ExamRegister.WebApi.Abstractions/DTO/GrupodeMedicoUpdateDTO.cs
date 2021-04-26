using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO {
    public partial class GrupodeMedicoUpdateDTO {
        public Guid idgrupodemedicos { get; set; }
        public string idexterno { get; set; }
        public string nome { get; set; }
        public DateTime? inativo { get; set; }

        public MedicoGrupoUpdateDTO[] MedicoGrupo { get; set; }
    }
}
