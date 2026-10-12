# www-imaengineering-com-mx

Sitio oficial de IMA Engineering — https://www.imaengineering.com.mx

Sitio estático (HTML, CSS y JavaScript sin dependencias ni paso de compilación), publicado con Cloudflare desde la rama `main`.

## Estructura

| Archivo | Uso |
|---|---|
| `index.html` | Página principal (español; el inglés se aplica con JS) |
| `assets/css/styles.css` | Estilos |
| `assets/js/app.js` | Menú móvil, idioma ES/EN, autoevaluación NIST CSF 2.0 y formulario |
| `assets/fonts/` | Inter y JetBrains Mono alojadas localmente (licencia SIL OFL) |
| `aviso-de-privacidad` | Aviso de privacidad |
| `404.html` | Página de error |
| `.well-known/security.txt` | Contacto para divulgación responsable (renovar `Expires` antes de que venza) |
| `_headers` | Encabezados de seguridad (CSP, HSTS, etc.) para Cloudflare Pages |
| `robots.txt`, `sitemap.xml`, `favicon.svg`, `apple-touch-icon.png`, `og-image.png` | SEO y vistas previas |

## Formulario de contacto

El formulario envía los datos a un script de Google Apps Script en la cuenta de Google Workspace, que guarda cada mensaje en una hoja de Google Sheets y manda un aviso a `contacto@imaengineering.com.mx` (con "Responder a" al visitante).

- La URL del script va en el atributo `data-endpoint` del `<form id="contact-form">` en `index.html`.
- Si `data-endpoint` está vacío, el formulario abre el cliente de correo del visitante con el mensaje listo.
- El código del script no se publica en este repositorio; se edita desde Extensiones → Apps Script en la hoja de cálculo.
- Si cambias de servicio, actualiza `connect-src` en `_headers`.

## Vista local

```bash
python3 -m http.server 8765
```

y abre http://localhost:8765
