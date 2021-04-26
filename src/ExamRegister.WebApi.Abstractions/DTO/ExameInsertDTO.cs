using System;
using System.Collections.Generic;

#nullable disable

namespace ExamRegister.WebApi.Abstractions.DTO {
    public partial class ExameInsertDTO {
        public string idexterno { get; set; }
        public DateTime datain { get; set; }
        public DateTime dataout { get; set; }
        public Guid idpaciente { get; set; }
        public Guid idorgao { get; set; }
        public Guid idpeca { get; set; }
        public Guid idmedicoresp { get; set; }
        public Guid idmedicosolic { get; set; }
        public Guid idreuniao { get; set; }
        public Guid idclinica { get; set; }
        public string diagnostico { get; set; }
        public string dadosclinicos { get; set; }
        public string suspeitaclinica { get; set; }
        public decimal peso { get; set; }
        public decimal altura { get; set; }
        public int ast { get; set; }
        public int alt { get; set; }
        public int ggt { get; set; }
        public int colesterol { get; set; }
        public decimal gamaglobulina { get; set; }
        public int triglicerides { get; set; }
        public int glicemia { get; set; }
        public int falc { get; set; }
        public decimal biltotal { get; set; }
        public decimal bildireta { get; set; }
        public string outros { get; set; }
        public DateTime? inativo { get; set; }
        public Guid idgrupomedico { get; set; }
        public string conclusao { get; set; }
        public string observacao { get; set; }
        public int? transplantadofigado { get; set; }
        public int? hipertensaoarterial { get; set; }
        public int? ictericia { get; set; }
        public int? ascite { get; set; }
        public int? edema { get; set; }
        public int? circulacaocolateral { get; set; }
        public int? varizesofagicas { get; set; }
        public int? hepatomegalia { get; set; }
        public int? figadoendurecido { get; set; }
        public int? figadonodular { get; set; }
        public int? esplenomegalia { get; set; }
        public DateTime? datatransplante { get; set; }
        public string descdoencaautoimune { get; set; }
        public int? doencaautoimune { get; set; }
        public int? usamedicamento { get; set; }
        public string descusamedicamento { get; set; }
        public string autoanticorpos { get; set; }
        public int? vhc { get; set; }
        public int? descvhc { get; set; }
        public int? vhb { get; set; }
        public int? descvhb { get; set; }
        public int? hiv { get; set; }
        public int? deschiv { get; set; }
    }
}
