import express from "express"; // Importa o framework Express para criar e gerenciar o servidor web.
import multer from "multer"; // Importa o Multer, um middleware para manipulação de arquivos em requisições.
import cors from "cors"; // Importa o middleware CORS para permitir requisições de diferentes origens.

import { listPosts, createNewPost, uploadImg, updateNewPost } from "../controllers/postController.js"; 
// Importa as funções controladoras que gerenciam a lógica de negócios relacionadas a posts.

// Configuração das opções para o middleware CORS
const corsOptions = {
    origin: "http://localhost:8000", // Permite apenas requisições vindas deste domínio.
    optionsSuccessStatus: 200 // Define o status para respostas bem-sucedidas do middleware.
};

// Configuração do armazenamento de arquivos para o Multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Define a pasta onde os arquivos enviados serão armazenados.
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Mantém o nome original do arquivo enviado.
    }
});

// Configura o middleware Multer para lidar com upload de arquivos
const upload = multer({
    dest: "./uploads", // Pasta temporária de upload (sobrescrito pelo `storage` configurado).
    storage // Usa a configuração personalizada de armazenamento.
});

// Define as rotas da aplicação
const routes = (app) => {
    app.use(express.json()); // Middleware para parsear o corpo das requisições no formato JSON.

    app.use(cors(corsOptions)); // Middleware para ativar CORS com as opções definidas.

    // Rota para listar todos os posts.
    app.get("/posts", listPosts);

    // Rota para criar um novo post.
    app.post("/posts", createNewPost);

    // Rota para fazer upload de uma imagem (campo "img" no corpo da requisição).
    app.post("/upload", upload.single("img"), uploadImg);

    // Rota para atualizar um post com base no ID, incluindo a descrição e outras informações.
    app.put("/upload/:id", updateNewPost);
};

export default routes; // Exporta a função de definição de rotas para ser usada no servidor principal.
