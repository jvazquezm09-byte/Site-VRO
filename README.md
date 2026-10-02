# Site-VRO

Sitio estático (`index.html`, `script.js`, `styles.css`), servido a través de Cloudflare.

## Acceso restringido a la red corporativa

El código del sitio no restringe el acceso: la restricción se aplica en Cloudflare, no en el repositorio.

### Opción A: regla WAF por IP (recomendada si hay IP pública fija)

1. Cloudflare → dominio → **Security → WAF → Custom rules → Create rule**.
2. Expresión (reemplazar dominio e IPs por los de la empresa):
   ```
   (http.host eq "sitio.ejemplo.com" and not ip.src in {203.0.113.10 198.51.100.0/24})
   ```
3. Acción: **Block**. Guardar y desplegar.

Quien no llegue desde esas IPs recibe un 403.

### Opción B: Cloudflare Access (si no hay IP fija o hay trabajo remoto sin VPN)

1. **Zero Trust → Access → Applications → Add an application → Self-hosted**.
2. Agregar una política que permita el rango de IP corporativo o exija inicio de sesión con correo del dominio de la empresa.
3. Gratis hasta 50 usuarios.

### Notas

- Si el sitio está en Cloudflare Pages, la URL `*.pages.dev` también es pública: hay que restringirla (con Access) o deshabilitarla, y usar un dominio propio al que apliquen las reglas.
- `index.html` carga Tailwind, Google Fonts y Material Symbols desde CDNs públicos. Si la red corporativa bloquea Internet externo, esos recursos deben alojarse localmente.
- Si el sitio se muda a otro hosting, la restricción debe repetirse allí (servidor interno con `allow/deny`, WAF de la nube, etc.), porque no vive en el código.

### Cuando el sitio consuma datos de una fuente externa

Hoy `script.js` no hace llamadas externas. Cuando las haga:

- Proteger solo el sitio no protege los datos: la API o fuente de datos debe restringirse por separado (misma allowlist de IP o autenticación), porque se puede consultar directamente sin pasar por el sitio.
- Lo ideal es que sitio y API queden bajo la misma regla (por ejemplo, ambos detrás de Cloudflare con la misma regla WAF o política de Access).
- No poner llaves ni credenciales en `script.js`: cualquiera que abra el sitio puede verlas. Si la fuente requiere llave, la llamada debe pasar por un backend o proxy.

### Datos que se necesitan de TI

- Rango(s) de IP pública de salida (oficina y VPN) y el dominio exacto del sitio. TODO luisfer
