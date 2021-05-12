using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO {
    public partial class CategoriaDTO {
        public Guid idcategoria { get; set; }
        public string nome { get; set; }
        public string nomecompleto { get; set; }
        public Guid? idcategoriapai { get; set; }
        public DateTime? inativo { get; set; }
        public string idexterno { get; set; }
    }
}
