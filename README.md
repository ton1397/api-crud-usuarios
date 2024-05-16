# README

## Descrição

Este projeto é uma API de CRUD de usuários construída com Node.js, Express e MongoDB. A API permite criar, ler, atualizar e deletar usuários, e utiliza Docker para facilitar a configuração e a execução do ambiente de desenvolvimento.

## Requisitos

- Node.js (versão 14 ou superior)
- Docker (versão 20.10 ou superior)
- Docker Compose (versão 1.27 ou superior)

## Instruções de Instalação

1. **Clone o repositório:**

   ```sh
   git clone https://github.com/ton1397/api-crud-usuarios.git
   cd api-crud-usuarios
   ```

2. **Instale as dependências:**

   ```sh
   npm install
   ```

3. **Certifique-se de ter o Docker e Docker Compose instalados corretamente e em execução. Se não tiver, instale-o a partir do [site oficial do Docker](https://www.docker.com/get-started).**

4. **Suba os containers Docker:**

   ```sh
   docker-compose up --build
   ```

   Este comando irá construir e iniciar os containers Docker definidos no arquivo `docker-compose.yml`.

## Acessando a API

Após a conclusão do build, a API estará disponível na seguinte URL:

- [http://localhost:3000](http://localhost:3000)

## Documentação da API

Você pode acessar a documentação completa da API, que foi gerada usando Swagger, no seguinte endereço:

- [http://localhost:3000/api](http://localhost:3000/api)

Esta documentação interativa permite explorar e testar os endpoints da API diretamente no navegador.

## Tecnologias Utilizadas

- **Node.js**: Runtime de JavaScript.
- **Express**: Framework web para Node.js.
- **MongoDB**: Banco de dados NoSQL.
- **Docker**: Plataforma de containers.
- **Swagger**: Ferramenta para documentação de APIs.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para mais informações.

---

Feito com ❤️ por [Wellington Andrade](https://github.com/ton1397/)