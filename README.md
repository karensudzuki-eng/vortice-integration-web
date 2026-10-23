# Vórtice Integration Holding SpA

Sitio institucional y plataforma de generación de leads calificados de **Vórtice Integration Holding SpA**, marca madre de un grupo de servicios de calidad de software, transformación organizacional y diagnóstico sistémico para empresas y pymes en Chile.

> **Propuesta de Valor Central:**  
> *"La mayoría de las fallas no son técnicas: están en cómo las personas y los sistemas se encuentran."*

El sitio presenta la empresa, su marco de trabajo y sus líneas de acción. **No vende servicios de QA directamente**: esos se canalizan a través de su marca de servicio [QA Chile (qachile.cl)](https://qachile.cl), la cual se enlaza en nueva pestaña en todas las secciones correspondientes.

- **Razón Social:** Vórtice Integration Holding SpA
- **RUT:** 78.377.882-3
- **Fundadora y Dirección:** Karen Sudzuki Toro
- **Correos:** `contacto@vorticeintegration.com` | `karen.sudzuki@vorticeintegration.com`
- **WhatsApp:** `+56 9 4193 9361`
- **Agenda Directa (Google Calendar):** [https://calendar.app.google/8JfEzcRHRZGKMaHx9](https://calendar.app.google/8JfEzcRHRZGKMaHx9)

---

## 🛠️ Stack Tecnológico

- **Frontend & Backend**: Next.js 14 (App Router) + TypeScript + React 18
- **Estilos & Diseño**: Tailwind CSS (paleta sobria, alto contraste WCAG AA, responsive)
- **Iconografía**: Lucide React
- **Base de Datos**: Supabase (PostgreSQL) con Row Level Security (RLS)
- **Automatización & Notificaciones**: Webhook a n8n (notificación por correo ante nuevos leads)
- **Pruebas End-to-End**: Playwright (escritorio y móvil), dockerizadas
- **Integración Continua**: GitHub Actions (`.github/workflows/playwright.yml`) en cada push a `main`
- **Deploy**: Vercel

---

## 📂 Estructura del Proyecto

```text
├── .github/
│   └── workflows/
│       └── playwright.yml         # CI/CD: pruebas Playwright dockerizadas en cada push a main
├── e2e/
│   ├── accessibility.spec.ts     # Pruebas de roles, landmarks, saltos y contrastes
│   ├── external-links.spec.ts    # Verificación de target="_blank" y rel seguro en qachile.cl
│   ├── lead-forms.spec.ts        # Pruebas de envío y validación de formularios y API
│   └── navigation.spec.ts        # Pruebas de navegación, títulos y ausencia de marcas no autorizadas
├── src/
│   ├── app/
│   │   ├── acompanamiento/       # Página: Acompañamiento en transformación (/acompanamiento)
│   │   ├── api/
│   │   │   └── leads/            # Endpoint POST /api/leads (guarda en Supabase y dispara webhook n8n)
│   │   ├── blog/                 # Página: Blog y publicaciones Fase 2 (/blog)
│   │   ├── contacto/             # Página: Formulario de contacto y agenda (/contacto)
│   │   ├── diagnostico/          # Página: Diagnóstico de madurez de 45 min (/diagnostico)
│   │   ├── vortice/              # Página: Sobre el marco Vórtice y principios (/vortice)
│   │   ├── globals.css           # Estilos globales y reglas de accesibilidad
│   │   ├── icon.svg              # Favicon SVG vectorial
│   │   ├── layout.tsx            # Layout raíz con Navbar, Footer y metadata SEO
│   │   ├── page.tsx              # Página de Inicio (/)
│   │   ├── robots.ts             # Generador de robots.txt
│   │   └── sitemap.ts            # Generador dinámico de sitemap.xml
│   ├── components/
│   │   ├── CtaSection.tsx        # Bloque reutilizable de llamada a la acción
│   │   ├── DiagramSystem.tsx     # Diagrama visual SVG del marco sistémico Vórtice
│   │   ├── Footer.tsx            # Pie de página institucional y legal
│   │   ├── LeadForm.tsx          # Formulario accesible con validación y agendamiento
│   │   ├── LineCard.tsx          # Tarjeta reutilizable de línea de servicio
│   │   └── Navbar.tsx            # Barra de navegación accesible para móvil y escritorio
│   └── lib/
│       ├── supabase.ts           # Cliente seguro de Supabase
│       └── types.ts              # Tipos TypeScript compartidos (Lead, Líneas, Rubros)
├── supabase/
│   └── schema.sql                # Script SQL de creación de tabla 'leads' e índices
├── Dockerfile                    # Entorno reproducible para pruebas Playwright
├── playwright.config.ts          # Configuración de Playwright para Chromium y Mobile Chrome
└── package.json
```

---

## ⚙️ Variables de Entorno

Copia el archivo de ejemplo para configurar tu entorno local:

```bash
cp .env.example .env.local
```

Configura las siguientes variables en `.env.local`:

| Variable | Descripción | Requerido en Prod |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SUPABASE_URL` | URL de tu proyecto en Supabase (ej: `https://xyz.supabase.co`) | Sí |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Clave pública anon de Supabase | Sí |
| `SUPABASE_SERVICE_ROLE_KEY` | Clave privada Service Role para inserción segura en servidor | Recomendado |
| `N8N_WEBHOOK_URL` | URL del Webhook en n8n que despacha el correo de notificación | Sí |
| `NEXT_PUBLIC_SITE_URL` | URL canónica del sitio (ej: `https://vorticeintegration.com`) | Sí |

> **Nota:** La aplicación cuenta con modo de demostración local tolerante a fallos: si las variables de Supabase o n8n están ausentes o son placeholders, la UI y la API seguirán respondiendo de manera fluida y simulada sin colapsar.

---

## 🗄️ Configuración de Supabase (Base de Datos)

1. Ingresa a tu proyecto en [Supabase](https://supabase.com).
2. Abre la pestaña **SQL Editor**.
3. Pega y ejecuta el contenido del archivo `supabase/schema.sql`:

```sql
create table if not exists public.leads (
    id uuid primary key default gen_random_uuid(),
    nombre text not null,
    empresa text not null,
    cargo text not null,
    rubro text not null,
    tamano_empresa text not null,
    mensaje text not null,
    linea_interes text not null,
    fecha timestamp with time zone default timezone('utc'::text, now()) not null
);

create index if not exists idx_leads_fecha on public.leads (fecha desc);
alter table public.leads enable row level security;

create policy "Permitir inserción de leads"
    on public.leads
    for insert
    to anon, authenticated, service_role
    with check (true);
```

---

## ⚡ Automatización con n8n (Webhook y Correo)

Cada vez que un prospecto envía un formulario en `/contacto` o `/diagnostico`, Next.js realiza un `POST` al endpoint configurado en `N8N_WEBHOOK_URL` con la siguiente carga JSON:

```json
{
  "event": "lead.created",
  "leadId": "lead-1729609200000",
  "lead": {
    "nombre": "Francisca Lagos",
    "empresa": "TecnoAndes SpA",
    "cargo": "Gerente de Operaciones",
    "rubro": "Servicios Financieros / Fintech",
    "tamano_empresa": "51 a 200 personas",
    "linea_interes": "Diagnóstico de madurez organizacional",
    "mensaje": "Tenemos incidentes repetitivos en las puestas a producción...",
    "fecha": "2026-10-22T15:30:00.000Z"
  },
  "dispatchedAt": "2026-10-22T15:30:01.000Z"
}
```

### Configuración en n8n:
1. Crea un nodo **Webhook** (Método: `POST`, Path: `/webhook/vortice-lead-notification`).
2. Conecta un nodo **Send Email** (Gmail, Outlook o SMTP) dirigido a `contacto@vorticeintegration.com` o a la casilla de la fundadora.
3. Asunto sugerido: `[Nuevo Lead Vórtice] {{ $json.body.lead.empresa }} - {{ $json.body.lead.linea_interes }}`.

---

## 🚀 Instalación y Ejecución Local

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/vortice-integration/vortice-web.git
   cd vortice-web
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
   Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

4. Compilar para producción localmente:
   ```bash
   npm run build
   npm run start
   ```

---

## 🧪 Pruebas End-to-End con Playwright

El proyecto incluye 28 pruebas automáticas que validan:
- Navegación íntegra entre páginas y verificación de la propuesta de valor.
- Ausencia estricta de referencias o enlaces a marcas ajenas (como `consteladores.cl`).
- Enlaces a `qachile.cl` con `target="_blank"` y `rel="noopener noreferrer"`.
- Flujo completo de captura de leads con mocks de backend.
- Accesibilidad semántica, roles ARIA, etiquetas asociadas a campos y textos descriptivos en diagramas.

### Ejecución en máquina local:
```bash
# Ejecutar todas las pruebas en modo headless (Chromium y Mobile Chrome)
npm run test:e2e

# Modo interactivo UI
npm run test:e2e:ui
```

### Ejecución dockerizada:
```bash
# Construir imagen con dependencias y navegadores incluidos
docker build -t vortice-playwright-e2e .

# Ejecutar las pruebas dentro del contenedor
docker run --rm vortice-playwright-e2e
```

---

## ☁️ Deploy en Vercel

1. Sube el código a tu repositorio de GitHub (`main`).
2. Conecta el repositorio en el panel de [Vercel](https://vercel.com).
3. Vercel detectará automáticamente **Next.js**.
4. En la sección **Environment Variables**, agrega:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`
   - `N8N_WEBHOOK_URL`
   - `NEXT_PUBLIC_SITE_URL` (ej. `https://vorticeintegration.com`)
5. Haz clic en **Deploy**. Cada push subsiguiente a `main` correrá las pruebas en GitHub Actions y desplegará la versión a producción.

---

## 🧩 Componentes Reutilizables

1. **`LineCard` (`src/components/LineCard.tsx`)**:
   Representa las 3 líneas de servicio del grupo. Soporta enlaces externos (como `qachile.cl` con atributos seguros y badge de servicio) o rutas internas hacia diagnóstico y acompañamiento.

2. **`LeadForm` (`src/components/LeadForm.tsx`)**:
   Formulario interactivo y accesible (`<form>`, labels con `htmlFor`, validaciones, feedback con `role="alert"` y `role="status"`). Permite preseleccionar la línea de interés y muestra tras el envío el botón directo al calendario de agendamiento.

3. **`CtaSection` (`src/components/CtaSection.tsx`)**:
   Bloque de llamado a la acción destacado para los cierres de página, orientando la conversación hacia la sesión de 45 minutos.

4. **`DiagramSystem` (`src/components/DiagramSystem.tsx`)**:
   Diagrama vectorial SVG con roles semánticos y textos accesibles que sustituye fotografías de stock genéricas por una representación visual genuina del cruce entre personas, procesos y código.
