import { MongoClient } from 'mongodb';

/**
 * Conecta ao banco de dados MongoDB utilizando a string de conexão fornecida.
 * 
 * @param {string} stringConexao A string de conexão para o banco de dados MongoDB.
 * @returns {MongoClient} Um objeto MongoClient para interagir com o banco de dados.
 */
export default async function conectarAoBanco(stringConexao) {
  // Variável para armazenar o cliente MongoDB
  let mongoClient;

  try {
    // Cria um novo cliente MongoDB com a string de conexão fornecida
    mongoClient = new MongoClient(stringConexao);

    // Exibe uma mensagem indicando que a conexão está sendo estabelecida
    console.log('Conectando ao cluster do banco de dados...');

    // Tenta estabelecer a conexão com o banco de dados
    await mongoClient.connect();

    // Exibe uma mensagem de sucesso caso a conexão seja estabelecida
    console.log('Conectado ao MongoDB Atlas com sucesso!');

    // Retorna o cliente MongoDB para uso em outras partes do código
    return mongoClient;
  } catch (erro) {
    // Captura e exibe qualquer erro que ocorra durante a conexão
    console.error('Falha na conexão com o banco!', erro);

    // Encerra o processo em caso de falha na conexão
    process.exit();
  }
}