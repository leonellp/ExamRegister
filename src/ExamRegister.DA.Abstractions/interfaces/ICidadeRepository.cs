using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface ICidadeRepository{
        IQueryable<cidade> List();
        cidade GetById(Guid Idcidade);
        void Insert(cidade Cidade);
        void Delete(Guid Idcidade);
        void Update(Guid Idcidade, cidade cidadeNew);
    }
}