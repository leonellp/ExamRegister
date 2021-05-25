using AutoMapper;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;

namespace ExamRegister.Mapper {
    public class Mappers : Profile {
        public Mappers() {

            CreateMap<CategoriaExameInsertDTO, categoriaexame>().ReverseMap();
            CreateMap<CategoriaExameDTO, categoriaexame>().ReverseMap();
                        
            CreateMap<CidadeInsertDTO, cidade>().ReverseMap();
            CreateMap<CidadeDTO, cidade>().ReverseMap();
            CreateMap<DiagnosticoInsertDTO, diagnostico>().ReverseMap();
            CreateMap<DiagnosticoDTO, diagnostico>().ReverseMap();
            CreateMap<EstadoInsertDTO, estado>().ReverseMap();
            CreateMap<EstadoDTO, estado>().ReverseMap();
            CreateMap<ExameDiagInsertDTO, examediag>().ReverseMap();
            CreateMap<ExameDiagDTO, examediag>().ReverseMap();
            CreateMap<ExameMedicorespDiagnosticoInsertDTO, examemedicorespdiagnostico>().ReverseMap();
            CreateMap<ExameMedicorespDiagnosticoDTO, examemedicorespdiagnostico>().ReverseMap();
            CreateMap<HistoricoPacienteInsertDTO, historicopaciente>().ReverseMap();
            CreateMap<HistoricoPacienteUpdateDTO, historicopaciente>().ReverseMap();
            CreateMap<HistoricoPacienteDTO, historicopaciente>().ReverseMap();
            CreateMap<ImagemInsertDTO, imagem>().ReverseMap();
            CreateMap<ImagemDTO, imagem>().ReverseMap();
            CreateMap<InformacaoInsertDTO, informacao>().ReverseMap();
            CreateMap<InformacaoDTO, informacao>().ReverseMap();
            CreateMap<OrgaoInsertDTO, orgao>().ReverseMap();
            CreateMap<OrgaoDTO, orgao>().ReverseMap();
            CreateMap<PacienteInformacaoInsertDTO, pacienteinformacao>().ReverseMap();
            CreateMap<PacienteInformacaoUpdateDTO, pacienteinformacao>().ReverseMap();

            CreateMap<PecaInsertDTO, peca>().ReverseMap();
            CreateMap<PecaDTO, peca>().ReverseMap();
            CreateMap<ReuniaoInsertDTO, reuniao>().ReverseMap();
            CreateMap<ReuniaoDTO, reuniao>().ReverseMap();
            CreateMap<UsuarioDTO, usuario>().ReverseMap();
            CreateMap<UsuarioInsertDTO, usuario>().ReverseMap();

            // EXAME
            CreateMap<ExameDTO, exame>()
                .ForMember(a => a.idclinicaNavigation, b => b.MapFrom(c => c.Clinica))
                .ForMember(a => a.idgrupomedicoNavigation, b => b.MapFrom(c => c.GrupodeMedico))
                .ForMember(a => a.idmedicorespNavigation, b => b.MapFrom(c => c.MedicoResp))
                .ForMember(a => a.idmedicosolicNavigation, b => b.MapFrom(c => c.MedicoSolic))
                .ForMember(a => a.idorgaoNavigation, b => b.MapFrom(c => c.Orgao))
                .ForMember(a => a.idpacienteNavigation, b => b.MapFrom(c => c.Paciente))
                .ForMember(a => a.idpecaNavigation, b => b.MapFrom(c => c.Peca))
                .ForMember(a => a.idreuniaoNavigation, b => b.MapFrom(c => c.Reuniao))
                .ForMember(a => a.categoriaexame, b => b.MapFrom(c => c.categoriaexame))
                .ForMember(a => a.examemedicorespdiagnostico, b => b.MapFrom(c => c.examemedicorespdiagnostico))
                .ForMember(a => a.imagem, b => b.MapFrom(c => c.imagem))
                .ReverseMap()
                .ForMember(a => a.Clinica, b => b.MapFrom(c => c.idclinicaNavigation))
                .ForMember(a => a.GrupodeMedico, b => b.MapFrom(c => c.idgrupomedicoNavigation))
                .ForMember(a => a.MedicoResp, b => b.MapFrom(c => c.idmedicorespNavigation))
                .ForMember(a => a.MedicoSolic, b => b.MapFrom(c => c.idmedicosolicNavigation))
                .ForMember(a => a.Orgao, b => b.MapFrom(c => c.idorgaoNavigation))
                .ForMember(a => a.Paciente, b => b.MapFrom(c => c.idpacienteNavigation))
                .ForMember(a => a.Peca, b => b.MapFrom(c => c.idpecaNavigation))
                .ForMember(a => a.Reuniao, b => b.MapFrom(c => c.idreuniaoNavigation))
                .ForMember(a => a.categoriaexame, b => b.MapFrom(c => c.categoriaexame))
                .ForMember(a => a.examemedicorespdiagnostico, b => b.MapFrom(c => c.examemedicorespdiagnostico))
                .ForMember(a => a.imagem, b => b.MapFrom(c => c.imagem));

            CreateMap<ExameInsertDTO, exame>()
                .ForMember(a => a.idclinicaNavigation, b => b.Ignore())
                .ForMember(a => a.idgrupomedicoNavigation, b => b.Ignore())
                .ForMember(a => a.idmedicorespNavigation, b => b.Ignore())
                .ForMember(a => a.idmedicosolicNavigation, b => b.Ignore())
                .ForMember(a => a.idorgaoNavigation, b => b.Ignore())
                .ForMember(a => a.idpacienteNavigation, b => b.Ignore())
                .ForMember(a => a.idpecaNavigation, b => b.Ignore())
                .ForMember(a => a.idreuniaoNavigation, b => b.Ignore())
                .ForMember(a => a.categoriaexame, b => b.Ignore())
                .ForMember(a => a.examediag, b => b.Ignore())
                .ForMember(a => a.examemedicorespdiagnostico, b => b.Ignore())
                .ForMember(a => a.imagem, b => b.Ignore())
                .ReverseMap();

            // PACIENTE_INFORMACAO
            CreateMap<PacienteInformacaoDTO, pacienteinformacao>()
                .ForMember(a => a.idinformacaoNavigation, b => b.MapFrom(c => c.informacao))
                .ReverseMap();

            // PACIENTE
            CreateMap<PacienteDTO, paciente>()
                .ForMember(a => a.historicopaciente, b => b.MapFrom(c => c.historicoPaciente))
                .ForMember(a => a.pacienteinformacao, b => b.MapFrom(c => c.pacienteInformacao))
                .ReverseMap()
                .ForMember(a => a.historicoPaciente, b => b.MapFrom(c => c.historicopaciente))
                .ForMember(a => a.pacienteInformacao, b => b.MapFrom(c => c.pacienteinformacao));

            CreateMap<PacienteInsertDTO, paciente>()
                .ForMember(a => a.historicopaciente, b => b.Ignore())
                .ForMember(a => a.pacienteinformacao, b => b.Ignore())
                .ReverseMap();

            CreateMap<PacienteUpdateDTO, paciente>()
                .ForMember(a => a.historicopaciente, b => b.Ignore())
                .ForMember(a => a.pacienteinformacao, b => b.Ignore())
                .ReverseMap();


            // CLINICA
            CreateMap<ClinicaDTO, clinica>()
                .ForMember(a => a.idenderecoNavigation, b => b.MapFrom(c => c.endereco))
                .ReverseMap()
                .ForMember(a => a.endereco, b => b.MapFrom(c => c.idenderecoNavigation));

            CreateMap<ClinicaInsertDTO, clinica>()
                .ForMember(a => a.idenderecoNavigation, b => b.Ignore())
                .ReverseMap();

            CreateMap<ClinicaUpdateDTO, clinica>()
                .ForMember(a => a.idenderecoNavigation, b => b.Ignore())
                .ReverseMap();


            // ENDERECO
            CreateMap<EnderecoDTO, endereco>()
                .ForMember(a => a.idcidadeNavigation, b => b.MapFrom(c => c.cidade))
                .ForMember(a => a.idestadoNavigation, b => b.MapFrom(c => c.estado))
                .ReverseMap()
                .ForMember(a => a.cidade, b => b.MapFrom(c => c.idcidadeNavigation))
                .ForMember(a => a.estado, b => b.MapFrom(c => c.idestadoNavigation));

            CreateMap<EnderecoInsertDTO, endereco>()
                .ForMember(a => a.idestadoNavigation, b => b.Ignore())
                .ForMember(a => a.idcidadeNavigation, b => b.Ignore())
                .ReverseMap();

            CreateMap<EnderecoUpdateDTO, endereco>()
                .ForMember(a => a.idestadoNavigation, b => b.Ignore())
                .ForMember(a => a.idcidadeNavigation, b => b.Ignore())
                .ReverseMap();


            // MEDICO_CLINICA
            CreateMap<MedicoClinicaDTO, medicoclinica>()
                .ForMember(a => a.idclinicaNavigation, b => b.MapFrom(c => c.clinica))
                .ReverseMap()
                .ForMember(a => a.clinica, b => b.MapFrom(c => c.idclinicaNavigation));

            CreateMap<MedicoClinicaInsertDTO, medicoclinica>()
                .ForMember(a => a.idmedicoNavigation, b => b.Ignore())
                .ForMember(a => a.idclinicaNavigation, b => b.Ignore())
                .ReverseMap();

            CreateMap<MedicoClinicaUpdateDTO, medicoclinica>()
                .ForMember(a => a.idmedicoNavigation, b => b.Ignore())
                .ForMember(a => a.idclinicaNavigation, b => b.Ignore())
                .ReverseMap();


            // MEDICO
            CreateMap<MedicoDTO, medico>()
                .ForMember(a => a.medicoclinica, b => b.MapFrom(c => c.medicoClinica))
                .ReverseMap()
                .ForMember(a => a.medicoClinica, b => b.MapFrom(c => c.medicoclinica));

            CreateMap<MedicoInsertDTO, medico>()
                .ForMember(a => a.medicoclinica, b => b.Ignore())
                .ReverseMap();

            CreateMap<MedicoUpdateDTO, medico>()
                .ForMember(a => a.medicoclinica, b => b.Ignore())
                .ReverseMap();


            // Grupo De Medico
            CreateMap<GrupodeMedicoDTO, grupodemedico>()
                .ForMember(a => a.medicogrupo, b => b.MapFrom(c => c.MedicoGrupo))
                .ReverseMap()
                .ForMember(a => a.MedicoGrupo, b => b.MapFrom(c => c.medicogrupo));

            CreateMap<GrupodeMedicoInsertDTO, grupodemedico>()
                .ForMember(a => a.medicogrupo, b => b.Ignore())
                .ReverseMap();

            CreateMap<GrupodeMedicoUpdateDTO, grupodemedico>()
                .ForMember(a => a.medicogrupo, b => b.Ignore())
                .ReverseMap();


            // Medico_Grupo
            CreateMap<MedicoGrupoDTO, medicogrupo>()
                .ForMember(a => a.idmedicoNavigation, b => b.MapFrom(c => c.Medico))
                .ReverseMap()
                .ForMember(a => a.Medico, b => b.MapFrom(c => c.idmedicoNavigation));

            CreateMap<MedicoGrupoInsertDTO, medicogrupo>()
                .ForMember(a => a.idmedicoNavigation, b => b.Ignore())
                .ReverseMap();

            CreateMap<MedicoGrupoUpdateDTO, medicogrupo>()
                .ForMember(a => a.idmedicoNavigation, b => b.Ignore())
                .ReverseMap();


            // Categoria
            CreateMap<CategoriaDTO, categoria>().ReverseMap();
                
            CreateMap<CategoriaInsertDTO, categoria>().ReverseMap();
              
        }
    }
}