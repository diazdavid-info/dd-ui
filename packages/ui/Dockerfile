ARG NODE_VERSION=22.13.0

FROM node:${NODE_VERSION}-alpine AS build

ARG PNPM_VERSION=10.2.0

WORKDIR /app

# Instalamos pnpm globalmente
RUN npm install -g pnpm@${PNPM_VERSION}

# Copiamos solo lo necesario para cachear mejor la instalación
COPY pnpm-lock.yaml pnpm-workspace.yaml ./
COPY packages/ui/package.json packages/ui/pnpm.* packages/ui/

# Instalamos solo las dependencias necesarias para packages/ui
RUN pnpm install --filter ./packages/ui --frozen-lockfile

# Copiamos los archivos fuente (sin arrastrar todo el repo)
COPY packages/ui ./packages/ui

# Build de la app
RUN pnpm --filter ./packages/ui run build

# Imagen de runtime
FROM nginx:alpine AS runtime

# Configuración de nginx y contenido estático
COPY --from=build /app/packages/ui/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/packages/ui/storybook-static /usr/share/nginx/html

EXPOSE 8080
