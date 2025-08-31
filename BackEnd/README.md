# API REST de Usuários com Node.js, Express, Prisma e MongoDB

Esta é uma API REST simples para cadastro e gerenciamento de usuários, desenvolvida como parte de um projeto do **Dev Club** do professor **Rodolfo**, utilizando **Node.js**, **Express**, **Prisma** e **MongoDB**. O projeto permite criar, listar, atualizar e deletar usuários por meio de rotas HTTP (`POST`, `GET`, `PUT`, `DELETE`).


---

## 📌 Funcionalidades

- **Criar um usuário**: `POST /user`  
- **Listar todos os usuários ou filtrar por nome/email**: `GET /user`  
- **Atualizar informações de um usuário pelo ID**: `PUT /user/:id`  
- **Deletar um usuário pelo ID**: `DELETE /user/:id`  

---

## Tecnologias Utilizadas

- **Node.js** – Ambiente de execução JavaScript.  
- **Express** – Framework para criação de APIs.  
- **Prisma** – ORM para manipulação do MongoDB.  
- **MongoDB** – Banco de dados NoSQL.  
- **Postman** – Para testes das rotas e requisições HTTP.  

---

## Testes com Postman

**Criando usuário:**
<img width="1769" height="909" alt="Captura de tela de 2025-08-25 18-13-14" src="https://github.com/user-attachments/assets/bef0e675-172f-4723-a881-074a42a6c926" />


**Listando usuários:**
<img width="1795" height="886" alt="Captura de tela de 2025-08-25 18-14-23" src="https://github.com/user-attachments/assets/e778f730-4cad-4c83-b385-bb8c1facb0e9" />

**Listando usuários específicos:**
<img width="1795" height="886" alt="Captura de tela de 2025-08-25 18-13-54" src="https://github.com/user-attachments/assets/9a95d6d1-798c-496b-a1e0-fb3240aa67dc" />


**Editando usuário:**
<img width="1795" height="886" alt="Captura de tela de 2025-08-25 18-14-44" src="https://github.com/user-attachments/assets/7803dc17-8a1e-4c55-83ea-071ff6b01b3b" />


**Deletando usuário:**
<img width="1795" height="886" alt="Captura de tela de 2025-08-25 18-16-12" src="https://github.com/user-attachments/assets/6999fdc3-b849-4e47-9bc5-3dffb21ae911" />



---

## 🚀 Como Executar o Projeto

1. **Clone o repositório**  

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio

Instale as dependências
npm install


Configure o banco de dados

Crie um banco MongoDB (local ou Atlas)

Atualize a variável DATABASE_URL no arquivo .env com a string de conexão

DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/nomeDoBanco?retryWrites=true&w=majority"

Rode o servidor
node server.js
O servidor estará rodando em: http://localhost:3000
```

## Estrutura de Rotas

| Método | Rota       | Descrição                                        |
| ------ | ---------- | ------------------------------------------------ |
| POST   | /user      | Cria um novo usuário                             |
| GET    | /user      | Lista todos os usuários ou filtra por nome/email |
| PUT    | /user/\:id | Atualiza um usuário pelo ID                      |
| DELETE | /user/\:id | Deleta um usuário pelo ID                        |


## Observações:

A API utiliza JSON como formato de requisição e resposta.

Para atualizar ou deletar, é necessário passar o ID do usuário na URL.

Ideal para quem deseja aprender CRUD com Node.js e Prisma.



