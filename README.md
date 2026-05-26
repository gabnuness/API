# 🚀 Minha Primeira API RESTful com Node.js

Este é o meu primeiro projeto de back-end, desenvolvido com o objetivo de compreender o funcionamento de uma API do zero, desde a manipulação de dados em memória até a integração com um banco de dados relacional/não-relacional utilizando um ORM.

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução Javascript.
* **Express**: Framework para gerenciamento de rotas e requisições HTTP.
* **Prisma**: ORM para modelagem e comunicação com o banco de dados.
* **MongoDB**: Banco de dados para armazenamento dos dados.
* **Thunder Client (VS Code)**: Extensão para testes de requisições HTTP.

## 📌 O que foi desenvolvido

Durante o desenvolvimento, o projeto evoluiu em duas fases principais:

1.  **Fase Inicial (Em Memória):** Criação das primeiras rotas `GET` e `POST` salvando os dados dos usuários temporariamente em uma lista local.
2.  **Fase de Persistência (Banco de Dados):** Integração com o MongoDB via Prisma, definindo os tipos de dados (Nome, Idade e E-mail) e implementando o CRUD completo.

### Rotas Disponíveis (CRUD):
* `GET /usuarios`: Lista todos os usuários cadastrados.
* `POST /usuarios`: Cria um novo usuário (enviando nome, idade e email via JSON no Body).
* `PUT /usuarios/:id`: Atualiza os dados de um usuário específico via Route Params.
* `DELETE /usuarios/:id`: Remove um usuário do banco de dados.

## 🧠 Aprendizados Adquiridos

* Compreensão de métodos HTTP (GET, POST, PUT, DELETE).
* Diferença e aplicação de parâmetros: Query Params, Route Params e Body (JSON).
* Estruturação de um servidor back-end robusto.
