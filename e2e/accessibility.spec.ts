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
      { id: "lead-nombre", label: /Nombre/i },
      { id: "lead-empresa", label: /Empresa/i },
      { id: "lead-cargo", label: /Cargo/i },
      { id: "lead-tamano", label: /Tamaño del equipo/i },
      { id: "lead-mensaje", label: /¿Qué software tienen/i },
    ];

    for (const field of fields) {
      const input = page.locator(`#${field.id}`);
      await expect(input).toBeVisible();

      const label = page.locator(`label[for="${field.id}"]`);
      await expect(label).toBeVisible();
      await expect(label).toHaveText(field.label);
    }
  });
});
