import mongoose from "mongoose";

// Vai retornar uma promise.
export const connectToDatabase = async () => {
    // Esse connect vai receber dois parâmetros, o primeiro é o link com o como o username e o password, e o segundo parâmetro é um then e um catch, para saber se vai conseguir se conectar ou dar erro.
  await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejsdicasparadev.3roekp5.mongodb.net/database?retryWrites=true&w=majority`
    )
.then(() => console.log("Conexão ao banco de dados realizada com sucesso!"))
    .catch((error) => {
      console.log(
        "Ocorreu um erro ao se conectar com o banco de dados ",
        error);
    });
};
