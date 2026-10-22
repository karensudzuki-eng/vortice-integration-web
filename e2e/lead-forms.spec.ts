import { test, expect } from "@playwright/test";

test.describe("Formularios de Lead y Endpoint de API", () => {
  test("Envío exitoso del formulario de Diagnóstico con mock de backend", async ({ page }) => {
    // Interceptar la llamada a /api/leads para simular respuesta exitosa de Supabase + n8n
    await page.route("**/api/leads", async (route) => {
      const postData = route.request().postDataJSON();

      expect(postData.nombre).toBe("Valentina Morales");
      expect(postData.empresa).toBe("Empresa Prueba SpA");
      expect(postData.cargo).toBe("Líder de Desarrollo");
      expect(postData.rubro).toBe("Tecnología / Software");
      expect(postData.tamano_empresa).toBe("11 a 50 personas");
      expect(postData.linea_interes).toBe("Diagnóstico de madurez organizacional");
      expect(postData.mensaje).toContain("Retrasos frecuentes en las entregas");

      await route.fulfill({
        status: 201,
        contentType: "application/json",
        body: JSON.stringify({
          success: true,
          message: "Solicitud registrada con éxito.",
          data: {
            id: "lead-test-12345",
            ...postData,
            fecha: new Date().toISOString(),
          },
        }),
      });
    });

    await page.goto("/diagnostico");

    // Llenar campos
    await page.fill("#lead-nombre", "Valentina Morales");
    await page.fill("#lead-empresa", "Empresa Prueba SpA");
    await page.fill("#lead-cargo", "Líder de Desarrollo");
    await page.selectOption("#lead-rubro", "Tecnología / Software");
    await page.selectOption("#lead-tamano", "11 a 50 personas");
    await page.fill(
      "#lead-mensaje",
      "Retrasos frecuentes en las entregas y falta de pruebas automatizadas."
    );

    // Enviar
    await page.click('button[type="submit"]');

    // Verificar mensaje de confirmación
    await expect(page.getByRole("status")).toBeVisible();
    await expect(page.getByText(/¡Solicitud recibida correctamente!/i)).toBeVisible();
    await expect(page.getByText(/Empresa Prueba SpA/i)).toBeVisible();

    // Verificar opción de calendario tras envío
    await expect(page.getByText(/Paso optativo inmediato/i)).toBeVisible();
    await expect(page.getByText(/Abrir agenda de disponibilidad/i)).toBeVisible();
  });

  test("Validación de campos obligatorios en formulario de Contacto", async ({ page }) => {
    await page.goto("/contacto");

    // Intentar enviar sin llenar nada
    await page.click('button[type="submit"]');

    // Verificar alerta de validación
    const alert = page.getByRole("alert").filter({ hasText: "No pudimos procesar la solicitud" });
    await expect(alert).toBeVisible();
    await expect(
      page.getByText(/Por favor, completa todos los campos requeridos/i)
    ).toBeVisible();
  });

  test("API /api/leads responde 400 si faltan campos obligatorios", async ({ request }) => {
    const response = await request.post("/api/leads", {
      data: {
        nombre: "Test Incompleto",
        // Falta empresa, cargo, mensaje, etc.
      },
    });

    expect(response.status()).toBe(400);
    const body = await response.json();
    expect(body.success).toBe(false);
    expect(body.error).toContain("Todos los campos del formulario son obligatorios");
  });
});
