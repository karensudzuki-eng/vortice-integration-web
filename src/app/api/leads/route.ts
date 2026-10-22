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
      rubro,
      tamano_empresa,
      mensaje,
      linea_interes,
    } = body;

    // Validación básica de campos obligatorios
    if (
      !nombre?.trim() ||
      !empresa?.trim() ||
      !cargo?.trim() ||
      !rubro?.trim() ||
      !tamano_empresa?.trim() ||
      !mensaje?.trim() ||
      !linea_interes?.trim()
    ) {
      return NextResponse.json(
        {
          success: false,
          error: "Todos los campos del formulario son obligatorios.",
        },
        { status: 400 }
      );
    }

    const payload: LeadSubmission & { fecha: string } = {
      nombre: nombre.trim(),
      empresa: empresa.trim(),
      cargo: cargo.trim(),
      rubro: rubro.trim(),
      tamano_empresa: tamano_empresa.trim(),
      mensaje: mensaje.trim(),
      linea_interes: linea_interes.trim(),
      fecha: new Date().toISOString(),
    };

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
      console.warn(
        "Supabase no está configurado (variables de entorno pendientes). Modo demostración local."
      );
    }

    // Disparar Webhook a n8n para notificación de correo
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;
    if (
      n8nWebhookUrl &&
      !n8nWebhookUrl.includes("placeholder") &&
      n8nWebhookUrl.startsWith("http")
    ) {
      try {
        const webhookResponse = await fetch(n8nWebhookUrl, {
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

        if (!webhookResponse.ok) {
          console.error(
            `El webhook de n8n respondió con estado: ${webhookResponse.status}`
          );
        }
      } catch (webhookError) {
        // El fallo del webhook externo no debe abortar la confirmación al cliente
        console.error("Error al enviar notificación al webhook de n8n:", webhookError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Solicitud registrada con éxito. Nos pondremos en contacto a la brevedad.",
        data: {
          id: savedLeadId,
          ...payload,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Excepción en /api/leads:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Ocurrió un error inesperado al procesar la solicitud.",
      },
      { status: 500 }
    );
  }
}
