# Imersão Back-End Alura

Um projeto desenvolvido como uma rede social de compartilhamento de imagens semelhante ao Instagram. Ele permite o upload, listagem e atualização de postagens com descrições e imagens, usando MongoDB como banco de dados e Express.js no backend.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução para JavaScript no backend.
- **Express.js**: Framework para criação de APIs RESTful.
- **MongoDB**: Banco de dados NoSQL para armazenamento das postagens.
- **Multer**: Middleware para upload de arquivos.
- **Cors**: Middleware para habilitar CORS (Cross-Origin Resource Sharing).
- **Postman**: Ferramenta para testar a API.

## Endpoints da API

### `GET /posts`
Retorna todas as postagens cadastradas no sistema.

### `POST /posts`
Cadastra uma nova postagem com um objeto JSON contendo os detalhes da imagem.

### `POST /upload`
Realiza o upload de uma imagem para o servidor.

### `PUT /upload/:id`
Atualiza a descrição ou outros detalhes da postagem correspondente ao `id`.

## Como Executar o Projeto

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Configure a variável de ambiente `STRING_CONNECTION` com a URL de conexão do MongoDB.
4. Inicie o servidor com o comando `npm start`.
5. Use o Postman ou uma aplicação frontend para consumir a API.

## Capturas de Tela

### Postagens no MongoDB
![MongoDB](4.png)

### Testando a API com Postman
![Postman](2.png)

### Interface Visual (Exemplo)
![Interface](3.png)

## Sobre o Projeto

Este projeto foi desenvolvido durante a **Imersão Back-End** promovida pela [Alura](https://www.alura.com.br/). 
O objetivo foi aprender e aplicar conceitos fundamentais de desenvolvimento de APIs, banco de dados e armazenamento de arquivos.