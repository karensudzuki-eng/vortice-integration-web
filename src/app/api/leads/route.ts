import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabase";
import { LeadSubmission } from "@/lib/types";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<LeadSubmission>;

    const {
      nombre,
      empresa,
      cargo,
      stack,
      tamano_empresa,
      mensaje,
      rubro,
      linea_interes,
    } = body;

    // Validación de los campos obligatorios del formulario
    if (
      !nombre?.trim() ||
      !empresa?.trim() ||
      !cargo?.trim() ||
      !tamano_empresa?.trim() ||
      !mensaje?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Todos los campos del formulario son obligatorios.",
        },
        { status: 400 }
      );
    }

    const payload: Record<string, unknown> = {
      nombre: nombre.trim(),
      empresa: empresa.trim(),
      cargo: cargo.trim(),
      tamano_empresa: tamano_empresa.trim(),
      mensaje: mensaje.trim(),
      rubro: rubro?.trim() || "Empresas medianas / TI",
      linea_interes: linea_interes?.trim() || "Levantamiento QA (30 min)",
      fecha: new Date().toISOString(),
    };

    if (stack?.trim()) {
      payload.stack = stack.trim();
    }

    const supabase = getSupabaseServerClient();
    let savedLeadId = `lead-${Date.now()}`;

    if (supabase) {
      const { data, error } = await supabase
        .from("leads")
        .insert([payload])
        .select("id")
        .single();

      if (error) {
        console.error("Error al registrar lead en Supabase:", error);
        return NextResponse.json(
          {
            success: false,
            error: "No fue posible registrar la solicitud en la base de datos.",
          },
          { status: 500 }
        );
      }

      if (data?.id) {
        savedLeadId = data.id;
      }
    } else {
      console.warn("Supabase en modo demostración local.");
    }

    // Webhook n8n
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (
      n8nWebhookUrl &&
      !n8nWebhookUrl.includes("placeholder") &&
      n8nWebhookUrl.startsWith("http")
    ) {
      try {
        await fetch(n8nWebhookUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "Vortice-Integration-Backend",
          },
          body: JSON.stringify({
            event: "lead.created",
            leadId: savedLeadId,
            lead: payload,
            dispatchedAt: new Date().toISOString(),
          }),
        });
      } catch (webhookError) {
        console.error("Error al enviar notificación a n8n:", webhookError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Te respondemos en menos de 24 horas hábiles.",
        data: {
          id: savedLeadId,
          empresa: payload.empresa,
          fecha: payload.fecha,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error en POST /api/leads:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Ocurrió un error inesperado al procesar el formulario.",
      },
      { status: 500 }
    );
  }
}
