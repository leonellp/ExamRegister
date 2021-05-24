using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using ExamRegister.DA.Abstractions.Models;

#nullable disable

namespace ExamRegister.DA
{
    public partial class ExamRegisterContext : DbContext
    {
        public ExamRegisterContext()
        {
        }

        public ExamRegisterContext(DbContextOptions<ExamRegisterContext> options)
            : base(options)
        {
        }

        public virtual DbSet<categoria> categoria { get; set; }
        public virtual DbSet<categoriaexame> categoriaexame { get; set; }
        public virtual DbSet<cidade> cidade { get; set; }
        public virtual DbSet<clinica> clinica { get; set; }
        public virtual DbSet<diagnostico> diagnostico { get; set; }
        public virtual DbSet<endereco> endereco { get; set; }
        public virtual DbSet<estado> estado { get; set; }
        public virtual DbSet<exame> exame { get; set; }
        public virtual DbSet<examediag> examediag { get; set; }
        public virtual DbSet<examemedicorespdiagnostico> examemedicorespdiagnostico { get; set; }
        public virtual DbSet<grupodemedico> grupodemedico { get; set; }
        public virtual DbSet<historicopaciente> historicopaciente { get; set; }
        public virtual DbSet<imagem> imagem { get; set; }
        public virtual DbSet<informacao> informacao { get; set; }
        public virtual DbSet<medico> medico { get; set; }
        public virtual DbSet<medicoclinica> medicoclinica { get; set; }
        public virtual DbSet<medicogrupo> medicogrupo { get; set; }
        public virtual DbSet<orgao> orgao { get; set; }
        public virtual DbSet<paciente> paciente { get; set; }
        public virtual DbSet<pacienteinformacao> pacienteinformacao { get; set; }
        public virtual DbSet<peca> peca { get; set; }
        public virtual DbSet<reuniao> reuniao { get; set; }
        public virtual DbSet<usuario> usuario { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseNpgsql("Host = localhost; Database = examregister; Username = postgres; Password = 1234");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasPostgresExtension("uuid-ossp")
                .HasAnnotation("Relational:Collation", "en_US.utf8");

            modelBuilder.Entity<categoria>(entity =>
            {
                entity.HasKey(e => e.idcategoria)
                    .HasName("categoria_pkey");

                entity.Property(e => e.idcategoria).ValueGeneratedNever();

                entity.Property(e => e.idexterno)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.Property(e => e.nome)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.nomecompleto)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.HasOne(d => d.idcategoriapaiNavigation)
                    .WithMany(p => p.InverseidcategoriapaiNavigation)
                    .HasForeignKey(d => d.idcategoriapai)
                    .HasConstraintName("idcategoriapai");
            });

            modelBuilder.Entity<categoriaexame>(entity =>
            {
                entity.HasKey(e => e.idcategoriaexame)
                    .HasName("categoriaexame_pkey");

                entity.Property(e => e.idcategoriaexame).ValueGeneratedNever();

                entity.HasOne(d => d.idcategoriaNavigation)
                    .WithMany(p => p.categoriaexame)
                    .HasForeignKey(d => d.idcategoria)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idcategoria");

                entity.HasOne(d => d.idexameNavigation)
                    .WithMany(p => p.categoriaexame)
                    .HasForeignKey(d => d.idexame)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idexame");
            });

            modelBuilder.Entity<cidade>(entity =>
            {
                entity.HasKey(e => e.idcidade)
                    .HasName("cidades_pkey");

                entity.Property(e => e.idcidade).ValueGeneratedNever();

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.Property(e => e.nome)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.idestadoNavigation)
                    .WithMany(p => p.cidade)
                    .HasForeignKey(d => d.idestado)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idestado");
            });

