import 'dotenv/config'; // Importa o módulo dotenv para carregar variáveis de ambiente do arquivo .env.
import { ObjectId } from 'mongodb'; // Importa a classe ObjectId para manipulação de IDs no MongoDB.
import conectarAoBanco from "../config/dbConfig.js"; // Importa a função para conectar ao banco de dados.

// Estabelece a conexão com o banco de dados usando a string de conexão definida nas variáveis de ambiente.
const connection = await conectarAoBanco(process.env.STRING_CONNECTION);

/**
 * Função para obter todos os posts da coleção "posts".
 * @returns {Promise<Array>} - Retorna uma promessa com um array contendo todos os posts.
 */
export async function getAllPosts() {
    const db = connection.db("imersao-alura"); // Seleciona o banco de dados "imersao-alura".
    const collection = db.collection("posts"); // Acessa a coleção "posts".
    return collection.find().toArray(); // Retorna todos os documentos da coleção como um array.
}

/**
 * Função para criar um novo post na coleção "posts".
 * @param {Object} newPost - Objeto contendo os dados do novo post.
 * @returns {Promise<Object>} - Retorna uma promessa com o resultado da inserção.
 */
export async function createPost(newPost) {
    const db = connection.db("imersao-alura"); // Seleciona o banco de dados "imersao-alura".
    const collection = db.collection("posts"); // Acessa a coleção "posts".
    return collection.insertOne(newPost); // Insere o novo post na coleção e retorna o resultado da operação.
}

/**
 * Função para atualizar um post existente na coleção "posts".
 * @param {string} id - ID do post a ser atualizado.
 * @param {Object} newPost - Objeto contendo os dados atualizados do post.
 * @returns {Promise<Object>} - Retorna uma promessa com o resultado da atualização.
 */
export async function updatePost(id, newPost) {
    const db = connection.db("imersao-alura"); // Seleciona o banco de dados "imersao-alura".
    const collection = db.collection("posts"); // Acessa a coleção "posts".
    const objectID = ObjectId.createFromHexString(id); // Converte o ID em string para um ObjectId do MongoDB.
    return collection.updateOne(
        { _id: new ObjectId(objectID) }, // Localiza o documento com o ID correspondente.
        { $set: newPost } // Atualiza os campos do documento com os dados fornecidos.
    );
}
