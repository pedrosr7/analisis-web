# Análisis fundamental — tesis de inversión vivas

Capa de lectura del sistema de análisis fundamental. Estática, sin build.
Publica el estado de los supuestos de cada empresa, la valoración por
escenarios y el resultado del backtest.

Live: **https://analysis.pampaiter.com**

```
analisis-web/
├── index.html          # índice: tesis vivas, alta de empresa, banquillo
├── googl/index.html    # tesis de Alphabet
├── assets/
│   ├── base.css        # sistema de diseño, compartido por todas las páginas
│   ├── app.js          # selector de tema + tooltips de los gráficos
│   └── tickers.json    # mapa ticker → CIK de la SEC (10 432 empresas)
├── CNAME               # analysis.pampaiter.com
├── robots.txt
└── sitemap.xml
```

Al añadir una empresa: crear `TICKER/index.html` (copiar la estructura de
`googl/`), añadir su tarjeta en el índice y su URL en `sitemap.xml`.

## Qué hace el formulario de alta — y qué no

Escribes un ticker y la página resuelve su CIK contra el mapa empaquetado,
consulta SEC EDGAR en vivo y te dice si la empresa existe, su sector, su
mercado y el último documento de cada tipo que ha presentado. Con eso genera
los comandos exactos para dar de alta la empresa en el repositorio de
análisis.

**No ejecuta el análisis.** No hay backend: la ingesta y el motor de
valoración son Python y corren en local. La web es capa de lectura y
lanzadera, nada más — la tesis y los supuestos se escriben a mano, que es
donde se decide si el sistema tiene criterio.

Dos límites heredados de la fuente:

- Solo cubre emisores que reportan a la SEC. Si el ticker es un ADR o un
  emisor extranjero que presenta 20-F en vez de 10-K, la página lo detecta
  y lo advierte.
- El mapa `tickers.json` va empaquetado porque `www.sec.gov` no permite
  peticiones CORS desde el navegador. `data.sec.gov` sí, y de ahí sale el
  resto en vivo. Conviene regenerarlo de vez en cuando desde
  `https://www.sec.gov/files/company_tickers.json`.

## Sistema de diseño

- **Color:** papel de listado contable (*greenbar*) — el sustrato histórico
  del dato financiero impreso. Tinta abeto `#141A15` sobre papel `#EDF0E9`.
  Estado vigente en verde abeto `#1F7D4F`, roto en rojo de libro mayor
  `#A32E28` — «números en rojo» es vernáculo propio del tema.
- **Series de datos:** petróleo `#0F6491` + ocre `#C87A05`, validadas para
  daltonismo (protanopía, deuteranopía, tritanopía) en ambos temas.
- **Tipografía:** dos voces, sin sans. Serif (Iowan Old Style / Palatino /
  Georgia) para lo que se argumenta; monoespaciada para lo que se mide. Todo
  número en cifras tabulares. Fuentes del sistema, cero descargas.
- **Temas:** claro y oscuro, ambos diseñados (no un inverso automático).
  Sigue `prefers-color-scheme` y el visitante puede alternar; la elección se
  guarda en `localStorage`.

## Origen de los datos

Toda cifra viene de documentos presentados ante la SEC (10-K, 10-Q, 8-K,
DEF 14A, Forms 3/4/5) o de series XBRL de SEC EDGAR. El repositorio que las
produce es privado; este solo publica el resultado.

## Despliegue

GitHub Pages desde `main`, sin build. `git push` y en ~1 minuto está live.

## Alcance

Genera análisis, no asesoramiento. La salida es el estado de un conjunto de
supuestos y un rango de valoración por escenario con hipótesis explícitas —
no una recomendación de compra o venta.
