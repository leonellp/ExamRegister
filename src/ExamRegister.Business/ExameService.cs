using AutoMapper;
using AutoMapper.QueryableExtensions;
using ExamRegister.Business.Abstractions.DTO;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.DA.Abstractions.Models;
using ExamRegister.WebApi.Abstractions.DTO;
using System;
using System.Linq;

namespace ExamRegister.Business
{
    public class ExameService : IExameService
    {

        private readonly IExameRepository repository;
        private readonly ICategoriaExameRepository categoriaExameRepository;
        private readonly IExameDiagRepository exameDiagRepository;
        private readonly IExameMedicorespDiagnosticoRepository exameMedicorespDiagnosticoRepository;
        private readonly IImagemRepository imagemRepository;
        private IMapper mapper;

        public ExameService(
            IExameRepository _repository,
            ICategoriaExameRepository _categoriaExameRepository,
            IExameMedicorespDiagnosticoRepository _exameMedicorespDiagnosticoRepository,
            IImagemRepository _imagemRepository,
            IMapper _mapper
            )
        {
            this.repository = _repository;
            this.categoriaExameRepository = _categoriaExameRepository;
            this.exameMedicorespDiagnosticoRepository = _exameMedicorespDiagnosticoRepository;
            this.imagemRepository = _imagemRepository;
            mapper = _mapper;
        }
        public void Delete(Guid Idexame)
        {
            repository.Delete(Idexame);
        }

        public ExameDTO GetById(Guid Idexame)
        {
            return mapper.Map<ExameDTO>(repository.GetById(Idexame));
        }

        public void Insert(ExameInsertDTO Exame)
        {
            var _exame = mapper.Map<exame>(Exame);
            _exame.idexame = Guid.NewGuid();
            repository.Insert(_exame);

            var categoriasExame = mapper.Map<categoriaexame[]>(Exame.categoriaexame);
            foreach (var categoriaExame in categoriasExame)
            {
                categoriaExame.idcategoriaexame = Guid.NewGuid();
                categoriaExame.idexame = _exame.idexame;

                categoriaExameRepository.Insert(categoriaExame);
            }

            var exameMedicosRespsDiagnostico = mapper.Map<examemedicorespdiagnostico[]>(Exame.examemedicorespdiagnostico);
            foreach (var exameMedicoRespDiag in exameMedicosRespsDiagnostico)
            {
                exameMedicoRespDiag.idexmeddiag = Guid.NewGuid();
                exameMedicoRespDiag.idexame = _exame.idexame;

                exameMedicorespDiagnosticoRepository.Insert(exameMedicoRespDiag);
            }

            var imagens = mapper.Map<imagem[]>(Exame.imagem);
            foreach (var imagem in imagens)
            {
                imagem.idexame = _exame.idexame;

                imagemRepository.Update(imagem.idimagem, imagem);
            }
        }

        public paginacao<ExameDTO> List(
            int skip,
            int top,
            bool count,
            bool? soinativos = null,
            string pesquisa = null
            )
        {
            int? nCount = null;

            var exames = repository.List();
            if (soinativos == true)
            {
                exames = exames.Where(a => a.inativo != null);
            }
            else
            {
                exames = exames.Where(a => a.inativo == null);
            }

            if (pesquisa != null)
            {
                exames = exames.Where(a => a.idexterno.ToUpper().Contains(pesquisa.ToUpper()) || a.idpacienteNavigation.nome.ToUpper().Contains(pesquisa.ToUpper()));
            }

            if (count) nCount = exames.Count();

            if (skip < 0) skip = 0;
            exames = exames.OrderBy(a => a.idexterno);
            exames = exames.Skip(skip).Take(top);


            return new paginacao<ExameDTO>()
            {
                values = exames.ProjectTo<ExameDTO>(mapper.ConfigurationProvider).ToArray(),
                count = nCount
            };
        }

        public void Update(Guid Idexame, ExameDTO exameNew)
        {
            var _exameNew = mapper.Map<exame>(exameNew);
            repository.Update(Idexame, _exameNew);

            var idcategoriasExame = exameNew.categoriaexame.Where(a => a.idcategoriaexame != null)
                .Select(a => (Guid)a.idcategoriaexame)
                .ToArray();

            var idcategoriasExameDell = categoriaExameRepository.List()
                .Where(a => a.idexame == Idexame && !idcategoriasExame.Contains(a.idcategoriaexame))
                .Select(a => a.idcategoriaexame)
                .ToArray();

            foreach (var iddell in idcategoriasExameDell)
            {
                categoriaExameRepository.Delete(iddell);
            }

            foreach (var categoriaExame in exameNew.categoriaexame)
            {
                var _categoriaExame = mapper.Map<categoriaexame>(categoriaExame);

                if (categoriaExame.idcategoriaexame == null)
                {
                    _categoriaExame.idcategoriaexame = Guid.NewGuid();
                    _categoriaExame.idexame = _exameNew.idexame;

                    categoriaExameRepository.Insert(_categoriaExame);
                }
                else
                {
                    categoriaExameRepository.Update(_categoriaExame.idcategoriaexame, _categoriaExame);
                }
            }

            var idexameRespsDiag = exameNew.examemedicorespdiagnostico.Where(a => a.idexmeddiag != null)
                .Select(a => (Guid)a.idexmeddiag)
                .ToArray();

            var idexameRespsDiagDell = exameMedicorespDiagnosticoRepository.List()
                .Where(a => a.idexame == Idexame && !idexameRespsDiag.Contains(a.idexmeddiag))
                .Select(a => a.idexmeddiag)
                .ToArray();

            foreach (var iddell in idexameRespsDiagDell)
            {
                exameMedicorespDiagnosticoRepository.Delete(iddell);
            }

            foreach (var exameMedRespDiag in exameNew.examemedicorespdiagnostico)
            {
                var _exameMedRespDiag = mapper.Map<examemedicorespdiagnostico>(exameMedRespDiag);

                if (exameMedRespDiag.idexmeddiag == null)
                {
                    _exameMedRespDiag.idexmeddiag = Guid.NewGuid();
                    _exameMedRespDiag.idexame = _exameNew.idexame;

                    exameMedicorespDiagnosticoRepository.Insert(_exameMedRespDiag);
                }
                else
                {
                    exameMedicorespDiagnosticoRepository.Update(_exameMedRespDiag.idexmeddiag, _exameMedRespDiag);
                }
            }

            var idimagens = exameNew.imagem.Where(a => a.idimagem != null)
                .Select(a => (Guid)a.idimagem)
                .ToArray();

            var idimagensDell = imagemRepository.List()
                .Where(a => a.idexame == Idexame && !idimagens.Contains(a.idimagem))
                .Select(a => a.idimagem)
                .ToArray();

            foreach (var iddell in idimagensDell)
            {
                imagemRepository.Delete(iddell);
            }

            foreach (var imagem in exameNew.imagem)
            {
                var _imagem = mapper.Map<imagem>(imagem);

                if (imagem.idexame == null)
                {
                    _imagem.idexame = _exameNew.idexame;

                    imagemRepository.Update(imagem.idimagem, _imagem);
                }
            }
        }
    }
}
