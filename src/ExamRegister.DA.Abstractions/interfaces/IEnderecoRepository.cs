using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IEnderecoRepository {
        IQueryable<endereco> List();
        endereco GetById(Guid idendereco);
        void Insert(endereco endereco);
        void Delete(Guid idendereco);
        void Update(Guid idendereco, endereco enderecoNew);
    }
}
