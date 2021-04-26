using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class ClinicaService : IClinicaService {
        private readonly IClinicaRepository clinicaRepository;
        private readonly IEnderecoRepository enderecoRepository;
        private IMapper mapper;

        public ClinicaService(IClinicaRepository clinicaRepository, IEnderecoRepository enderecoRepository, IMapper _mapper) {
            this.clinicaRepository = clinicaRepository;
            this.enderecoRepository = enderecoRepository;
            mapper = _mapper;
        }
        public void Delete(Guid Idclinica) {
            clinicaRepository.Delete(Idclinica);
        }

        public ClinicaDTO GetById(Guid Idclinica) {
            return mapper.Map<ClinicaDTO>(clinicaRepository.GetById(Idclinica));
        }

        public void Insert(ClinicaInsertDTO clinica) {

            var _clinica = mapper.Map<clinica>(clinica);
            _clinica.idclinica = Guid.NewGuid();

            var endereco = mapper.Map<endereco>(clinica.endereco);
            endereco.idendereco = Guid.NewGuid();
            enderecoRepository.Insert(endereco);

            _clinica.idendereco = endereco.idendereco;
            clinicaRepository.Insert(_clinica);

        }

        public paginacao<ClinicaDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            ) {

            int? nCount = null;

            var clinicas = clinicaRepository.List();
            if (soinativos == true) {
                clinicas = clinicas.Where(a => a.inativo != null);
            } else {
                clinicas = clinicas.Where(a => a.inativo == null);
            }

            if (pesquisa != null) {
                clinicas = clinicas.Where(a => a.idexterno.ToUpper().Contains(pesquisa.ToUpper()) || a.nome.Contains(pesquisa.ToUpper()));
            }

            if (count) {
                nCount = clinicas.Count();
            }

            if (top != 0) {
                if (skip < 0) skip = 0;
                clinicas = clinicas.OrderBy(a => a.nome);
                clinicas = clinicas.Skip(skip).Take(top);
            }

            return new paginacao<ClinicaDTO>() {
                values = clinicas.ProjectTo<ClinicaDTO>(mapper.ConfigurationProvider).ToArray(),
                count = nCount
            };
        }

        public void Update(Guid Idclinica, ClinicaUpdateDTO clinicaNew) {
            var _clinicaNew = mapper.Map<clinica>(clinicaNew);
            clinicaRepository.Update(Idclinica, _clinicaNew);

            var endereco = mapper.Map<endereco>(clinicaNew.endereco);
            enderecoRepository.Update(endereco.idendereco, endereco);
        }
    }
}
