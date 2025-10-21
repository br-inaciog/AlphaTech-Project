using System;
using System.Collections.Generic;
using CollabTechFile.Models;
using Microsoft.EntityFrameworkCore;

namespace CollabTechFile.DbContextCollab;

public partial class CollabTechFileContext : DbContext
{
    public CollabTechFileContext()
    {
    }

    public CollabTechFileContext(DbContextOptions<CollabTechFileContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Comentario> Comentarios { get; set; }

    public virtual DbSet<Documento> Documentos { get; set; }

    public virtual DbSet<DocumentoVersoes> DocumentoVersoes { get; set; }

    public virtual DbSet<Empresa> Empresas { get; set; }

    public virtual DbSet<Feedback> Feedbacks { get; set; }

    public virtual DbSet<Regra> Regras { get; set; }

    public virtual DbSet<RegrasDoc> RegrasDocs { get; set; }

    public virtual DbSet<ReqDoc> ReqDocs { get; set; }

    public virtual DbSet<Requisito> Requisitos { get; set; }

    public virtual DbSet<Suporte> Suportes { get; set; }

    public virtual DbSet<TipoUsuario> TipoUsuarios { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
<<<<<<< HEAD
        => optionsBuilder.UseSqlServer("Server=tcp:collabdb.database.windows.net,1433;Initial Catalog=CollabTechFile;User ID=alpha;Password=Senai@134;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
=======
<<<<<<< HEAD
<<<<<<< HEAD

        //=> optionsBuilder.UseSqlServer("Server=DESKTOP-S3CGL03\\SQLEXPRESS  ;DataBase=CollabTechFile;user ID = sa; pwd= Senai@134;TrustServerCertificate=True;");


        => optionsBuilder.UseSqlServer("Server=tcp:alphatechbanco.database.windows.net,1433;Initial Catalog=collabdb;Persist Security Info=False;User ID=CollabTechFile;Password= Senai@134;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

=======
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
<<<<<<< HEAD



        => optionsBuilder.UseSqlServer("Server=tcp:collabdb.database.windows.net,1433;Initial Catalog=CollabTechFile;Persist Security Info=False;User ID=alpha;Password=Senai@134;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
        => optionsBuilder.UseSqlServer("Server=DESKTOP-S3CGL03\\SQLEXPRESS  ;DataBase=CollabTechFile;user ID = sa; pwd= Senai@134;TrustServerCertificate=True;");
=======
<<<<<<< HEAD
>>>>>>> 179bb5085e2ed1a4080cb29c1937f23fd3962300

        => optionsBuilder.UseSqlServer("Server=tcp:alphatechbanco.database.windows.net,1433;Initial Catalog=collabdb;Persist Security Info=False;User ID=CollabTechFile;Password= Senai@134;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
<<<<<<< HEAD
=======
>>>>>>> db99a3c3417c57240d87e2b7d59c4d116db195bb
>>>>>>> 379c678523b6cc748e1fe2568e31d7f56b3162b8
>>>>>>> 179bb5085e2ed1a4080cb29c1937f23fd3962300
>>>>>>> 0535281acd6e168cbb0b95ab44a2f4cf3b6a945f
>>>>>>> b5d895e344a022648898c108d7b758718115d993

=======
    {
        optionsBuilder.UseSqlServer("Server=tcp:collabdb.database.windows.net,1433;Initial Catalog=CollabTechFile;User ID=alpha;Password=Senai@134;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
    }
>>>>>>> 95e64a1ee5ffa9750a6ca6daff8df86b84d1c486


>>>>>>> 89866fec690cc1a33e826f08db273ef227d24c83
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Comentario>(entity =>
        {
            entity.HasKey(e => e.IdComentario).HasName("PK__Comentar__DDBEFBF996CF8BE1");

            entity.HasOne(d => d.IdDocumentoNavigation).WithMany(p => p.Comentarios).HasConstraintName("FK__Comentari__IdDoc__534D60F1");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Comentarios).HasConstraintName("FK__Comentari__IdUsu__5441852A");
        });

        modelBuilder.Entity<Documento>(entity =>
        {
            entity.HasKey(e => e.IdDocumento).HasName("PK__Document__E52073477E6CC2C5");

            entity.Property(e => e.CriadoEm).HasDefaultValueSql("(getdate())");
            entity.Property(e => e.VersaoAtual).HasDefaultValue(1);

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Documentos).HasConstraintName("FK__Documento__IdUsu__5535A963");
        });

        modelBuilder.Entity<DocumentoVersoes>(entity =>
        {
            entity.HasKey(e => e.IdDocumentoVersoes).HasName("PK__Document__82F8A7D2BEBACD33");

            entity.HasOne(d => d.IdDocumentoNavigation).WithMany(p => p.DocumentoVersos)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("DocumentoVersao");
        });

        modelBuilder.Entity<Empresa>(entity =>
        {
            entity.HasKey(e => e.IdEmpresa).HasName("PK__Empresa__5EF4033E1579D3BC");

            entity.Property(e => e.Ativo).HasDefaultValue(true);
        });

        modelBuilder.Entity<Feedback>(entity =>
        {
            entity.HasKey(e => e.IdFeedback).HasName("PK__Feedback__408FF103F528ED43");

            entity.Property(e => e.DataEnvio).HasDefaultValueSql("(getdate())");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Feedbacks)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("feedbackUsuario");
        });

        modelBuilder.Entity<Regra>(entity =>
        {
            entity.HasKey(e => e.IdRegras).HasName("PK__Regras__8905AC387267AC54");
        });

        modelBuilder.Entity<RegrasDoc>(entity =>
        {
            entity.HasKey(e => e.IdRegrasDoc).HasName("PK__Regras_D__31F46840F01B7F54");

            entity.HasOne(d => d.IdDocumentoNavigation).WithMany(p => p.RegrasDocs).HasConstraintName("FK__Regras_Do__IdDoc__5812160E");

            entity.HasOne(d => d.IdRegrasNavigation).WithMany(p => p.RegrasDocs).HasConstraintName("FK__Regras_Do__IdReg__59063A47");
        });

        modelBuilder.Entity<ReqDoc>(entity =>
        {
            entity.HasKey(e => e.IdReqDoc).HasName("PK__Req_Doc__06347D5978ABF4C8");

            entity.HasOne(d => d.IdDocumentoNavigation).WithMany(p => p.ReqDocs).HasConstraintName("FK__Req_Doc__IdDocum__59FA5E80");

            entity.HasOne(d => d.IdRequisitoNavigation).WithMany(p => p.ReqDocs).HasConstraintName("FK__Req_Doc__IdRequi__5AEE82B9");
        });

        modelBuilder.Entity<Requisito>(entity =>
        {
            entity.HasKey(e => e.IdRequisito).HasName("PK__Requisit__661FC7C223E12FDD");
        });

        modelBuilder.Entity<Suporte>(entity =>
        {
            entity.HasKey(e => e.IdSuporte).HasName("PK__Suporte__AA104D735F80F46F");
        });

        modelBuilder.Entity<TipoUsuario>(entity =>
        {
            entity.HasKey(e => e.IdTipoUsuario).HasName("PK__TipoUsua__CA04062BAE1C21D1");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("PK__Usuario__5B65BF97CBC5B198");

            entity.Property(e => e.Ativo).HasDefaultValue(true);

            entity.HasOne(d => d.IdEmpresaNavigation).WithMany(p => p.Usuarios).HasConstraintName("FK__Usuario__IdEmpre__5BE2A6F2");

            entity.HasOne(d => d.IdTipoUsuarioNavigation).WithMany(p => p.Usuarios).HasConstraintName("FK__Usuario__IdTipoU__5CD6CB2B");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
