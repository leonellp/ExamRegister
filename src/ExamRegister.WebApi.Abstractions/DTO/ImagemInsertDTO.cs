using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO
{
    public partial class ImagemInsertDTO {
        public string nome { get; set; }
        public string url { get; set; }
        public Guid idexame { get; set; }
        public DateTime dataupload { get; set; }
        public DateTime? inativo { get; set; }
    }
}
