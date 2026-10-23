-- ==============================================================
-- VÓRTICE INTEGRATION HOLDING SpA - Esquema de Base de Datos (Supabase)
-- Tabla de leads calificados para Diagnóstico y Acompañamiento
-- ==============================================================

-- 1. Crear extensión para UUIDs si no existe
create extension if not exists "pgcrypto";

-- 2. Crear tabla 'leads'
create table if not exists public.leads (
    id uuid primary key default gen_random_uuid(),
    nombre text not null,
    empresa text not null,
    cargo text not null,
    rubro text not null,
    tamano_empresa text not null,
    mensaje text not null,
    linea_interes text not null,
    fecha timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. Índices para búsqueda rápida y reportabilidad
create index if not exists idx_leads_fecha on public.leads (fecha desc);
create index if not exists idx_leads_linea_interes on public.leads (linea_interes);

-- 4. Habilitar Row Level Security (RLS)
alter table public.leads enable row level security;

-- 5. Política para inserción segura de leads
-- Permite que el servidor o clientes autorizados inserten nuevos registros
create policy "Permitir inserción de leads"
    on public.leads
    for insert
    to anon, authenticated, service_role
    with check (true);

-- 6. Política de lectura: sólo administradores con clave service_role pueden consultar
create policy "Lectura exclusiva administradores"
    on public.leads
    for select
    to service_role
    using (true);

-- Comentario explicativo
comment on table public.leads is 'Registro de prospectos y solicitudes de diagnóstico de Vórtice Integration SpA';
