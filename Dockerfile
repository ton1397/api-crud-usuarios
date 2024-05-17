# Use uma imagem base oficial do Node.js
FROM node:20.12-alpine3.18

# Define o diretório de trabalho no container
WORKDIR /app

# Copia o package.json e package-lock.json (se existir)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código do aplicativo
COPY . .

# Compila o aplicativo NestJS
RUN npm run build

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "run", "start:prod"]
