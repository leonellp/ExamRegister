using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IGrupoDeMedicoService {
        paginacao<GrupodeMedicoDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            );
        GrupodeMedicoDTO GetById(Guid idgrupodemedicos);
        void Insert(GrupodeMedicoInsertDTO grupodemedico);
        void Delete(Guid idgrupodemedicos);
        void Update(Guid idgrupodemedicos, GrupodeMedicoDTO grupodemedicoNew);
    }
}