            modelBuilder.Entity<clinica>(entity =>
            {
                entity.HasKey(e => e.idclinica)
                    .HasName("clinicas_pkey");

                entity.Property(e => e.idclinica).ValueGeneratedNever();

                entity.Property(e => e.celular)
                    .IsRequired()
                    .HasMaxLength(15);

                entity.Property(e => e.email)
                    .IsRequired()
                    .HasMaxLength(254);

                entity.Property(e => e.idexterno)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.Property(e => e.nome)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.telefone).HasMaxLength(15);

                entity.HasOne(d => d.idenderecoNavigation)
                    .WithMany(p => p.clinica)
                    .HasForeignKey(d => d.idendereco)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idendereco");
            });

            modelBuilder.Entity<diagnostico>(entity =>
            {
                entity.HasKey(e => e.iddiagnostico)
                    .HasName("diagnosticos_pkey");

                entity.Property(e => e.iddiagnostico).ValueGeneratedNever();

                entity.Property(e => e.idexterno)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.Property(e => e.nome)
                    .IsRequired()
                    .HasMaxLength(200);
            });

            modelBuilder.Entity<endereco>(entity =>
            {
                entity.HasKey(e => e.idendereco)
                    .HasName("endereco_pkey");

                entity.Property(e => e.idendereco).ValueGeneratedNever();

                entity.Property(e => e.bairro)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.cep)
                    .IsRequired()
                    .HasMaxLength(9);

                entity.Property(e => e.complemento).HasMaxLength(200);

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.Property(e => e.rua)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.HasOne(d => d.idcidadeNavigation)
                    .WithMany(p => p.endereco)
                    .HasForeignKey(d => d.idcidade)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idcidade");

                entity.HasOne(d => d.idestadoNavigation)
                    .WithMany(p => p.endereco)
                    .HasForeignKey(d => d.idestado)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idestado");
            });

            modelBuilder.Entity<estado>(entity =>
            {
                entity.HasKey(e => e.idestado)
                    .HasName("estados_pkey");

                entity.Property(e => e.idestado).ValueGeneratedNever();

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.Property(e => e.nome)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.sigla)
                    .IsRequired()
                    .HasMaxLength(2)
                    .IsFixedLength(true);
            });

            modelBuilder.Entity<exame>(entity =>
            {
                entity.HasKey(e => e.idexame)
                    .HasName("exames_pkey");

                entity.Property(e => e.idexame).ValueGeneratedNever();

                entity.Property(e => e.autoanticorpos).HasMaxLength(200);

                entity.Property(e => e.conclusao)
                    .IsRequired()
                    .HasMaxLength(300);

                entity.Property(e => e.dadosclinicos)
                    .IsRequired()
                    .HasMaxLength(300);

                entity.Property(e => e.datain).HasColumnType("date");

                entity.Property(e => e.dataout).HasColumnType("date");

                entity.Property(e => e.datatransplante).HasColumnType("date");

                entity.Property(e => e.descdoencaautoimune).HasMaxLength(200);

                entity.Property(e => e.descusamedicamento).HasMaxLength(200);

                entity.Property(e => e.diagnostico)
                    .IsRequired()
                    .HasMaxLength(10000);

                entity.Property(e => e.idexterno)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.Property(e => e.observacao).HasMaxLength(300);

                entity.Property(e => e.outros)
                    .IsRequired()
                    .HasMaxLength(300);

                entity.Property(e => e.suspeitaclinica)
                    .IsRequired()
                    .HasMaxLength(300);

                entity.HasOne(d => d.idclinicaNavigation)
                    .WithMany(p => p.exame)
                    .HasForeignKey(d => d.idclinica)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idclinica");

                entity.HasOne(d => d.idgrupomedicoNavigation)
                    .WithMany(p => p.exame)
                    .HasForeignKey(d => d.idgrupomedico)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idgrupodemedico");

                entity.HasOne(d => d.idmedicorespNavigation)
                    .WithMany(p => p.exameidmedicorespNavigation)
                    .HasForeignKey(d => d.idmedicoresp)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idmedicoresp");

                entity.HasOne(d => d.idmedicosolicNavigation)
                    .WithMany(p => p.exameidmedicosolicNavigation)
                    .HasForeignKey(d => d.idmedicosolic)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idmedsolic");

                entity.HasOne(d => d.idorgaoNavigation)
                    .WithMany(p => p.exame)
                    .HasForeignKey(d => d.idorgao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idorgao");

                entity.HasOne(d => d.idpacienteNavigation)
                    .WithMany(p => p.exame)
                    .HasForeignKey(d => d.idpaciente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idpaciente");

                entity.HasOne(d => d.idpecaNavigation)
                    .WithMany(p => p.exame)
                    .HasForeignKey(d => d.idpeca)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idpeca");

                entity.HasOne(d => d.idreuniaoNavigation)
                    .WithMany(p => p.exame)
                    .HasForeignKey(d => d.idreuniao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idreuniao");
            });

            modelBuilder.Entity<examediag>(entity =>
            {
                entity.HasKey(e => e.idexamediag)
                    .HasName("examediag_pkey");

                entity.Property(e => e.idexamediag).ValueGeneratedNever();

                entity.HasOne(d => d.iddiagNavigation)
                    .WithMany(p => p.examediag)
                    .HasForeignKey(d => d.iddiag)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("iddiag");

                entity.HasOne(d => d.idexameNavigation)
                    .WithMany(p => p.examediag)
                    .HasForeignKey(d => d.idexame)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idexame");
            });

            modelBuilder.Entity<examemedicorespdiagnostico>(entity =>
            {
                entity.HasKey(e => e.idexmeddiag)
                    .HasName("exame_medicoresp_diagnostico_pkey");

                entity.Property(e => e.idexmeddiag).ValueGeneratedNever();

                entity.HasOne(d => d.idexameNavigation)
                    .WithMany(p => p.examemedicorespdiagnostico)
                    .HasForeignKey(d => d.idexame)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idexame");

                entity.HasOne(d => d.idmedicoNavigation)
                    .WithMany(p => p.examemedicorespdiagnostico)
                    .HasForeignKey(d => d.idmedico)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idmedico");
            });

            modelBuilder.Entity<grupodemedico>(entity =>
            {
                entity.HasKey(e => e.idgrupodemedicos)
                    .HasName("grupodemedicos_pkey");

                entity.Property(e => e.idgrupodemedicos).ValueGeneratedNever();

                entity.Property(e => e.idexterno)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.Property(e => e.nome)
                    .IsRequired()
                    .HasMaxLength(100);
            });

            modelBuilder.Entity<historicopaciente>(entity =>
            {
                entity.HasKey(e => e.idhispaciente)
                    .HasName("historico_paciente_pkey");

                entity.Property(e => e.idhispaciente).ValueGeneratedNever();

                entity.Property(e => e.data).HasColumnType("date");

                entity.Property(e => e.descricao)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.HasOne(d => d.idpacienteNavigation)
                    .WithMany(p => p.historicopaciente)
                    .HasForeignKey(d => d.idpaciente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idpaciente");
            });

            modelBuilder.Entity<imagem>(entity =>
            {
                entity.HasKey(e => e.idimagem)
                    .HasName("imagem_pkey");

                entity.Property(e => e.idimagem).ValueGeneratedNever();

                entity.Property(e => e.dataupload).HasColumnType("date");

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.Property(e => e.nome).HasMaxLength(200);

                entity.Property(e => e.url)
                    .IsRequired()
                    .HasMaxLength(300);

                entity.HasOne(d => d.idexameNavigation)
                    .WithMany(p => p.imagem)
                    .HasForeignKey(d => d.idexame)
                    .HasConstraintName("idexame");
            });

            modelBuilder.Entity<informacao>(entity =>
            {
                entity.HasKey(e => e.idinformacao)
                    .HasName("informacao_pkey");

                entity.Property(e => e.idinformacao).ValueGeneratedNever();

                entity.Property(e => e.idexterno)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.Property(e => e.nome)
                    .IsRequired()
                    .HasMaxLength(200);
            });

            modelBuilder.Entity<medico>(entity =>
            {
                entity.HasKey(e => e.idmedico)
                    .HasName("medicos_pkey");

                entity.Property(e => e.idmedico).ValueGeneratedNever();

                entity.Property(e => e.celular)
                    .IsRequired()
                    .HasMaxLength(15);

                entity.Property(e => e.crm).HasMaxLength(20);

                entity.Property(e => e.email)
                    .IsRequired()
                    .HasMaxLength(254);

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.Property(e => e.nome)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.telefone).HasMaxLength(15);

                entity.Property(e => e.telefone2).HasMaxLength(15);
            });

            modelBuilder.Entity<medicoclinica>(entity =>
            {
                entity.HasKey(e => e.idmedcli)
                    .HasName("medicos_clinicas_pkey");

                entity.Property(e => e.idmedcli).ValueGeneratedNever();

                entity.HasOne(d => d.idclinicaNavigation)
                    .WithMany(p => p.medicoclinica)
                    .HasForeignKey(d => d.idclinica)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idclinica");

                entity.HasOne(d => d.idmedicoNavigation)
                    .WithMany(p => p.medicoclinica)
                    .HasForeignKey(d => d.idmedico)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idmedico");
            });

            modelBuilder.Entity<medicogrupo>(entity =>
            {
                entity.HasKey(e => e.idgrupomedico)
                    .HasName("grupomedico_pkey");

                entity.Property(e => e.idgrupomedico).ValueGeneratedNever();

                entity.HasOne(d => d.idgrupoNavigation)
                    .WithMany(p => p.medicogrupo)
                    .HasForeignKey(d => d.idgrupo)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idgrupo");

                entity.HasOne(d => d.idmedicoNavigation)
                    .WithMany(p => p.medicogrupo)
                    .HasForeignKey(d => d.idmedico)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idmedico");
            });

            modelBuilder.Entity<orgao>(entity =>
            {
                entity.HasKey(e => e.idorgao)
                    .HasName("orgaos_pkey");

                entity.Property(e => e.idorgao).ValueGeneratedNever();

                entity.Property(e => e.idexterno)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.Property(e => e.nome)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<paciente>(entity =>
            {
                entity.HasKey(e => e.idpaciente)
                    .HasName("pacientes_pkey");

                entity.Property(e => e.idpaciente).ValueGeneratedNever();

                entity.Property(e => e.idexterno)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.Property(e => e.nascimento).HasColumnType("date");

                entity.Property(e => e.nome)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.sexo).HasMaxLength(1);
            });

            modelBuilder.Entity<pacienteinformacao>(entity =>
            {
                entity.HasKey(e => e.Idpacienteinformacao)
                    .HasName("paciente_informacao_pkey");

                entity.Property(e => e.Idpacienteinformacao).ValueGeneratedNever();

                entity.HasOne(d => d.idinformacaoNavigation)
                    .WithMany(p => p.pacienteinformacao)
                    .HasForeignKey(d => d.idinformacao)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idinformacao");

                entity.HasOne(d => d.idpacienteNavigation)
                    .WithMany(p => p.pacienteinformacao)
                    .HasForeignKey(d => d.idpaciente)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("idpaciente");
            });

            modelBuilder.Entity<peca>(entity =>
            {
                entity.HasKey(e => e.idpeca)
                    .HasName("pecas_pkey");

                entity.Property(e => e.idpeca).ValueGeneratedNever();

                entity.Property(e => e.idexterno)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.Property(e => e.nome_)
                    .IsRequired()
                    .HasMaxLength(200)
                    .HasColumnName("nome ");
            });

            modelBuilder.Entity<reuniao>(entity =>
            {
                entity.HasKey(e => e.idrenuiao)
                    .HasName("reunioes_pkey");

                entity.Property(e => e.idrenuiao).ValueGeneratedNever();

                entity.Property(e => e.data).HasColumnType("date");

                entity.Property(e => e.idexterno)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.Property(e => e.nome)
                    .IsRequired()
                    .HasMaxLength(200);
            });

            modelBuilder.Entity<usuario>(entity =>
            {
                entity.HasKey(e => e.idusuario)
                    .HasName("usuarios_pkey");

                entity.Property(e => e.idusuario).ValueGeneratedNever();

                entity.Property(e => e.idexterno)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.inativo).HasColumnType("date");

                entity.Property(e => e.nome)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.password_hash)
                    .IsRequired()
                    .HasMaxLength(1000);

                entity.Property(e => e.password_salt)
                    .IsRequired()
                    .HasMaxLength(1000);

                entity.Property(e => e.user)
                    .IsRequired()
                    .HasMaxLength(200);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
