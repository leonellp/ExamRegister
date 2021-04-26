using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IInformacaoRepository {
        IQueryable<informacao> List();
        informacao GetById(Guid Idinformacao);
        void Insert(informacao informacao);
        void Delete(Guid Idinformacao);
        void Update(Guid Idinformacao, informacao informacaoNew);
    }
}
