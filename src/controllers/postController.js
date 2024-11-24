import fs from "fs"; // Importa o módulo de sistema de arquivos para manipulação de arquivos.
import { getAllPosts, createPost, updatePost } from "../models/postModels.js"; // Importa funções para manipulação de posts do modelo.
import createDescriptionWithGemini from "../services/geminiService.js"; // Importa serviço para gerar descrições de imagens usando Gemini.

// Função para listar todos os posts
export async function listPosts(req, res) {
    try {
        const posts = await getAllPosts(); // Obtém todos os posts do banco de dados.
        res.status(200).json(posts); // Retorna os posts em formato JSON com status 200 (sucesso).
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ "Erro": "Falha ao listar os posts." }); // Retorna erro 500 caso ocorra falha.
    }
}

// Função para criar um novo post
export async function createNewPost(req, res) {
    const newPost = req.body; // Dados do novo post recebidos no corpo da requisição.
    try {
        const postCreated = await createPost(newPost); // Cria o post no banco de dados.
        res.status(200).json(postCreated); // Retorna o post criado com status 200 (sucesso).
    } catch (erro) {
        console.error(erro.message); // Log de erro no console.
        res.status(500).json({ "Erro": "Falha na requisição." }); // Retorna erro 500 caso ocorra falha.
    }
}

// Função para fazer upload de uma imagem
export async function uploadImg(req, res) {
    // Novo post criado com informações básicas da imagem.
    const newPost = {
        descricao: "",
        imgUrl: req.file.originalname, // Nome original do arquivo enviado.
        alt: ""
    };

    try {
        const postCreated = await createPost(newPost); // Cria um novo registro do post no banco de dados.
        const updatedImg = `uploads/${postCreated.insertedId}.png`; // Define o novo caminho/nome da imagem com o ID do post.
        fs.renameSync(req.file.path, updatedImg); // Renomeia/move o arquivo para o caminho correto.
        res.status(200).json(postCreated); // Retorna o post criado com status 200 (sucesso).
    } catch (erro) {
        console.error(erro.message); // Log de erro no console.
        res.status(500).json({ "Erro": "Falha na requisição." }); // Retorna erro 500 caso ocorra falha.
    }
}

// Função para atualizar um post com descrição gerada automaticamente
export async function updateNewPost(req, res) {
    const id = req.params.id; // ID do post recebido como parâmetro na URL.
    const urlImg = `http://localhost:3000/${id}.png`; // URL da imagem pública gerada a partir do ID do post.

    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`); // Lê a imagem armazenada localmente.
        const description = await createDescriptionWithGemini(imgBuffer); // Gera uma descrição da imagem usando o serviço Gemini.

        // Dados atualizados do post.
        const post = {
            imgUrl: urlImg, // URL da imagem.
            descricao: description, // Descrição gerada automaticamente.
            alt: req.body.alt // Texto alternativo recebido no corpo da requisição.
        };

        const createdPost = await updatePost(id, post); // Atualiza o post no banco de dados.
        res.status(200).json(createdPost); // Retorna o post atualizado com status 200 (sucesso).
    } catch (erro) {
        console.error(erro.message); // Log de erro no console.
        res.status(500).json({ "Erro": "Falha na requisição." }); // Retorna erro 500 caso ocorra falha.
    }
}
