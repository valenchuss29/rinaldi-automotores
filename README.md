# Rinaldi Automotores — catálogo público

Proyecto estático listo para publicar gratuitamente en Cloudflare Pages. Incluye las 24 unidades, galerías de fotografías, filtros, buscador y enlaces de contacto.

## Subir a GitHub

1. Creá un repositorio público llamado `rinaldi-automotores`.
2. Elegí **Add file → Upload files**.
3. Arrastrá todo el contenido de esta carpeta, no la carpeta cerrada.
4. Confirmá con **Commit changes**.

La raíz del repositorio debe mostrar: `assets`, `index.html`, `styles.css`, `script.js`, `package.json` y `README.md`.

## Publicar en Cloudflare Pages

1. Entrá en **Workers & Pages**.
2. En la opción **Looking to deploy Pages?**, elegí **Get started**.
3. Seleccioná **Connect to Git** y el repositorio `rinaldi-automotores`.
4. Configurá:
   - Production branch: `main`
   - Framework preset: `None`
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: vacío
5. Presioná **Save and Deploy**.

Cloudflare generará un enlace público similar a `https://rinaldi-automotores.pages.dev`.

## Cómo editar el stock

Los vehículos están en `script.js`, dentro de la lista `vehicles`. Las imágenes están en `assets`. Después de modificar un archivo y guardar el cambio en GitHub, Cloudflare vuelve a publicar automáticamente.

## Contacto configurado

- WhatsApp: 351 236-0132
- Dirección: Av. Bulnes 2238, Córdoba
- Instagram: @rinaldi_automotores
