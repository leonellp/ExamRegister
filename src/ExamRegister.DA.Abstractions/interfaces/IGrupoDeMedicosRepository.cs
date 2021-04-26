using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IGrupoDeMedicosRepository {
        IQueryable<grupodemedico> List();
        grupodemedico GetById(Guid idgrupodemedicos);
        void Insert(grupodemedico grupodemedico);
        void Delete(Guid idgrupodemedicos);
        void Update(Guid idgrupodemedicos, grupodemedico grupodemedicoNew);
    }
}
