using CollabTechFile.DbContextCollab;
using CollabTechFile.Interfaces;
using CollabTechFile.Repositories;
using Microsoft.EntityFrameworkCore;
using CollabTechFile.Services;

var builder = WebApplication.CreateBuilder(args);



// Add services to the container.
builder.Services.AddControllers()
    .AddJsonOptions(x =>
        x.JsonSerializerOptions.ReferenceHandler = System.Text.Json.Serialization.ReferenceHandler.IgnoreCycles);


builder.Services.AddScoped<OCRService>();
builder.Services.AddScoped<IUsuarioRepository, UsuarioRepository>();
builder.Services.AddScoped<IReqDocRepository, ReqDocRepository>();
builder.Services.AddScoped<IRegrasDocRepository, RegrasDocRepository>();
builder.Services.AddScoped<ISuporteRepository, SuporteRepository>();
builder.Services.AddScoped<IDocumentoRepository, DocumentoRepository>();
builder.Services.AddScoped<IComentarioRepository, ComentarioRepository>();
builder.Services.AddScoped<IRequisitoRepository, RequisitoRepository>();
builder.Services.AddScoped<IRegraRepository, RegraRepository>();
builder.Services.AddScoped<ITipoUsuarioRepository, TipoUsuarioRepository>();
builder.Services.AddScoped<IEmpresaRepository, EmpresaRepository>();
builder.Services.AddDbContext<CollabTechFileContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
