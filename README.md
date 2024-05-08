# vizinhelp
O VizinHelp é um trabalho acadêmico realizado para a conclusão da Pós graduação em Desenvolvimento FullStack da Faculdade PUC-RS. Tem como objetivo ser um sistema web que facilita a troca de conhecimento
entre vizinhos.
# Backend
A aplicação BACKEND do VizinHelp foi feita em Node.js utilizando o framework Express na versão  4.19.2, além de integrações com banco de dados postgres, keycloak para gerenciamento de acesso e pgAdmin como SGBD.

# Pré requisitos
Node (20.12.2)<br>
Docker (25.0.3)<br>
Docker Compose (v2.24.6-desktop.1)

# Instalação
Clone o repositório:<br>
git clone [https://github.com/seuusuario/seuprojeto.git](https://github.com/vcosmusjoao/vizinhelp.git)

Instale as dependências:<br>
npm install

# Docker Compose
Este projeto inclui um arquivo docker-compose.yml que permite subir o Keycloak, pgAdmin e PostgreSQL para facilitar o desenvolvimento.<br>
docker-compose up -d


# Configuração
Renomeie o arquivo .env.example para .env.<br>
Preencha as variáveis de ambiente necessárias no arquivo .env:<br>
PORT=3000<br>
KEYCLOAK_URL:<br>
KEYCLOAK_REALM:<br>
KEYCLOAK_CLIENT:<br>
DATABASE_URL=postgresql://username:password@localhost:5432/database

# Utilização
npm start
