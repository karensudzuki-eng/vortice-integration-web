import { test, expect } from "@playwright/test";

test.describe("Enlaces externos a qachile.cl", () => {
  test("Todos los enlaces a qachile.cl abren en nueva pestaña de forma segura", async ({ page }) => {
    await page.goto("/");

    // Buscar todos los enlaces que apuntan a qachile.cl
    const qaChileLinks = page.locator('a[href*="qachile.cl"]');
    const count = await qaChileLinks.count();

    expect(count).toBeGreaterThanOrEqual(2); // Al menos Navbar y tarjeta/footer

    for (let i = 0; i < count; i++) {
      const link = qaChileLinks.nth(i);
      const target = await link.getAttribute("target");
      const rel = await link.getAttribute("rel");

      expect(target).toBe("_blank");
      expect(rel).toContain("noopener");
      expect(rel).toContain("noreferrer");
    }
  });

  test("El enlace en el Footer a qachile.cl abre en nueva pestaña", async ({ page }) => {
    await page.goto("/contacto");

    const footerQaLink = page.locator('footer a[href*="qachile.cl"]');
    await expect(footerQaLink).toBeVisible();
    await expect(footerQaLink).toHaveAttribute("target", "_blank");
    await expect(footerQaLink).toHaveAttribute("rel", /noopener/);
  });
});
