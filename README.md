# Vórtice Integration Holding SpA

Plataforma institucional de **Vórtice Integration Holding SpA** (`www.vorticeintegration.cl`), especializada en la **puesta en marcha de áreas de calidad de software (QA) y automatización** para empresas medianas (aprox. 30 a 200 personas) y pymes en Chile con productos activos en producción.

> **Propuesta Central:**  
> *"Tu software sale sin QA. Te ayudamos a ponerlo en marcha."*  
> *"Para empresas medianas que quieren dejar de probar a última hora. Empiezas con un levantamiento de 30 minutos, gratuito y sin compromiso."*

- **Razón Social:** Vórtice Integration Holding SpA
- **RUT:** 78.377.882-3
- **Ubicación:** Santiago de Chile
- **Correo Institucional:** `contacto@vorticeintegration.com`
- **WhatsApp Directo:** Enlace a través del ícono institucional
- **Agenda de Disponibilidad:** [Google Calendar (30 min)](https://calendar.app.google/8JfEzcRHRZGKMaHx9)

---

## 🛠️ Oferta de Servicios

1. **Levantamiento QA (Gratuito · 30 min)**:
   - Sesión online técnica de 30 minutos sin costo ni compromiso.
   - Diagnóstico del flujo actual de pruebas y entrega de informe escrito de 1 a 2 páginas con estado actual y primeros pasos.
2. **Puesta en Marcha QA Básico (10 días hábiles)**:
   - Lineamientos de pruebas, plan y matriz de regresión, automatización de flujos críticos e integración en CI/CD.
   - Precio: Desde 4.000 USD + IVA (Pymes desde 3.400 USD + IVA).
3. **Soporte Mensual (20 horas/mes)**:
   - Mantenimiento de pruebas automáticas, revisión de cobertura y apoyo técnico en despliegues.
   - Precio: Desde 1.000 USD + IVA al mes (Pymes desde 850 USD + IVA).

*Lo que no ofrecemos:* Pruebas masivas de carga y estrés (recomendamos [qachile.cl](https://qachile.cl)), empresas con más de 5 QA internos, ni venta de horas sueltas sin estructurar procesos.

---

## 📂 Stack Tecnológico

- **Framework**: Next.js 14 (App Router) + TypeScript + React 18
- **Estilos**: Tailwind CSS (sistema brutalist editorial Dayos: canvas `#e5e5e5`, tarjetas `#ffffff` radio 32px, bloque invertido `#000000`, pastillas mint `#d1ffca`, sin fotos de stock)
- **Tipografía**: Bebas Neue (display condensado mayúsculas) + Inter (cuerpo 16px)
- **Iconografía**: Lucide React
- **Base de Datos**: Supabase (PostgreSQL) con Row Level Security (RLS)
- **Automatización**: Webhook a n8n para notificación por correo de nuevos leads
- **Pruebas End-to-End**: Playwright (escritorio y móvil), dockerizadas
- **CI/CD**: GitHub Actions (`.github/workflows/playwright.yml`) en cada push a `main`

---

## ⚙️ Variables de Entorno

Copiar `.env.example` a `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://tu-proyecto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu-anon-key
SUPABASE_SERVICE_ROLE_KEY=tu-service-role-key
N8N_WEBHOOK_URL=https://n8n.tu-dominio.com/webhook/vortice-lead
NEXT_PUBLIC_SITE_URL=https://vorticeintegration.cl
```

---

## 🚀 Instalación y Pruebas

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Ejecutar pruebas Playwright
npm run test:e2e
```
