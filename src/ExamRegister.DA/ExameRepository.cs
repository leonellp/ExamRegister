using ExamRegister.DA.Abstractions;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class ExameRepository : IExameRepository {
        private readonly ExamRegisterContext examregisterContext;

        public ExameRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid Idexame) {
            var exame = examregisterContext.exame.Where(a => a.idexame == Idexame).FirstOrDefault();
            exame.inativo = DateTime.Now;
            examregisterContext.SaveChanges();
        }

        public exame GetById(Guid Idexame) {
            var exame = examregisterContext.exame.Where(a => a.idexame == Idexame).FirstOrDefault();
            return exame;
        }

        public void Insert(exame Exame) {
            examregisterContext.exame.Add(Exame);
            examregisterContext.SaveChanges();
        }

        public IQueryable<exame> List() {
            return examregisterContext.exame;
        }

        public void Update(Guid Idexame, exame exameNew) {
            exame exame = examregisterContext.exame.Where(a => a.idexame == Idexame).FirstOrDefault();

            exame.idexterno = exameNew.idexterno;
            exame.datain = exameNew.datain;
            exame.dataout = exameNew.dataout;
            exame.idpaciente = exameNew.idpaciente;
            exame.idorgao = exameNew.idorgao;
            exame.idpeca = exameNew.idpeca;
            exame.idmedicoresp = exameNew.idmedicoresp;
            exame.idmedicosolic = exameNew.idmedicosolic;
            exame.idreuniao = exameNew.idreuniao;
            exame.idclinica = exameNew.idclinica;
            exame.diagnostico = exameNew.diagnostico;
            exame.dadosclinicos = exameNew.dadosclinicos;
            exame.suspeitaclinica = exameNew.suspeitaclinica;
            exame.peso = exameNew.peso;
            exame.altura = exameNew.altura;
            exame.ast = exameNew.ast;
            exame.alt = exameNew.alt;
            exame.ggt = exameNew.ggt;
            exame.colesterol = exameNew.colesterol;
            exame.gamaglobulina = exameNew.gamaglobulina;
            exame.triglicerides = exameNew.triglicerides;
            exame.glicemia = exameNew.glicemia;
            exame.falc = exameNew.falc;
            exame.biltotal = exameNew.biltotal;
            exame.bildireta = exameNew.bildireta;
            exame.outros = exameNew.outros;
            exame.inativo = exameNew.inativo;
            exame.idgrupomedico = exameNew.idgrupomedico;
            exame.conclusao = exameNew.conclusao;
            exame.observacao = exameNew.observacao;
            exame.transplantadofigado = exameNew.transplantadofigado;
            exame.hipertensaoarterial = exameNew.hipertensaoarterial;
            exame.ictericia = exameNew.ictericia;
            exame.ascite = exameNew.ascite;
            exame.edema = exameNew.edema;
            exame.circulacaocolateral = exameNew.circulacaocolateral;
            exame.varizesofagicas = exameNew.varizesofagicas;
            exame.hepatomegalia = exameNew.hepatomegalia;
            exame.figadoendurecido = exameNew.figadoendurecido;
            exame.figadonodular = exameNew.figadonodular;
            exame.esplenomegalia = exameNew.esplenomegalia;
            exame.datatransplante = exameNew.datatransplante;
            exame.descdoencaautoimune = exameNew.descdoencaautoimune;
            exame.doencaautoimune = exameNew.doencaautoimune;
            exame.usamedicamento = exameNew.usamedicamento;
            exame.descdoencaautoimune = exameNew.descdoencaautoimune;
            exame.autoanticorpos = exameNew.autoanticorpos;
            exame.vhc = exameNew.vhc;
            exame.descvhc = exameNew.descvhc;
            exame.vhb = exameNew.vhb;
            exame.descvhb = exameNew.descvhb;
            exame.hiv = exameNew.hiv;
            exame.deschiv = exameNew.deschiv;

            examregisterContext.SaveChanges();
        }
    }
}
