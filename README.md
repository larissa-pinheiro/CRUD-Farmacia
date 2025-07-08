# CRUD-Farmacia

Sistema backend para gerenciamento de uma farmácia, desenvolvido em NestJS, com banco de dados MySQL.  
O projeto contempla o CRUD completo para os recursos **Categoria** e **Produto**, seguindo boas práticas, incluindo relacionamento entre entidades.

---

## 📋 Descrição do Projeto

Este sistema visa facilitar o controle de produtos farmacêuticos classificados por categorias, otimizando o gerenciamento de estoque, vendas e operações da farmácia.  
Foi desenvolvido com foco em escalabilidade, organização e manutenibilidade do código.

---

## 🛠 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) (Framework Node.js para backend)
- [TypeORM](https://typeorm.io/) (ORM para banco de dados)
- [MySQL](https://www.mysql.com/) (Banco de dados relacional)
- [@nestjs/config](https://docs.nestjs.com/techniques/configuration) (Gerenciamento de variáveis de ambiente)
- [Postman](https://www.postman.com/) / [Insomnia](https://insomnia.rest/) (Para testes das rotas API)

---

## 🚀 Como Rodar o Projeto Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/CRUD-Farmacia.git
cd CRUD-Farmacia
```
## 🚀 Como Rodar o Projeto Localmente

### 1. Instale as dependências

```bash
npm install
```

---

### 2. Configure o arquivo `.env`

Crie um arquivo `.env` na raiz do projeto e configure as variáveis do banco MySQL:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=sua_senha
DB_NAME=db_farmacia
```

---

### 3. Crie o banco de dados MySQL

```sql
CREATE DATABASE db_farmacia;
```

---

### 4. Inicie a aplicação

```bash
npm run start:dev
```

A aplicação estará rodando em: [http://localhost:3000](http://localhost:3000)

## 📚 Funcionalidades

### Categoria

- Criar uma nova categoria
- Listar todas as categorias
- Buscar categoria por ID
- Atualizar categoria por ID
- Deletar categoria por ID

### Produto

- Criar produto associado a uma categoria
- Listar todos os produtos
- Buscar produto por ID
- Atualizar produto por ID
- Deletar produto por ID

---

## 🧪 Testes

Utilize ferramentas como **Postman** ou **Insomnia** para testar as rotas HTTP da API.
