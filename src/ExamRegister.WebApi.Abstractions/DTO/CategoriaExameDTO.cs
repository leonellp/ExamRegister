using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO 
{
    public partial class CategoriaExameDTO
    {
        public Guid idcategoriaexame { get; set; }
        public Guid idcategoria { get; set; }
        public Guid idexame { get; set; }
    }
}
