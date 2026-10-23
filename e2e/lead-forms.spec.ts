import { test, expect } from "@playwright/test";

test.describe("Formularios de Levantamiento y Endpoint de API", () => {
  test("Envío exitoso del formulario de Levantamiento con mock de backend", async ({ page }) => {
    // Interceptar la llamada a /api/leads
    await page.route("**/api/leads", async (route) => {
      const postData = route.request().postDataJSON();

      expect(postData.nombre).toBe("Carlos Medina");
      expect(postData.empresa).toBe("Empresa Tech SpA");
      expect(postData.cargo).toBe("CTO");
      expect(postData.tamano_empresa).toBe("11 a 50");
      expect(postData.mensaje).toContain("Plataforma SaaS web");

      await route.fulfill({
        status: 201,
        contentType: "application/json",
        body: JSON.stringify({
          success: true,
          message: "Te respondemos en menos de 24 horas hábiles.",
          data: {
            id: "lead-test-12345",
            ...postData,
            fecha: new Date().toISOString(),
          },
        }),
      });
    });

    await page.goto("/levantamiento");

    // Llenar campos
    await page.fill("#lead-nombre", "Carlos Medina");
    await page.fill("#lead-empresa", "Empresa Tech SpA");
    await page.fill("#lead-cargo", "CTO");
    await page.selectOption("#lead-tamano", "11 a 50");
    await page.fill(
      "#lead-mensaje",
      "Plataforma SaaS web con despliegues semanales. Actualmente probamos manualmente a última hora."
    );

    // Enviar
    await page.click('button[type="submit"]');

    // Verificar mensaje de confirmación y Google Calendar
    await expect(page.getByRole("status")).toBeVisible();
    await expect(page.getByText(/Solicitud Recibida/i)).toBeVisible();
    await expect(page.getByText(/Te respondemos en menos de 24 horas hábiles/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /Abrir agenda de disponibilidad/i })).toBeVisible();
  });

  test("Validación de campos obligatorios en formulario de Contacto", async ({ page }) => {
    await page.goto("/contacto");

    // Intentar enviar sin llenar nada
    await page.click('button[type="submit"]');

    // Verificar alerta de validación
    const alert = page.getByRole("alert").filter({ hasText: "No pudimos procesar la solicitud" });
    await expect(alert).toBeVisible();
    await expect(
      page.getByText(/Por favor, completa todos los campos antes de continuar/i)
    ).toBeVisible();
  });

  test("API /api/leads responde 400 si faltan campos obligatorios", async ({ request }) => {
    const response = await request.post("/api/leads", {
      data: {
        nombre: "Test Incompleto",
      },
    });

    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.success).toBe(false);
    expect(body.error).toContain("Todos los campos del formulario son obligatorios");
  });
});
