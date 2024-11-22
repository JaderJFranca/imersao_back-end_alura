import fs from "fs";
import { getAllPosts, createPost, updatePost } from "../models/postModels.js";
import createDescriptionWithGemini from "../services/geminiService.js"

export async function listPosts (req, res)
{
    const posts =  await getAllPosts();
    res.status(200).json(posts);
}

export async function createNewPost(req, res){
    const newPost = req.body;
    try{
        const postCreated = await createPost(newPost);
        res.status(200).json(postCreated);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição."})
    }
}

export async function uploadImg(req, res) {
    const newPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try{
        const postCreated = await createPost(newPost);
        const updatedImg = `uploads/${postCreated.insertedId}.png`
        fs.renameSync(req.file.path, updatedImg)
        res.status(200).json(postCreated);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição."})
    }
}

export async function updateNewPost(req, res){
    const id = req.params.id;
    const urlImg = `http://localhost:3000/${id}.png`
    try {
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`)
        const description = await createDescriptionWithGemini(imgBuffer)

        const post = {
            imgUrl: urlImg,
            descricao: description,
            alt: req.body.alt
        }

        const createdPost = await updatePost(id, post);
        res.status(200).json(createdPost);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição."});
    }
}