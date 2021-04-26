using System;
using System.Collections.Generic;
using System.Text;

namespace ExamRegister.Business.Abstractions.DTO {
    public class paginacao<T> {
        public IEnumerable<T> values { get; set; }
        public int? count { get; set; }

    }
}
