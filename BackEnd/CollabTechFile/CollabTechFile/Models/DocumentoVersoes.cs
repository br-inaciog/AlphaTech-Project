using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace CollabTechFile.Models;

public partial class DocumentoVersoes
{
    [Key]
    public int IdDocumentoVersoes { get; set; }

    public int IdDocumento { get; set; }

    public int NumeroVersao { get; set; }

    [ForeignKey("IdDocumento")]
    [InverseProperty("DocumentoVersos")]
    public virtual Documento IdDocumentoNavigation { get; set; } = null!;
}
