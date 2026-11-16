# Guía del primer importador · InnovationsMX

Sitio estático (HTML, CSS y JavaScript, sin compilar). Funciona en cualquier hosting de archivos estáticos.

## Estructura

```
index.html   → página completa (diseño, pasos y lógica)
datos.js     → TODOS los datos editables (contacto, tarifas, top 3, ejemplos)
img/         → fotos de categorías y ejemplos (Unsplash, licencia libre) y logo
README.md    → este archivo
```

## Editar datos

Abre `datos.js` con cualquier editor de texto (VS Code, Bloc de notas). Está dividido en 5 secciones numeradas:

1. **Contacto**: WhatsApp y correo que reciben las cotizaciones.
2. **Categorías**: nombre y palabra de ejemplo. La foto es `img/<clave>.jpg`.
3. **Países y tarifas**: tipo de cambio, USD por CBM, RMB por kg, IVA y si la tarifa es "todo incluido".
4. **Top 3 de Amazon** por categoría (México y España).
5. **Ejemplos del paso 4**: precio de fábrica, medidas, peso y precio de venta. Las ganancias se recalculan solas.

Para cambiar una foto, reemplaza el archivo en `img/` con el mismo nombre (formato JPG, 4:3, unos 600 px de ancho).

El WhatsApp y el correo también aparecen escritos en `index.html` (pie de página y caja de contacto): busca `1693 1100` y `innovationsmx.client` para cambiarlos.

## Publicar en internet

### Opción A · Netlify Drop (la más rápida, sin código)
1. Entra a https://app.netlify.com/drop
2. Arrastra la carpeta completa del proyecto.
3. Netlify te da una dirección; en *Site settings → Domain management* puedes poner tu dominio (por ejemplo `guia.innovationsmx.com`).

### Opción B · GitHub + Vercel (recomendada para programadores)
1. Crea un repositorio en GitHub y sube todos los archivos.
2. En https://vercel.com → *Add New → Project* → importa el repositorio.
3. Framework preset: **Other**. Sin comando de build. Output directory: la raíz.
4. Cada cambio que se suba a GitHub se publica solo.

### Opción C · GitHub Pages
Repositorio → *Settings → Pages* → Branch `main`, carpeta `/root`.

## Qué cambia fuera de Claude

Dentro de Claude la página usa dos funciones de la plataforma que no existen en un hosting normal:

| Función | En Claude | En Vercel/Netlify |
|---|---|---|
| Leer la captura de 1688 automáticamente | Sí | No: el cliente escribe los datos en "Ajustes" |
| Lista de interesados guardada en la página | Sí | No |
| Enviar cotización por WhatsApp y correo | Sí | Sí |
| Agendar en Google Calendar | Sí | Sí |
| Calculadora, ejemplos, enlaces | Sí | Sí |

La página detecta sola si estas funciones están disponibles y oculta lo que no funciona.

### Para recuperar esas funciones (tarea de programación)
- **Lectura de captura**: una función serverless (Vercel Functions o Netlify Functions) que reciba la imagen y llame a la API de Anthropic con el mismo prompt que está en `index.html` (busca `Lee esta captura`). La API key va en variables de entorno, nunca en el código del navegador.
- **Interesados**: enviar el formulario a Formspree, Google Sheets (Apps Script), Airtable o una base propia, además del WhatsApp/correo.

## Notas técnicas
- Íconos: Lucide 0.468.0 desde unpkg. Fuentes: Google Fonts (Exo 2, IBM Plex Sans, IBM Plex Mono).
- Navegación por hash: `#mercado`, `#fabrica`, `#costo`, `#ejemplos`, `#asesoria`.
- Precios y tipos de cambio de referencia al 16 nov 2026: actualízalos en `datos.js`.
