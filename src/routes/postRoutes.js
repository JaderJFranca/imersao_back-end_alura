import express from "express";
import multer from "multer";
import cors from "cors";

import { listPosts, createNewPost, uploadImg, updateNewPost } from "../controllers/postController.js";

const corsOptions = {
    origin: "http://localhost:8000",
    optionsSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, 'uploads/');
    }, 
    filename: function(req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({dest: "./uploads", storage});

const routes = (app) => {
    app.use(express.json());

    app.use(cors(corsOptions));

    app.get("/posts", listPosts);
    
    app.post("/posts", createNewPost);

    app.post("/upload", upload.single("img"), uploadImg)

    app.put("/upload/:id", updateNewPost )
};

export default routes;