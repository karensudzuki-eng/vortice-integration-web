export type ServiceLine =
  | "QA y automatización"
  | "Diagnóstico de madurez organizacional"
  | "Acompañamiento en transformación"
  | "Consulta general";

export type CompanySize =
  | "1 a 10 personas"
  | "11 a 50 personas"
  | "51 a 200 personas"
  | "Más de 200 personas";

export interface LeadSubmission {
  nombre: string;
  empresa: string;
  cargo: string;
  rubro: string;
  tamano_empresa: CompanySize | string;
  mensaje: string;
  linea_interes: ServiceLine | string;
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
