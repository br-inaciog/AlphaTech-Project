using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CollabTechFile.Migrations
{
    /// <inheritdoc />
    public partial class CollabTechFile : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Empresa",
                columns: table => new
                {
                    IdEmpresa = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nome = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    CNPJ = table.Column<string>(type: "varchar(15)", unicode: false, maxLength: 15, nullable: false),
                    ativo = table.Column<bool>(type: "bit", nullable: true, defaultValue: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Empresa__5EF4033E44C59B40", x => x.IdEmpresa);
                });

            migrationBuilder.CreateTable(
                name: "Regras",
                columns: table => new
                {
                    IdRegras = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nome = table.Column<string>(type: "varchar(200)", unicode: false, maxLength: 200, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Regras__8905AC384135C0B8", x => x.IdRegras);
                });

            migrationBuilder.CreateTable(
                name: "Requisitos",
                columns: table => new
                {
                    IdRequisito = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Tipo = table.Column<string>(type: "varchar(20)", unicode: false, maxLength: 20, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Requisit__661FC7C2E926C8A0", x => x.IdRequisito);
                });

            migrationBuilder.CreateTable(
                name: "Suporte",
                columns: table => new
                {
                    IdSuporte = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    Email = table.Column<string>(type: "varchar(200)", unicode: false, maxLength: 200, nullable: true),
                    Mensagem = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Suporte__AA104D73D97D94F0", x => x.IdSuporte);
                });

            migrationBuilder.CreateTable(
                name: "TipoUsuario",
                columns: table => new
                {
                    IdTipoUsuario = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TituloTipoUsuario = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__TipoUsua__CA04062B57B6CA9A", x => x.IdTipoUsuario);
                });

            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    IdUsuario = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdTipoUsuario = table.Column<int>(type: "int", nullable: true),
                    IdEmpresa = table.Column<int>(type: "int", nullable: true),
                    nome = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: false),
                    email = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    senha = table.Column<string>(type: "nvarchar(255)", maxLength: 255, nullable: true),
                    empresa = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    ativo = table.Column<bool>(type: "bit", nullable: true, defaultValue: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Usuario__5B65BF97D000312F", x => x.IdUsuario);
                    table.ForeignKey(
                        name: "FK__Usuario__IdEmpre__5535A963",
                        column: x => x.IdEmpresa,
                        principalTable: "Empresa",
                        principalColumn: "IdEmpresa");
                    table.ForeignKey(
                        name: "FK__Usuario__IdTipoU__5441852A",
                        column: x => x.IdTipoUsuario,
                        principalTable: "TipoUsuario",
                        principalColumn: "IdTipoUsuario");
                });

            migrationBuilder.CreateTable(
                name: "Documento",
                columns: table => new
                {
                    IdDocumento = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdUsuario = table.Column<int>(type: "int", nullable: true),
                    nome = table.Column<string>(type: "nvarchar(200)", maxLength: 200, nullable: true),
                    prazo = table.Column<DateOnly>(type: "date", nullable: true),
                    status = table.Column<bool>(type: "bit", nullable: false),
                    versao = table.Column<string>(type: "varchar(50)", unicode: false, maxLength: 50, nullable: true),
                    caminho_arquivo = table.Column<string>(type: "nvarchar(500)", maxLength: 500, nullable: true),
                    VersaoAtual = table.Column<int>(type: "int", nullable: false, defaultValue: 1),
                    CriadoEm = table.Column<DateTime>(type: "datetime", nullable: false, defaultValueSql: "(getdate())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Document__E52073477EF6EE36", x => x.IdDocumento);
                    table.ForeignKey(
                        name: "FK__Documento__IdUsu__5812160E",
                        column: x => x.IdUsuario,
                        principalTable: "Usuario",
                        principalColumn: "IdUsuario");
                });

            migrationBuilder.CreateTable(
                name: "Feedback",
                columns: table => new
                {
                    IdFeedback = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdUsuario = table.Column<int>(type: "int", nullable: false),
                    mensagem = table.Column<string>(type: "text", nullable: false),
                    data_envio = table.Column<DateTime>(type: "datetime", nullable: true, defaultValueSql: "(getdate())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Feedback__408FF1038053A229", x => x.IdFeedback);
                    table.ForeignKey(
                        name: "feedbackUsuario",
                        column: x => x.IdUsuario,
                        principalTable: "Usuario",
                        principalColumn: "IdUsuario");
                });

            migrationBuilder.CreateTable(
                name: "Comentario",
                columns: table => new
                {
                    IdComentario = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdUsuario = table.Column<int>(type: "int", nullable: true),
                    IdDocumento = table.Column<int>(type: "int", nullable: true),
                    texto = table.Column<string>(type: "varchar(2000)", unicode: false, maxLength: 2000, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Comentar__DDBEFBF969871F15", x => x.IdComentario);
                    table.ForeignKey(
                        name: "FK__Comentari__IdDoc__5BE2A6F2",
                        column: x => x.IdDocumento,
                        principalTable: "Documento",
                        principalColumn: "IdDocumento");
                    table.ForeignKey(
                        name: "FK__Comentari__IdUsu__5AEE82B9",
                        column: x => x.IdUsuario,
                        principalTable: "Usuario",
                        principalColumn: "IdUsuario");
                });

            migrationBuilder.CreateTable(
                name: "DocumentoVersoes",
                columns: table => new
                {
                    IdDocumentoVersoes = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdDocumento = table.Column<int>(type: "int", nullable: false),
                    NumeroVersao = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Document__82F8A7D2227FA4DC", x => x.IdDocumentoVersoes);
                    table.ForeignKey(
                        name: "DocumentoVersao",
                        column: x => x.IdDocumento,
                        principalTable: "Documento",
                        principalColumn: "IdDocumento");
                });

            migrationBuilder.CreateTable(
                name: "Regras_Doc",
                columns: table => new
                {
                    IdRegras_Doc = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdRegras = table.Column<int>(type: "int", nullable: true),
                    IdDocumento = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Regras_D__31F46840051EB162", x => x.IdRegras_Doc);
                    table.ForeignKey(
                        name: "FK__Regras_Do__IdDoc__6754599E",
                        column: x => x.IdDocumento,
                        principalTable: "Documento",
                        principalColumn: "IdDocumento");
                    table.ForeignKey(
                        name: "FK__Regras_Do__IdReg__66603565",
                        column: x => x.IdRegras,
                        principalTable: "Regras",
                        principalColumn: "IdRegras");
                });

            migrationBuilder.CreateTable(
                name: "Req_Doc",
                columns: table => new
                {
                    IdReq_Doc = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    IdRequisito = table.Column<int>(type: "int", nullable: true),
                    IdDocumento = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__Req_Doc__06347D59F6F0E5AE", x => x.IdReq_Doc);
                    table.ForeignKey(
                        name: "FK__Req_Doc__IdDocum__619B8048",
                        column: x => x.IdDocumento,
                        principalTable: "Documento",
                        principalColumn: "IdDocumento");
                    table.ForeignKey(
                        name: "FK__Req_Doc__IdRequi__60A75C0F",
                        column: x => x.IdRequisito,
                        principalTable: "Requisitos",
                        principalColumn: "IdRequisito");
                });

            migrationBuilder.CreateIndex(
                name: "IX_Comentario_IdDocumento",
                table: "Comentario",
                column: "IdDocumento");

            migrationBuilder.CreateIndex(
                name: "IX_Comentario_IdUsuario",
                table: "Comentario",
                column: "IdUsuario");

            migrationBuilder.CreateIndex(
                name: "IX_Documento_IdUsuario",
                table: "Documento",
                column: "IdUsuario");

            migrationBuilder.CreateIndex(
                name: "IX_DocumentoVersoes_IdDocumento",
                table: "DocumentoVersoes",
                column: "IdDocumento");

            migrationBuilder.CreateIndex(
                name: "IX_Feedback_IdUsuario",
                table: "Feedback",
                column: "IdUsuario");

            migrationBuilder.CreateIndex(
                name: "IX_Regras_Doc_IdDocumento",
                table: "Regras_Doc",
                column: "IdDocumento");

            migrationBuilder.CreateIndex(
                name: "IX_Regras_Doc_IdRegras",
                table: "Regras_Doc",
                column: "IdRegras");

            migrationBuilder.CreateIndex(
                name: "IX_Req_Doc_IdDocumento",
                table: "Req_Doc",
                column: "IdDocumento");

            migrationBuilder.CreateIndex(
                name: "IX_Req_Doc_IdRequisito",
                table: "Req_Doc",
                column: "IdRequisito");

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_IdEmpresa",
                table: "Usuario",
                column: "IdEmpresa");

            migrationBuilder.CreateIndex(
                name: "IX_Usuario_IdTipoUsuario",
                table: "Usuario",
                column: "IdTipoUsuario");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Comentario");

            migrationBuilder.DropTable(
                name: "DocumentoVersoes");

            migrationBuilder.DropTable(
                name: "Feedback");

            migrationBuilder.DropTable(
                name: "Regras_Doc");

            migrationBuilder.DropTable(
                name: "Req_Doc");

            migrationBuilder.DropTable(
                name: "Suporte");

            migrationBuilder.DropTable(
                name: "Regras");

            migrationBuilder.DropTable(
                name: "Documento");

            migrationBuilder.DropTable(
                name: "Requisitos");

            migrationBuilder.DropTable(
                name: "Usuario");

            migrationBuilder.DropTable(
                name: "Empresa");

            migrationBuilder.DropTable(
                name: "TipoUsuario");
        }
    }
}
