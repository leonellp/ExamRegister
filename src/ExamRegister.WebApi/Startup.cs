using AutoMapper;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using ExamRegister.Business;
using ExamRegister.DA;
using ExamRegister.DA.Abstractions.interfaces;
using ExamRegister.Mapper;
using Microsoft.OpenApi.Models;
using System.Reflection;
using System.IO;
using System;

namespace ExamRegister.WebApi {
    public class Startup {

        readonly string MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

        public Startup(IConfiguration configuration) {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services) {
            services.AddSwaggerGen(options => {

                options.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "API ExamRegister",
                    Version = "v1",
                    Description = "API em C# de cadastro de exame médico",
                });

                //var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                //var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
                //options.IncludeXmlComments(xmlPath);
            });

            services.AddCors(options => {
                options.AddPolicy(name: MyAllowSpecificOrigins,
                                  builder => {
                                      builder.WithOrigins("http://localhost:4200")
                                                  .AllowAnyHeader()
                                                  .AllowAnyMethod();
                                  });
            });

            services.AddAutoMapper(typeof(Mappers));

            services.AddEntityFrameworkNpgsql().AddDbContext<ExamRegisterContext>(options => {
                options.UseNpgsql(Configuration.GetConnectionString("examregister"));
                options.UseLazyLoadingProxies();
            });

            services.AddControllers();
            services.AddControllersWithViews();
            services.AddRazorPages();
                        
            services.AddScoped<ICategoriaExameService, CategoriaExameService>();
            services.AddScoped<ICategoriaService, CategoriaService>();
            services.AddScoped<ICidadeService, CidadeService>();
            services.AddScoped<IClinicaService, ClinicaService>();
            services.AddScoped<IDiagnosticoService, DiagnosticoService>();
            services.AddScoped<IEnderecoService, EnderecoService>();
            services.AddScoped<IEstadoService, EstadoService>();
            services.AddScoped<IExameDiagService, ExameDiagService>();
            services.AddScoped<IExameMedicorespDiagnosticoService, ExameMedicorespDiagnosticoService>();
            services.AddScoped<IExameService, ExameService>(); 
            services.AddScoped<IGrupoDeMedicoService, GrupoDeMedicoService>(); 
            services.AddScoped<IMedicoGrupoService, MedicoGrupoService>(); 
            services.AddScoped<IHistoricoPacienteService, HistoricoPacienteService>(); 
            services.AddScoped<IImagemService, ImagemService>(); 
            services.AddScoped<IInformacaoService, InformacaoService>(); 
            services.AddScoped<IMedicoClinicaService, medicoclinicaService>(); 
            services.AddScoped<IMedicoService, MedicoService>(); 
            services.AddScoped<IOrgaoService, OrgaoService>(); 
            services.AddScoped<IPacienteInformacaoService, PacienteInformacaoService>(); 
            services.AddScoped<IPacienteService, PacienteService>(); 
            services.AddScoped<IPecaService, PecaService>(); 
            services.AddScoped<IReuniaoService, ReuniaoService>(); 
            services.AddScoped<IUsuarioService, UsuarioService>();

            services.AddScoped<ICategoriaExameRepository, CategoriaExameRepository>();
            services.AddScoped<ICategoriaRepository, CategoriaRepository>();
            services.AddScoped<ICidadeRepository, CidadeRepository>(); 
            services.AddScoped<IClinicaRepository, ClinicaRepository>();
            services.AddScoped<IDiagnosticoRepository, DiagnosticoRepository>();
            services.AddScoped<IEnderecoRepository, EnderecoRepository>();
            services.AddScoped<IEstadoRepository, EstadoRepository>();
            services.AddScoped<IExameDiagRepository, ExameDiagRepository>();
            services.AddScoped<IExameMedicorespDiagnosticoRepository, ExameMedicorespDiagnosticoRepository>(); 
            services.AddScoped<IExameRepository, ExameRepository>();
            services.AddScoped<IGrupoDeMedicosRepository, GrupoDeMedicoRepository>();
            services.AddScoped<IMedicoGrupoRepository, MedicoGrupoRepository>();
            services.AddScoped<IHistoricoPacienteRepository, HistoricoPacienteRepository>();
            services.AddScoped<IImagemRepository, ImagemRepository>();
            services.AddScoped<IInformacaoRepository, InformacaoRepository>(); 
            services.AddScoped<IMedicoClinicaRepository, MedicoClinicaRepository>(); 
            services.AddScoped<IMedicoRepository, MedicoRepository>(); 
            services.AddScoped<IOrgaoRepository, OrgaoRepository>(); 
            services.AddScoped<IPacienteInformacaoRepository, PacienteInformacaoRepository>(); 
            services.AddScoped<IPacienteRepository, PacienteRepository>(); 
            services.AddScoped<IPecaRepository, PecaRepository>(); 
            services.AddScoped<IReuniaoRepository, ReuniaoRepository>(); 
            services.AddScoped<IUsuarioRepository, UsuarioRepository>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env) {
            if (env.IsDevelopment()) {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();
            app.UseRouting();
            app.UseCors(MyAllowSpecificOrigins);
            app.UseAuthorization();

            app.UseEndpoints(endpoints => {
                endpoints.MapControllers();
            });

            app.UseSwagger(c => {
                c.SerializeAsV2 = true;
            });

            app.UseSwaggerUI(options => {
                options.SwaggerEndpoint("/swagger/v1/swagger.json", "ExamRegister");
            });
        }
    }
}
