using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CollabTechFile.Models;

[Table("Documento")]
public partial class Documento
{
    [Key]
    public int IdDocumento { get; set; }

    public int? IdUsuario { get; set; }

    [Column("nome")]
    [StringLength(200)]
    public string? Nome { get; set; }

    [Column("prazo")]
    public DateOnly? Prazo { get; set; }

    [Column("status")]
    public bool Status { get; set; }

    [Column("versao")]
    [StringLength(50)]
    [Unicode(false)]
    public string? Versao { get; set; }

    [Column("caminho_arquivo")]
    [StringLength(500)]
    public string? CaminhoArquivo { get; set; }

    [InverseProperty("IdDocumentoNavigation")]
    public virtual ICollection<Comentario> Comentarios { get; set; } = new List<Comentario>();

    [ForeignKey("IdUsuario")]
    [InverseProperty("Documentos")]
    public virtual Usuario? IdUsuarioNavigation { get; set; }

    [InverseProperty("IdDocumentoNavigation")]
    public virtual ICollection<RegrasDoc> RegrasDocs { get; set; } = new List<RegrasDoc>();

    [InverseProperty("IdDocumentoNavigation")]
    public virtual ICollection<ReqDoc> ReqDocs { get; set; } = new List<ReqDoc>();
}
