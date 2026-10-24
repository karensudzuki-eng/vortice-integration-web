import { test, expect } from "@playwright/test";

test.describe("Navegación del sitio Vórtice Integration", () => {
  test("Página de inicio carga correctamente con la propuesta de valor y los dos caminos", async ({ page }) => {
    await page.goto("/");

    // Verificar título y titular con problema y beneficio en una frase
    await expect(page).toHaveTitle(/Vórtice Integration \| Puesta en marcha de QA/i);
    await expect(
      page.getByRole("heading", {
        name: /Tu software sale a producción sin pruebas sistemáticas/i,
      })
    ).toBeVisible();

    // CTA único principal de levantamiento
    const ctaButton = page.getByRole("link", {
      name: /Agendar levantamiento gratuito de 30 min/i,
    }).first();
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveAttribute("href", "/levantamiento");

    // Dos caminos visibles
    await expect(page.getByText(/Tengo software en producción/i)).toBeVisible();
    await expect(page.getByText(/Soy e-commerce/i)).toBeVisible();
    await expect(page.locator('a[href*="qachile.cl"]').first()).toBeVisible();

    // Etiqueta obligatoria: demo ilustrativa en terminal
    await expect(page.getByText(/demo ilustrativa/i)).toBeVisible();

    // Sección "¿Te pasa alguno de estos dolores?"
    await expect(page.getByRole("heading", { name: /¿Te pasa alguno de estos/i })).toBeVisible();
    await expect(page.getByText(/Bugs después de cada despliegue/i)).toBeVisible();
    await expect(page.getByText(/Pruebas manuales a última hora/i)).toBeVisible();
    await expect(page.getByText(/Incertidumbre sobre qué está probado/i)).toBeVisible();

    // Sección "Qué hacemos"
    await expect(page.getByRole("heading", { name: /Qué hacemos/i })).toBeVisible();

    // Sección "Para quién sí / Para quién no"
    await expect(page.getByRole("heading", { name: /Para quién sí \/ Para quién no/i })).toBeVisible();

    // Sección Metodología Vórtice
    await expect(page.getByRole("heading", { name: /Metodología Vórtice/i })).toBeVisible();

    // Precios en CLP (sin mención de USD)
    const content = await page.content();
    expect(content).toContain("CLP");
    expect(content).not.toMatch(/\bUSD\b|\b\$\s*\d+\s*USD\b/i);

    // Pie de página obligatorio
    await expect(page.getByText(/Vórtice Integration Holding SpA · RUT 78\.377\.882-3 · Santiago de Chile/i)).toBeVisible();
    await expect(page.getByText(/QA Chile es una línea de servicio de Vórtice Integration Holding SpA\./i)).toBeVisible();
  });

  test("Navega hacia 'Servicios' (/servicios)", async ({ page }) => {
    await page.goto("/servicios");
    await expect(page).toHaveTitle(/Servicios/i);
    await expect(
      page.getByRole("heading", {
        name: /Nuestros Servicios/i,
      })
    ).toBeVisible();

    // Bloque técnico colapsable
    await expect(page.getByText(/Especificaciones Técnicas/i)).toBeVisible();

    // Lo que no ofrecemos
    await expect(page.getByRole("heading", { name: /Lo que no ofrecemos/i })).toBeVisible();
    await expect(
      page.locator("#main-content").getByText(/Para pruebas de carga y estrés, revisa qachile\.cl/i)
    ).toBeVisible();

    // Precios en CLP sin USD
    const content = await page.content();
    expect(content).toContain("CLP");
    expect(content).not.toMatch(/\bUSD\b|\b\$\s*\d+\s*USD\b/i);
  });

  test("Navega hacia 'Metodología Vórtice' (/metodologia)", async ({ page }) => {
    await page.goto("/metodologia");
    await expect(page).toHaveTitle(/Metodología Vórtice/i);
    await expect(
      page.getByRole("heading", {
        name: /Metodología Vórtice: La Forma en que Trabajamos/i,
      })
    ).toBeVisible();

    await expect(page.getByText(/Los 4 pilares de la metodología/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /Agendar levantamiento de 30 min/i })).toBeVisible();
  });

  test("Navega hacia 'Precios' (/precios)", async ({ page }) => {
    await page.goto("/precios");
    await expect(page).toHaveTitle(/Precios/i);
    await expect(
      page.getByRole("heading", {
        name: /Precios y Planes de Inversión/i,
      })
    ).toBeVisible();

    // Verificar precios en CLP y ausencia total de USD
    await expect(page.getByText(/3\.200\.000 CLP/i)).toBeVisible();
    await expect(page.getByText(/800\.000 CLP/i)).toBeVisible();
    await expect(page.getByText(/Precio especial para pymes\./i)).toBeVisible();

    const content = await page.content();
    expect(content).not.toMatch(/\bUSD\b|\b\$\s*\d+\s*USD\b/i);
  });

  test("Navega hacia 'Quiénes Somos' (/quienes-somos)", async ({ page }) => {
    await page.goto("/quienes-somos");
    await expect(page).toHaveTitle(/Quiénes Somos/i);
    await expect(
      page.getByRole("heading", {
        name: /Quiénes Somos/i,
      })
    ).toBeVisible();

    // Estructura del holding
    await expect(page.getByText(/La Matriz y sus Líneas de Servicio/i)).toBeVisible();
    await expect(page.getByText(/QA Chile \(qachile\.cl\)/i)).toBeVisible();

    // Perfil de la fundadora con etiqueta de confirmación
    await expect(page.getByText(/\[CONFIRMAR TEXTO Y FOTO\]/i)).toBeVisible();
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
  });

  test("Redirecciones 301 de URLs antiguas hacia /levantamiento y /vortice hacia /quienes-somos", async ({ page }) => {
    await page.goto("/diagnostico");
    await expect(page).toHaveURL(/.*\/levantamiento/);

    await page.goto("/acompanamiento");
    await expect(page).toHaveURL(/.*\/levantamiento/);

    await page.goto("/vortice");
    await expect(page).toHaveURL(/.*\/quienes-somos/);
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

    // WhatsApp oficial
    const whatsappLink = page.locator('a[href*="wa.me"]').first();
    await expect(whatsappLink).toBeVisible();
    await expect(whatsappLink).toHaveAttribute("href", /wa\.me\/56941939361/);
  });
});
