import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 7,
  },
});

// Vamos utilizar o UserModel para fazer as operações no banco de dados.

// Dentro do método model,vamos inserir como primeiro parâmetro o schema, que é o nome do model(ele vai ser criado no database, que fica no mongodb) e como segundo parâmetro, você instancia o novo objeto schema, que é a estrutura do model.
export const UserModel = mongoose.model("Users", userSchema);

