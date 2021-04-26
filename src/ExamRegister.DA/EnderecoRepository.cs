using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA {
    public class EnderecoRepository : IEnderecoRepository {
        private readonly ExamRegisterContext examregisterContext;

        public EnderecoRepository(ExamRegisterContext context) {
            examregisterContext = context;
        }
        public void Delete(Guid Idendereco) {
            var endereco = examregisterContext.endereco.Where(a => a.idendereco == Idendereco).FirstOrDefault();
            endereco.inativo = DateTime.Now;
            examregisterContext.SaveChanges();
        }

        public endereco GetById(Guid Idendereco) {
            var endereco = examregisterContext.endereco.Where(a => a.idendereco == Idendereco).FirstOrDefault();
            return endereco;
        }

        public void Insert(endereco Endereco) {
            examregisterContext.endereco.Add(Endereco);
            examregisterContext.SaveChanges();
        }

        public IQueryable<endereco> List() {
            return examregisterContext.endereco;
        }

        public void Update(Guid Idendereco, endereco enderecoNew) {
            endereco endereco = examregisterContext.endereco.Where(a => a.idendereco == Idendereco).FirstOrDefault();
            
            endereco.cep = enderecoNew.cep;
            endereco.bairro = enderecoNew.bairro;
            endereco.rua = enderecoNew.rua;
            endereco.numero = enderecoNew.numero;
            endereco.complemento = enderecoNew.complemento;
            endereco.idcidade = enderecoNew.idcidade;
            endereco.idestado = enderecoNew.idestado;
            endereco.inativo = enderecoNew.inativo;

            examregisterContext.SaveChanges();
        }
    }
}
