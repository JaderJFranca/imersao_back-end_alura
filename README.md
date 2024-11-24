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

### `POST /upload`
Realiza o upload de uma imagem para o servidor.

### `PUT /upload/:id`
Atualiza a descrição ou outros detalhes da postagem correspondente ao `id`.

## Como Executar o Projeto

1. Clone o repositório.
2. Instale as dependências com `npm install`.
3. Configure a variável de ambiente `STRING_CONNECTION` com a URL de conexão do MongoDB.
4. Inicie o servidor com o comando `npm run dev`.
5. Use o Postman ou uma aplicação frontend para consumir a API.

## Capturas de Tela

### Postagens no MongoDB
![4](https://github.com/user-attachments/assets/49f24285-f471-44a9-9214-e03cc992bc4a)

### Testando a API com Postman
![2](https://github.com/user-attachments/assets/50921125-9bbf-4285-bccf-76ce66d5d5b1)

### Interface Visual (Exemplo)
![3](https://github.com/user-attachments/assets/5fc5e55b-1754-43fb-98a8-883ced0d7840)


## Sobre o Projeto

Este projeto foi desenvolvido durante a **Imersão Back-End** promovida pela [Alura](https://www.alura.com.br/). 
O objetivo foi aprender e aplicar conceitos fundamentais de desenvolvimento de APIs, banco de dados e armazenamento de arquivos.
