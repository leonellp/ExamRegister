using ExamRegister.DA.Abstractions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class ClinicaRepository : IClinicaRepository {

        private readonly ExamRegisterContext examregisterContext;

        public ClinicaRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid Idclinica) {
            var clinica = examregisterContext.clinica.Where(a => a.idclinica == Idclinica).FirstOrDefault();
            clinica.inativo = DateTime.Now;
            examregisterContext.SaveChanges();
        }

        public clinica GetById(Guid Idclinica) {
            var clinica = examregisterContext.clinica.Where(a => a.idclinica == Idclinica).FirstOrDefault();
            return clinica;
        }

        public void Insert(clinica Clinica) {
            examregisterContext.clinica.Add(Clinica);
            examregisterContext.SaveChanges();
        }

        public IQueryable<clinica> List() {
            return examregisterContext.clinica;
        }

        public void Update(Guid Idclinica, clinica clinicaNew) {
            clinica clinica = examregisterContext.clinica.Where(a => a.idclinica == Idclinica).FirstOrDefault();

            clinica.nome = clinicaNew.nome;
            clinica.email = clinicaNew.email;
            clinica.idendereco = clinicaNew.idendereco;
            clinica.telefone = clinicaNew.telefone;
            clinica.celular = clinicaNew.celular;
            clinica.inativo = clinicaNew.inativo;
            clinica.idexterno = clinicaNew.idexterno;

            examregisterContext.SaveChanges();
        }
    }
}
