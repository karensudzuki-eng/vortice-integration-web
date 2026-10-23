import { test, expect } from "@playwright/test";

test.describe("Navegación del sitio Vórtice Integration", () => {
  test("Página de inicio carga correctamente con la propuesta de valor", async ({ page }) => {
    await page.goto("/");

    // Verificar título y propuesta de valor
    await expect(page).toHaveTitle(/Vórtice Integration SpA/);
    await expect(
      page.getByRole("heading", {
        name: /La mayoría de las fallas no son técnicas/i,
      })
    ).toBeVisible();

    // CTA principal
    const ctaButton = page.getByRole("link", {
      name: /Agenda un diagnóstico de 45 minutos/i,
    }).first();
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute("href", "/diagnostico");

    // Verificar las tres tarjetas de líneas
    await expect(page.getByRole("heading", { name: "QA y automatización" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Diagnóstico de madurez" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Acompañamiento en transformación" })).toBeVisible();

    // Bloque de enfoque en 3 ideas sin jerga
    await expect(page.getByText(/Nuestro enfoque en tres ideas simples/i)).toBeVisible();

    // Bloque de casos (con política de confidencialidad real)
    await expect(page.getByText(/Casos de estudio y experiencias de campo/i)).toBeVisible();
    await expect(page.getByText(/En Vórtice operamos bajo estrictos acuerdos de confidencialidad/i)).toBeVisible();

    // Regla de negocio: consteladores.cl jamás debe figurar
    const content = await page.content();
    expect(content.toLowerCase()).not.toContain("consteladores.cl");
  });

  test("Navega hacia 'Sobre Vórtice' (/vortice)", async ({ page }) => {
    await page.goto("/vortice");
    await expect(page).toHaveTitle(/Sobre Vórtice/i);
    await expect(
      page.getByRole("heading", {
        name: /El marco Vórtice: mirar donde la técnica y lo humano se cruzan/i,
      })
    ).toBeVisible();

    // Frase de fondo
    await expect(
      page.getByText(/La tecnología es la vía para entrar al mundo corporativo y conectar con lo humano/i)
    ).toBeVisible();

    // Biografía real de la fundadora
    await expect(page.getByText(/Detrás del marco Vórtice/i)).toBeVisible();
    await expect(page.getByText(/Karen Sudzuki Toro/i)).toBeVisible();
    await expect(page.getByAltText(/Karen Sudzuki Toro/i)).toBeVisible();

    const content = await page.content();
    expect(content.toLowerCase()).not.toContain("consteladores.cl");
  });

  test("Navega hacia 'Diagnóstico' (/diagnostico)", async ({ page }) => {
    await page.goto("/diagnostico");
    await expect(page).toHaveTitle(/Diagnóstico de Madurez/i);
    await expect(
      page.getByRole("heading", {
        name: /Diagnóstico de madurez: miramos dónde se traba tu operación/i,
      })
    ).toBeVisible();

    // Espacio preparado termómetro fase 2
    await expect(
      page.getByText(/Termómetro de Madurez Sistémica/i)
    ).toBeVisible();
  });

  test("Navega hacia 'Acompañamiento' (/acompanamiento)", async ({ page }) => {
    await page.goto("/acompanamiento");
    await expect(page).toHaveTitle(/Acompañamiento en Transformación/i);

    // Advertencia ética explícita sobre no ser terapia
    await expect(
      page.getByRole("heading", {
        name: /Claridad y límite ético de nuestro servicio/i,
      })
    ).toBeVisible();
    await expect(
      page.getByText(/No es psicoterapia ni tratamiento de salud mental/i)
    ).toBeVisible();
  });

  test("Navega hacia 'Contacto' (/contacto)", async ({ page }) => {
    await page.goto("/contacto");
    await expect(page).toHaveTitle(/Contacto/i);
    await expect(
      page.getByRole("heading", {
        name: /Conversemos sobre tu equipo y tus desafíos/i,
      })
    ).toBeVisible();

    // Calendario real, correo y WhatsApp
    await expect(
      page.locator("#main-content").getByText(/contacto@vorticeintegration.com/i)
    ).toBeVisible();
    await expect(
      page.locator("#main-content").getByText(/karen.sudzuki@vorticeintegration.com/i)
    ).toBeVisible();
    await expect(
      page.locator("#main-content").getByText(/\+56 9 4193 9361/i)
    ).toBeVisible();
    await expect(page.getByText(/Google Calendar • Diagnóstico Vórtice/i)).toBeVisible();
  });

  test("Navega hacia 'Blog' (/blog - Fase 2)", async ({ page }) => {
    await page.goto("/blog");
    await expect(page).toHaveTitle(/Blog/i);
    await expect(
      page.getByRole("heading", {
        name: /Bitácora de campo: reflexiones sobre software y personas/i,
      })
    ).toBeVisible();
    await expect(page.getByText(/Espacio en preparación/i)).toBeVisible();
  });
});
