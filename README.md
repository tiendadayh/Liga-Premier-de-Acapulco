# Liga Premier de Acapulco - Sitio Oficial

Sitio web de la liga con 3 páginas:
- `index.html` — sitio público (tabla de posiciones, jugadores, partidos, etc.)
- `admin.html` — panel de administración
- `arbitro.html` — panel para árbitros

Los datos se guardan en **Firebase Realtime Database**, así que cualquier
cambio hecho en `admin.html` o `arbitro.html` se refleja automáticamente
y en tiempo real en `index.html` para cualquier persona que la visite,
en cualquier dispositivo.

## Antes de publicar

1. Sigue las instrucciones que Claude te dio para crear tu proyecto de
   Firebase y obtener tu `firebaseConfig`.
2. Pega esos datos dentro de `firebase-config.js`.
3. (Recomendado) En Firebase, ve a Realtime Database > Reglas, y ajusta
   los permisos de lectura/escritura antes de que termine el modo de
   prueba de 30 días.

## Subir a GitHub Pages (sitio en vivo y gratis)

1. Entra a https://github.com e inicia sesión (o crea una cuenta).
2. Da clic en el botón verde **New** (o el ícono **+** > **New repository**).
3. Ponle un nombre, por ejemplo `liga-premier-acapulco`. Déjalo en
   **Public**. No marques ningún checkbox extra. Da clic en
   **Create repository**.
4. En la página del repositorio recién creado, da clic en
   **uploading an existing file** (o **Add file > Upload files**).
5. Arrastra los 4 archivos: `index.html`, `admin.html`, `arbitro.html`
   y `firebase-config.js` (ya con tus datos de Firebase pegados).
6. Escribe un mensaje corto como "primera versión" y da clic en
   **Commit changes**.
7. Ve a la pestaña **Settings** del repositorio > **Pages** (menú
   izquierdo).
8. En **Branch**, selecciona `main` y la carpeta `/ (root)`. Da clic
   en **Save**.
9. Espera 1-2 minutos y recarga la página. GitHub te mostrará tu
   enlace público, algo como:
   `https://TU-USUARIO.github.io/liga-premier-acapulco/`

Ese enlace es tu sitio en vivo. Compártelo con jugadores, árbitros y
aficionados. Cada vez que subas cambios a los archivos en GitHub
(otro "Upload files" o "Commit"), el sitio se actualiza solo en unos
minutos.

## Actualizar el sitio después

Cuando quieras cambiar el código (no los datos, esos ya se sincronizan
solos con Firebase): entra al repositorio en GitHub, abre el archivo
que quieras editar, da clic en el ícono de lápiz (Edit), haz tus
cambios y da clic en **Commit changes**. GitHub Pages lo publica
automáticamente.
