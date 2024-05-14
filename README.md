O VizinHelp é um trabalho acadêmico realizado para a conclusão da Pós graduação em Desenvolvimento FullStack da Faculdade PUC-RS. Tem como objetivo ser um sistema web que facilita a troca de conhecimento
entre vizinhos.

# VizinHelp - Backend
A aplicação BACKEND do VizinHelp foi feita em Node.js utilizando o framework Express na versão  4.19.2, além de integrações com banco de dados postgres, keycloak para gerenciamento de acesso e pgAdmin como SGBD.

# Pré requisitos
	 Node (20.12.2)
	 Docker (25.0.3)
	 Docker Compose (v2.24.6-desktop.1)

# Instalação
Clone o repositório:<br>
		git clone https://github.com/vcosmusjoao/vizinhelp.git

Instale as dependências:<br>
	# npm install

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





# VizinHelp - Frontend
O frontend do VizinHelp foi desenvolvido utilizando o framework Angular na versão 17. Esta versão específica foi escolhida devido às suas características e compatibilidade com as dependências do projeto.

### Principais Tecnologias Utilizadas:

- Angular 17
- TypeScript
- HTML
- CSS

## Pré-requisitos

Antes de iniciar a configuração do frontend, certifique-se de ter os seguintes pré-requisitos instalados:

- Node.js (v20.12.2) - [Instalação do Node.js](https://nodejs.org/)
- Angular CLI (v9.1.13) - Instale globalmente com o comando: `npm install -g @angular/cli`

# Instalação
Clone o repositório:<br>
		git clone https://github.com/vcosmusjoao/vizinhelp.git

Instale as dependências:<br>
npm install

 # Configuração
 Para configurar as variáveis de ambiente do Angular, você precisará modificar o arquivo src/environments/environment.keycloak.ts.
Certifique-se de ajustar as configurações conforme necessário para o seu ambiente.


