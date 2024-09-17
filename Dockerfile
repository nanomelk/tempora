# Usar una imagen base de Node.js
FROM node:14

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Construir la aplicación para producción
RUN npm run build

# Usar una imagen base de Nginx para servir la aplicación
FROM nginx:alpine

# Copiar los archivos construidos a la imagen de Nginx
COPY --from=0 /app/build /usr/share/nginx/html

# Exponer el puerto en el que corre la aplicación
EXPOSE 80

# Comando para correr Nginx
CMD ["nginx", "-g", "daemon off;"]
