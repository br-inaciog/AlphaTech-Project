// src/components/documento/Documento.jsx
import "./Documento.css";
import { Document, Page } from "react-pdf";
import { useState } from "react";

export default function Documento({ pdfFile, ocrData }) {
  const [pageSize, setPageSize] = useState({ width: 1, height: 1 });
  const [pageNumber, setPageNumber] = useState(1);

  if (!ocrData || !ocrData.Paginas) return <p>Carregando OCR...</p>;

  const pageData = ocrData.Paginas.find(p => p.Numero === pageNumber);

  const nextPage = () => {
    if (pageNumber < ocrData.Paginas.length) setPageNumber(pageNumber + 1);
  };
  const prevPage = () => {
    if (pageNumber > 1) setPageNumber(pageNumber - 1);
  };

  return (
    <div className="documento-container">
      <div className="pdf-container">
        <Document file={pdfFile}>
          <Page
            pageNumber={pageNumber}
            width={600}
            onLoadSuccess={(page) =>
              setPageSize({ width: page.width, height: page.height })
            }
          />
        </Document>

        {/* Overlay OCR */}
        {pageData?.Linhas.map((linha, i) => {
          const scaleX = pageSize.width / pageData.Largura;
          const scaleY = pageSize.height / pageData.Altura;

          const x = linha.BoundingBox[0].X * scaleX;
          const y = linha.BoundingBox[0].Y * scaleY;
          const width = (linha.BoundingBox[1].X - linha.BoundingBox[0].X) * scaleX;
          const height = (linha.BoundingBox[3].Y - linha.BoundingBox[0].Y) * scaleY;

          return (
            <div
              key={i}
              className="ocr-highlight"
              style={{
                left: x,
                top: y,
                width,
                height,
              }}
              title={linha.Texto}
            ></div>
          );
        })}
      </div>

      {/* Navegação entre páginas */}
      {ocrData.Paginas.length > 1 && (
        <div className="page-controls">
          <button onClick={prevPage} disabled={pageNumber === 1}>◀</button>
          <span>Página {pageNumber} de {ocrData.Paginas.length}</span>
          <button onClick={nextPage} disabled={pageNumber === ocrData.Paginas.length}>▶</button>
        </div>
      )}
    </div>
  );
}