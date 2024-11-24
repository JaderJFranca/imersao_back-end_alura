import express from "express"; // Importa o framework Express para criar e gerenciar o servidor web.
import routes from "./src/routes/postRoutes.js"; // Importa as rotas definidas no arquivo postRoutes.js.

const app = express(); // Inicializa a aplicação Express.

// Middleware para servir arquivos estáticos da pasta "uploads".
// Isso permite acessar diretamente os arquivos armazenados em "uploads" através de URLs.
app.use(express.static("uploads"));

// Define as rotas da aplicação utilizando a configuração importada.
routes(app);

// Inicia o servidor na porta 3000 e define um callback para confirmar que o servidor está em execução.
app.listen(3000, () => {
    console.log("Servidor escutando..."); // Exibe uma mensagem no console indicando que o servidor está ativo.
});
