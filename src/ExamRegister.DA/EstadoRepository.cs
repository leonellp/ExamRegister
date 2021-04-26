using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class EstadoRepository : IEstadoRepository {
        private readonly ExamRegisterContext examregisterContext;

        public EstadoRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid Idestado) {
            var estado = examregisterContext.estado.Where(a => a.idestado == Idestado).FirstOrDefault();
            estado.inativo = DateTime.Now;
            examregisterContext.SaveChanges();
        }

        public estado GetById(Guid Idestado) {
            var estado = examregisterContext.estado.Where(a => a.idestado == Idestado).FirstOrDefault();
            return estado;
        }

        public void Insert(estado Estado) {
            examregisterContext.estado.Add(Estado);
            examregisterContext.SaveChanges();
        }

        public IQueryable<estado> List() {
            return examregisterContext.estado;
        }

        public void Update(Guid Idestado, estado estadoNew) {
            estado estado = examregisterContext.estado.Where(a => a.idestado == Idestado).FirstOrDefault();
            
            estado.sigla = estadoNew.sigla;
            estado.nome = estadoNew.nome;
            estado.inativo = estadoNew.inativo;            
            
            examregisterContext.SaveChanges();
        }
    }
}
