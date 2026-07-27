# Análisis fundamental — estado de la tesis

Página de lectura del sistema de tesis de inversión vivas. Estática, un solo
archivo, sin dependencias externas. Publica el estado de los supuestos sobre
Alphabet (GOOGL), la valoración por escenarios y el resultado del backtest.

Live: **https://analysis.pampaiter.com**

```
analisis-web/
├── index.html      # la página entera: CSS y JS en línea, sin assets externos
├── CNAME           # analysis.pampaiter.com
├── robots.txt
└── sitemap.xml
```

## Por qué un solo archivo

No hay CDN, ni fuentes remotas, ni peticiones de red de ningún tipo: todo va
en línea. Eso hace que la página funcione abierta como archivo local, servida
por Pages, o incrustada donde sea, sin romperse.

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

Toda cifra viene de documentos presentados ante la SEC (10-K FY2025, 10-Q
Q2 2026, 8-K, DEF 14A, Forms 3/4/5) o de series XBRL de SEC EDGAR. El
repositorio que las produce es privado; esta web es solo la capa de lectura.

## Despliegue

GitHub Pages desde `main`, sin build. `git push` y en ~1 minuto está live.

## Alcance

Genera análisis, no asesoramiento. La salida es el estado de un conjunto de
supuestos y un rango de valoración por escenario con hipótesis explícitas —
no una recomendación de compra o venta.
