# Imagen oficial de Playwright con Node y navegadores preinstalados
FROM mcr.microsoft.com/playwright:v1.48.0-jammy

# Directorio de trabajo
WORKDIR /app

# Copiar manifiestos de dependencias
COPY package*.json ./

# Instalar dependencias exactas
RUN npm ci

# Asegurar instalación de navegadores compatibles con la versión de Playwright
RUN npx playwright install --with-deps chromium

# Copiar el código fuente completo
COPY . .

# Variables de entorno dummy para el paso de compilación Next.js
ENV NEXT_PUBLIC_SUPABASE_URL=https://placeholder.supabase.co
ENV NEXT_PUBLIC_SUPABASE_ANON_KEY=placeholder-key
ENV NEXT_PUBLIC_SITE_URL=http://localhost:3000
ENV CI=true

# Compilar la aplicación Next.js
RUN npm run build

# Comando por defecto: ejecutar la suite completa de pruebas E2E
CMD ["npm", "run", "test:e2e"]
