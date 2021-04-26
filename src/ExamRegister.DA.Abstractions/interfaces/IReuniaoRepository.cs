using ExamRegister.DA.Abstractions.Models;
using System;
using System.Linq;

namespace ExamRegister.DA.Abstractions.interfaces {
    public interface IReuniaoRepository {
        IQueryable<reuniao> List();
        reuniao GetById(Guid Idreunioes);
        void Insert(reuniao reuniao);
        void Delete(Guid Idreunioes);
        void Update(Guid Idreunioes, reuniao reuniaoNew);
    }
}
