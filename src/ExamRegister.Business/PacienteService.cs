using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business {
    public class PacienteService : IPacienteService {
        private readonly IPacienteRepository repository;
        private readonly IHistoricoPacienteRepository historicoRepository;
        private readonly IPacienteInformacaoRepository pacienteInformacaoRepository;

        private IMapper mapper;

        public PacienteService(IPacienteRepository repository, IHistoricoPacienteRepository historicoRepository, IPacienteInformacaoRepository pacienteInformacaoRepository, IMapper _mapper) {
            this.historicoRepository = historicoRepository;
            this.pacienteInformacaoRepository = pacienteInformacaoRepository;
            this.repository = repository;
            mapper = _mapper;
        }

        public void Delete(Guid Idpaciente) {
            repository.Delete(Idpaciente);
        }

        public PacienteDTO GetById(Guid Idpaciente) {
            return mapper.Map<PacienteDTO>(repository.GetById(Idpaciente));
        }

        public void Insert(PacienteInsertDTO paciente) {

            var _paciente = mapper.Map<paciente>(paciente);
            _paciente.idpaciente = Guid.NewGuid();
            repository.Insert(_paciente);

            var historicos = mapper.Map<historicopaciente[]>(paciente.historicoPaciente);
            foreach (var historico in historicos) {

                historico.idhispaciente = Guid.NewGuid();
                historico.idpaciente = _paciente.idpaciente;
                historico.paciente = _paciente;

                historicoRepository.Insert(historico);
            }

            var pacientesInformacoes = mapper.Map<pacienteinformacao[]>(paciente.pacienteInformacao);
            foreach (var pacienteInformacao in pacientesInformacoes) {

                pacienteInformacao.Idpacienteinformacao = Guid.NewGuid();
                pacienteInformacao.idpaciente = _paciente.idpaciente;

                pacienteInformacaoRepository.Insert(pacienteInformacao);
            }
        }

        public paginacao<PacienteDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            ) {

            int? nCount = null;

            var pacientes = repository.List();
            if (soinativos == true) {
                pacientes = pacientes.Where(a => a.inativo != null);
            } else {
                pacientes = pacientes.Where(a => a.inativo == null);
            }

            if (pesquisa != null) {
                pacientes = pacientes.Where(a => a.idexterno.ToUpper().Contains(pesquisa.ToUpper()) || a.nome.ToUpper().Contains(pesquisa.ToUpper()));
            }

            if (count) {
                nCount = pacientes.Count();
            }

            if (skip < 0) skip = 0;
            pacientes = pacientes.OrderBy(a => a.nome);
            pacientes = pacientes.Skip(skip).Take(top);
    

            return new paginacao<PacienteDTO>() { 
                values =  pacientes.ProjectTo<PacienteDTO>(mapper.ConfigurationProvider).ToArray() ,
                count = nCount
            };
        }

        public void Update(Guid Idpaciente, PacienteUpdateDTO pacienteNew) {
            var _pacienteNew = mapper.Map<paciente>(pacienteNew);
            repository.Update(Idpaciente, _pacienteNew);

            var idhispacientes = pacienteNew.historicoPaciente.Where(a => a.idhispaciente != null)
                .Select(a => (Guid)a.idhispaciente)
                .ToArray();
            var idhispacientesDell = historicoRepository.List()
                .Where(a => a.idpaciente == Idpaciente && !idhispacientes.Contains(a.idhispaciente) && a.inativo == null)
                .Select(a => a.idhispaciente)
                .ToArray();
            foreach (var IdDell in idhispacientesDell) {
                historicoRepository.Delete(IdDell);
            }

            foreach (var historico in pacienteNew.historicoPaciente) {
                var _historico = mapper.Map<historicopaciente>(historico);

                if (historico.idhispaciente == null) {

                    _historico.idhispaciente = Guid.NewGuid();
                    _historico.idpaciente = _pacienteNew.idpaciente;

                    historicoRepository.Insert(_historico);

                } else {
                    historicoRepository.Update(_historico.idhispaciente, _historico);
                }
            }



            var Idpacientesinformacoes = pacienteNew.pacienteInformacao.Where(a => a.Idpacienteinformacao != null)
                .Select(a => (Guid)a.Idpacienteinformacao)
                .ToArray();
            var IdpacientesinformacoesDell = pacienteInformacaoRepository.List()
                .Where(a => a.idpaciente == Idpaciente && !Idpacientesinformacoes.Contains(a.Idpacienteinformacao))
                .Select(a => a.Idpacienteinformacao)
                .ToArray();

            foreach (var IdDell in IdpacientesinformacoesDell) {
                pacienteInformacaoRepository.Delete(IdDell);
            }

            foreach (var pacienteInformacao in pacienteNew.pacienteInformacao) {
                var _pacienteInformacao = mapper.Map<pacienteinformacao>(pacienteInformacao);

                if (pacienteInformacao.Idpacienteinformacao == null) {

                    _pacienteInformacao.Idpacienteinformacao = Guid.NewGuid();
                    _pacienteInformacao.idpaciente = _pacienteNew.idpaciente;

                    pacienteInformacaoRepository.Insert(_pacienteInformacao);

                } else {
                    pacienteInformacaoRepository.Update(_pacienteInformacao.Idpacienteinformacao, _pacienteInformacao);
                }
            }
        }
    }
}
