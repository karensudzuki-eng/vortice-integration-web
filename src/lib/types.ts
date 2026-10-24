export type TeamSize =
  | "Menos de 10"
  | "11 a 50"
  | "51 a 200"
  | "Más de 200";

export interface LeadSubmission {
  nombre: string;
  empresa: string;
  cargo: string;
  stack?: string; // Tecnologías, frameworks, repositorio
  tamano_empresa: TeamSize | string;
  mensaje: string; // "¿Qué software tienen y cómo lo prueban hoy?"
  rubro?: string;
  linea_interes?: string;
  fecha?: string;
}

export interface LeadRecord extends LeadSubmission {
  id: string;
  fecha: string;
}

export interface ApiResponse<T = unknown> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}
