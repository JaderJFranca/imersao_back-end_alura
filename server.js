import express from "express";

const posts = [
    {
        id: 1,
        descricao: "Foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Paisagem incrível",
        imagem: "https://source.unsplash.com/random/300x200"
    },
    {
        id: 3,
        descricao: "Cachorro fofo",
        imagem: "https://picsum.photos/id/237/300/200"
    },
    {
        id: 4,
        descricao: "Comida deliciosa",
        imagem: "https://loremflickr.com/300/200/food"
    },
    {
        id: 5,
        descricao: "Gato preguiçoso",
        imagem: "https://placekitten.com/300/200"
    }
];

const app = express();
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostPorID(id){
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
}

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id)
    res.status(200).json(posts[index]);
});