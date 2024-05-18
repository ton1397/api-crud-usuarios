# Usar uma imagem base Node
FROM node:20.12-alpine3.18

# Definir o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante do código da aplicação
COPY . .

# Compilar a aplicação
RUN npm run build

# Expor a porta que a aplicação irá rodar
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]
