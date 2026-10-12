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

Sin configuración, el formulario abre el cliente de correo del visitante con el mensaje listo para `contacto@imaengineering.com.mx`.

Para recibir los mensajes directamente (sin que el visitante use su correo), crea un formulario en un servicio como Formspree y pega su URL en el atributo `data-endpoint` del `<form id="contact-form">` en `index.html`:

```html
<form class="contact-form" id="contact-form" ... data-endpoint="https://formspree.io/f/XXXXXXXX">
```

Si usas otro servicio, agrega su dominio a `connect-src` y `form-action` en `_headers`.

## Vista local

```bash
python3 -m http.server 8765
```

y abre http://localhost:8765
