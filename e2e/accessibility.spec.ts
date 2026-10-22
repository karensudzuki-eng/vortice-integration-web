import { test, expect } from "@playwright/test";

test.describe("Accesibilidad y Estructura Semántica", () => {
  test("Estructura de landmarks semánticos presente en todas las páginas", async ({ page }) => {
    await page.goto("/");

    // Verificar presencia de landmarks principales
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("nav")).toBeVisible();
    await expect(page.locator("main")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();

    // Enlace accesible de salto al contenido
    const skipLink = page.locator('a[href="#main-content"]');
    await expect(skipLink).toBeAttached();
    expect(await skipLink.textContent()).toContain("Saltar al contenido principal");
  });

  test("Los campos de formulario cuentan con etiquetas legibles vinculadas por id", async ({ page }) => {
    await page.goto("/contacto");

    const fields = [
      { id: "lead-nombre", label: /Nombre completo/i },
      { id: "lead-empresa", label: /Empresa u organización/i },
      { id: "lead-cargo", label: /Cargo o rol/i },
      { id: "lead-rubro", label: /Rubro de la empresa/i },
      { id: "lead-tamano", label: /Tamaño del equipo/i },
      { id: "lead-linea", label: /Línea de interés principal/i },
      { id: "lead-mensaje", label: /Cuéntanos la situación/i },
    ];

    for (const field of fields) {
      const input = page.locator(`#${field.id}`);
      await expect(input).toBeVisible();

      const label = page.locator(`label[for="${field.id}"]`);
      await expect(label).toBeVisible();
      await expect(label).toHaveText(field.label);
    }
  });

  test("El diagrama del marco sistémico cuenta con descripción accesible", async ({ page }) => {
    await page.goto("/");

    const diagram = page.locator('svg[role="img"]');
    await expect(diagram).toBeVisible();
    const ariaLabel = await diagram.getAttribute("aria-label");
    expect(ariaLabel).toBeTruthy();
    expect(ariaLabel?.toLowerCase()).toContain("diagrama");
  });
});
