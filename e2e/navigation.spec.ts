import { test, expect } from "@playwright/test";

test.describe("Navegación del sitio Vórtice Integration", () => {
  test("Página de inicio carga correctamente con la propuesta de valor y oferta", async ({ page }) => {
    await page.goto("/");

    // Verificar título y titular
    await expect(page).toHaveTitle(/Vórtice Integration/);
    await expect(
      page.getByRole("heading", {
        name: /Tu software sale sin QA\. Te ayudamos a ponerlo en marcha\./i,
      })
    ).toBeVisible();

    // CTA principal de levantamiento
    const ctaButton = page.getByRole("link", {
      name: /Agendar levantamiento de 30 min/i,
    }).first();
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute("href", "/levantamiento");

    // Texto de microcopia
    await expect(page.getByText(/Online • Gratis • Sin compromiso/i)).toBeVisible();

    // Sección "¿Te pasa alguno de estos?"
    await expect(page.getByRole("heading", { name: /¿Te pasa alguno de estos\?/i })).toBeVisible();
    await expect(page.getByText(/Los bugs aparecen en producción después de cada despliegue/i)).toBeVisible();
    await expect(page.getByText(/El desarrollador prueba a última hora/i)).toBeVisible();
    await expect(page.getByText(/Nadie en el equipo sabe con certeza qué está probado/i)).toBeVisible();

    // Sección "Qué hacemos"
    await expect(page.getByRole("heading", { name: "Qué hacemos" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Lineamientos" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Automatización" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Soporte", exact: true })).toBeVisible();

    // Sección "Cómo funciona"
    await expect(page.getByRole("heading", { name: "Cómo funciona" })).toBeVisible();

    // Sección "Precios"
    await expect(page.getByRole("heading", { name: "Precios" })).toBeVisible();
    await expect(page.getByText(/Precio especial para pymes\./i)).toBeVisible();

    // Sección "Para quién es y para quién no"
    await expect(page.getByRole("heading", { name: /Para quién es y para quién no/i })).toBeVisible();

    // CTA final en bloque negro
    await expect(page.getByRole("heading", { name: /Agenda tu levantamiento de 30 minutos\./i })).toBeVisible();

    // Verificación estricta: CERO menciones a términos prohibidos o marcas no autorizadas
    const content = await page.content();
    expect(content).not.toMatch(/Karen|Sudzuki|FALP|fundadora|consteladores\.cl/i);
  });

  test("Navega hacia 'Servicios' (/servicios)", async ({ page }) => {
    await page.goto("/servicios");
    await expect(page).toHaveTitle(/Servicios/i);
    await expect(
      page.getByRole("heading", {
        name: /Nuestros Servicios/i,
      })
    ).toBeVisible();

    // Lo que no ofrecemos
    await expect(page.getByRole("heading", { name: /Lo que no ofrecemos/i })).toBeVisible();
    await expect(
      page.locator("#main-content").getByText(/Para pruebas de carga y estrés, revisa qachile\.cl/i)
    ).toBeVisible();

    const content = await page.content();
    expect(content).not.toMatch(/Karen|Sudzuki|FALP|fundadora|consteladores\.cl/i);
  });

  test("Navega hacia 'Precios' (/precios)", async ({ page }) => {
    await page.goto("/precios");
    await expect(page).toHaveTitle(/Precios/i);
    await expect(
      page.getByRole("heading", {
        name: /Precios/i,
      })
    ).toBeVisible();

    await expect(page.getByText(/4\.000 USD/i)).toBeVisible();
    await expect(page.getByText(/Precio especial para pymes\./i)).toBeVisible();

    const content = await page.content();
    expect(content).not.toMatch(/Karen|Sudzuki|FALP|fundadora|consteladores\.cl/i);
  });

  test("Navega hacia 'Levantamiento' (/levantamiento)", async ({ page }) => {
    await page.goto("/levantamiento");
    await expect(page).toHaveTitle(/Levantamiento/i);
    await expect(
      page.getByRole("heading", {
        name: /Levantamiento QA de 30 minutos/i,
      })
    ).toBeVisible();

    // 3 puntos explicados
    await expect(page.getByText(/Cómo se prueba hoy:/i)).toBeVisible();
    await expect(page.getByText(/Dónde se rompe:/i)).toBeVisible();
    await expect(page.getByText(/Qué primer paso tiene sentido:/i)).toBeVisible();

    // Informe de 1 a 2 páginas
    await expect(page.getByText(/Informe escrito de 1 a 2 páginas/i)).toBeVisible();

    // Enlace a Google Calendar
    const calendarLink = page.getByRole("link", { name: /Google Calendar/i }).first();
    await expect(calendarLink).toHaveAttribute("href", /calendar\.app\.google/);

    const content = await page.content();
    expect(content).not.toMatch(/Karen|Sudzuki|FALP|fundadora|consteladores\.cl/i);
  });

  test("Redirecciones 301 de URLs antiguas hacia /levantamiento", async ({ page }) => {
    await page.goto("/diagnostico");
    await expect(page).toHaveURL(/.*\/levantamiento/);

    await page.goto("/acompanamiento");
    await expect(page).toHaveURL(/.*\/levantamiento/);
  });

  test("Navega hacia 'Contacto' (/contacto)", async ({ page }) => {
    await page.goto("/contacto");
    await expect(page).toHaveTitle(/Contacto/i);
    await expect(
      page.getByRole("heading", {
        name: /Contacto/i,
      })
    ).toBeVisible();

    // Correo institucional
    await expect(page.locator("#main-content").getByText(/contacto@vorticeintegration\.com/i)).toBeVisible();

    // WhatsApp con solo icono (sin número telefónico visible en el texto)
    const whatsappLink = page.locator('a[href*="wa.me"]').first();
    await expect(whatsappLink).toBeVisible();
    await expect(whatsappLink).toHaveAttribute("href", /wa\.me\/56941939361/);

    // No debe aparecer el número escrito como texto en la página
    const content = await page.content();
    expect(content).not.toContain("+56 9 4193 9361");
    expect(content).not.toContain("+56941939361");
    expect(content).not.toMatch(/Karen|Sudzuki|FALP|fundadora|consteladores\.cl/i);
  });
});
