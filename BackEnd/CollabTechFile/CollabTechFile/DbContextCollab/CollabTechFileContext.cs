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
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Server=NOTE36-S28\\SQLEXPRESS;DataBase=CollabTechFile;user ID = sa; pwd= Senai@134;TrustServerCertificate=True;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Comentario>(entity =>
        {
            entity.HasKey(e => e.IdComentario).HasName("PK__Comentar__DDBEFBF969871F15");

            entity.HasOne(d => d.IdDocumentoNavigation).WithMany(p => p.Comentarios).HasConstraintName("FK__Comentari__IdDoc__5BE2A6F2");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Comentarios).HasConstraintName("FK__Comentari__IdUsu__5AEE82B9");
        });

        modelBuilder.Entity<Documento>(entity =>
        {
            entity.HasKey(e => e.IdDocumento).HasName("PK__Document__E52073477EF6EE36");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Documentos).HasConstraintName("FK__Documento__IdUsu__5812160E");
        });

        modelBuilder.Entity<Empresa>(entity =>
        {
            entity.HasKey(e => e.IdEmpresa).HasName("PK__Empresa__5EF4033E44C59B40");

            entity.Property(e => e.Ativo).HasDefaultValue(true);
        });

        modelBuilder.Entity<Feedback>(entity =>
        {
            entity.HasKey(e => e.IdFeedback).HasName("PK__Feedback__408FF1038053A229");

            entity.Property(e => e.DataEnvio).HasDefaultValueSql("(getdate())");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Feedbacks)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("feedbackUsuario");
        });

        modelBuilder.Entity<Regra>(entity =>
        {
            entity.HasKey(e => e.IdRegras).HasName("PK__Regras__8905AC384135C0B8");
        });

        modelBuilder.Entity<RegrasDoc>(entity =>
        {
            entity.HasKey(e => e.IdRegrasDoc).HasName("PK__Regras_D__31F46840051EB162");

            entity.HasOne(d => d.IdDocumentoNavigation).WithMany(p => p.RegrasDocs).HasConstraintName("FK__Regras_Do__IdDoc__6754599E");

            entity.HasOne(d => d.IdRegrasNavigation).WithMany(p => p.RegrasDocs).HasConstraintName("FK__Regras_Do__IdReg__66603565");
        });

        modelBuilder.Entity<ReqDoc>(entity =>
        {
            entity.HasKey(e => e.IdReqDoc).HasName("PK__Req_Doc__06347D59F6F0E5AE");

            entity.HasOne(d => d.IdDocumentoNavigation).WithMany(p => p.ReqDocs).HasConstraintName("FK__Req_Doc__IdDocum__619B8048");

            entity.HasOne(d => d.IdRequisitoNavigation).WithMany(p => p.ReqDocs).HasConstraintName("FK__Req_Doc__IdRequi__60A75C0F");
        });

        modelBuilder.Entity<Requisito>(entity =>
        {
            entity.HasKey(e => e.IdRequisito).HasName("PK__Requisit__661FC7C2E926C8A0");
        });

        modelBuilder.Entity<Suporte>(entity =>
        {
            entity.HasKey(e => e.IdSuporte).HasName("PK__Suporte__AA104D73D97D94F0");
        });

        modelBuilder.Entity<TipoUsuario>(entity =>
        {
            entity.HasKey(e => e.IdTipoUsuario).HasName("PK__TipoUsua__CA04062B57B6CA9A");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("PK__Usuario__5B65BF97D000312F");

            entity.Property(e => e.Ativo).HasDefaultValue(true);

            entity.HasOne(d => d.IdEmpresaNavigation).WithMany(p => p.Usuarios).HasConstraintName("FK__Usuario__IdEmpre__5535A963");

            entity.HasOne(d => d.IdTipoUsuarioNavigation).WithMany(p => p.Usuarios).HasConstraintName("FK__Usuario__IdTipoU__5441852A");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
