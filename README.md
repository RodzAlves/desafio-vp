<h4 align="center">
  <img src="./frontend/src/assets/vp.png" width="450"/>
</h4>

<h1 align="center"><b>Desafio VintePila</b></h1>

### Nesse desafio foi construido uma API Rest em NodeJS para gerenciar os usuários utilizando Postgres como Banco de Dados, juntamente a um front-end desenvolvido com ReactJS e Styled Components. Foi implementado também a autenticação com JSON Web Token.

# <b>⚡ Features</b>

## Back-end

- [x] Cadastro de usuário.
- [x] Listar todos usuários.
- [x] Listar um usuário.
- [x] Alterar informações de um usuário.
- [x] Deletar um usuário.

## Front-end

- [x] Autenticação de usuário.
- [x] Deslogar o usuário.
- [x] Cadastro de usuário.
- [x] Listar todos usuários.
- [x] Alterar informações de um usuário.
- [x] Deletar um usuário.

# 🛠 <b>Tecnologias</b>

As seguintes ferramentas foram usadas na construção do projeto:

## Back-end

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [Postgres](https://www.postgresql.org/)
- [bcrypt](https://www.npmjs.com/package/bcryptjs)
- [JSON Web Token (JWT)](https://jwt.io/)

## Front-end

- [ReactJS](https://reactjs.org/)
- [Styled Components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Context API](https://reactjs.org/docs/context.html)
- [React Icons](https://react-icons.github.io/react-icons/)
- [React Router DOM](https://reactrouter.com/web/guides/quick-start)
- [Yup](https://github.com/jquense/yup)
- [Unform](https://unform.dev/)

<br>

# <b>🔥 Instalação</b>

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). E para o Banco de Dados, utilizei o Postgres em docker. Para gerenciamento de pacotes utilizo o Yarn, mas fica a seu critério.

Após isso, vamos aos próximos passos.

<br>

Comece clonando este repositório.

```bash
git clone https://github.com/RodzAlves/desafio-vp.git
```

Depois disso acesse a pasta do projeto.

```bash
cd desafio-vp
```

Instale as dependências tanto do frontend, quanto do backend.

```bash
cd frontend e rode npm install ou yarn
cd backend e rode npm install ou yarn
```

## <b>↔️ Configurando back-end</b>

Abra o projeto no seu editor de código de preferência (Visual Studio Code ou outro) e siga o caminho:

```bash
backend -> src -> config -> database.js
```

```js
{
  -> Coloque as informações de acordo com seu banco SQL que o Sequelize suporte. (No meu caso utilizei o docker do postgres).


  dialect: 'postgres', // Tipo de banco
  host: 'localhost', // Onde ele rodará
  username: 'postgres', // Nome do usuário
  password: 'docker', // Senha
  database: 'vintepila', // Definindo nome do banco de dados.
}
```

Após isso, rode o seguinte comando no terminal para criação do Banco de Dados:

```bash
yarn sequelize db:create
```

Depois, para criação da migrate:

```bash
yarn sequelize db:migrate
```

Após isso, no terminal rode o comando:

```bash
yarn dev ou npm run dev

# O servidor iniciará na porta:3334 - acesse http://localhost:3334
```

E pronto! A API já estará rodando.

```bash
OBSERVAÇÃO: Se você trocar a porta que irá rodar a API, precisará ir em:

frontend -> src -> services -> api

E trocar a porta da baseURL para requisições.
```

## <b>↔️ Configurando front-end</b>

Após ter instalado as dependências e já estar com o servidor rodando, basta rodar o comando no terminal:

```bash
yarn start ou npm run start

# O servidor iniciará na porta:3000 - acesse http://localhost:3000
```

<br>

# <b>✴ Endpoints</b>

- **`POST /users`**: A rota deve receber `first_name`, `last_name`, `email`, `password`, `phone`, `cpf` dentro do corpo da requisição (body).

```json
{
  "first_name": "Rodrigo",
  "last_name": "VintePila",
  "email": "rodrigo@vintepila.com",
  "password": "f123456",
  "phone": "319957688",
  "cpf": "225.255.555-87"
}
```

- **`GET /users`**: A rota retorna todos os usuários cadastrados na base de dados da VintePila.

```json
[
  {
    "id": 29,
    "first_name": "Marcos",
    "last_name": "Alves Brasileiro",
    "email": "marcos@gmail.com",
    "phone": "(45) 45445-4546",
    "cpf": "566.556.566-55",
    "createdAt": "2021-02-19T02:34:56.852Z",
    "updatedAt": "2021-02-19T02:35:08.374Z"
  },
  {
    "id": 21,
    "first_name": "Rodrigo",
    "last_name": "Brasileiro",
    "email": "rodrigoalves@gmail.com",
    "phone": "(75) 99143-8273",
    "cpf": "456.646.546-54",
    "createdAt": "2021-02-18T12:52:47.142Z",
    "updatedAt": "2021-02-18T13:02:30.889Z"
  }
]
```

- **`GET /users/:id`**: A rota deve receber o `id` de um usuário via Route Params cadastrado no Banco de Dados, caso não seja válido, retornará um status 400 (Bad Request).

```bash
http://localhost:3333/users/21
```

O retorno será:

```json
{
  "id": 21,
  "first_name": "Rodrigo",
  "last_name": "Brasileiro",
  "email": "rodrigoalves@gmail.com",
  "phone": "(75) 99143-8273",
  "cpf": "456.646.546-54",
  "createdAt": "2021-02-18T12:52:47.142Z",
  "updatedAt": "2021-02-18T13:02:30.889Z"
}
```

- **`PUT /users/:id`**: A rota deve receber `id` via Route Params, e as alterações que deseja realizar dentro do corpo da requisição (body). Podendo ser: `name`, `email`, `password`, `phone`.

```bash
http://localhost:3333/users/24
```

```json
{
  "last_name": "Alves"
}
```

O retorno será:

```json
{
  "success": "Usuário atualizado com sucesso."
}
```

- **`DELETE /users/:id`**: A rota deve receber `id` via Route Params, para deletar o usuário do Banco de Dados. Caso não seja válido, retornará um status 400 (Bad Request).

```bash
http://localhost:3333/users/24
```

O retorno será:

```json
{
  "success": "Usuário deletado com sucesso."
}
```

<br>
Feito com 💜 por Rodrigo Alves 👋 <br>
<a href="https://www.linkedin.com/in/rodrigo-alves-dev/" alt="LinkedIn" target="blank">

   <p align="left" >
  <a href="mailto:rodrigoalvesbrasileiro@gmail.com" alt="Gmail">
  <img src="https://img.shields.io/badge/-GMAIL-red?style=for-the-badge&logo=Gmail&logoColor=white&link=mailto:rodrigoalvesbrasileiro@gmail.com"/></a>
  
  <a href="https://www.linkedin.com/in/rodrigo-alves-dev/" alt="Linkedin">
  <img src="https://img.shields.io/badge/-Linkedin-0e76a8?style=for-the-badge&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/iuricode" /></a>

</p>
  </a>
