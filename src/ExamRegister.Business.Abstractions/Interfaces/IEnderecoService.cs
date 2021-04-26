using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IEnderecoService {
        IQueryable<EnderecoDTO> List(bool soinativos);
        EnderecoDTO GetById(Guid idendereco);
        void Insert(EnderecoInsertDTO endereco);
        void Delete(Guid idendereco);
        void Update(Guid idendereco, EnderecoDTO enderecoNew);
    }
}
