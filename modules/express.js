import express from "express";
import { UserModel } from "../src/models/user.model.js";

const app = express();

// Ler o body.
// Toda a requisição do body, é transformada em um objeto javascript que consegue ler através de req.body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/home", (req, res) => {
  res.status(200).json(req.body);
});

// PEGAR TODOS OS USUÁRIOS
app.get("/users", async (req, res) => {
  try {
    
    // O método find serve para procurar, e as chaves sozinhas, quer dizer que vai pegar tudo.
    const users = await UserModel.find({});

    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// PEGAR UM USUÁRIO SÓ POR ID
app.get("/users/:id", async (req, res) => {
  try {

    /* Ele tem que ter o mesmo nome do parâmetro depois do dois pontos. */
    const id = req.params.id;

    const user = await UserModel.findById(id);

    res.status(200).json(user);
  } catch (error) {

    // Está enviando como .send porque ele não quer enviar como json e sim como string.
    res.status(500).send(error.message);
  }
});

// CRIANDO UM USUÁRIO
app.post("/users", async (req, res) => {
  try {
    
    // Quando estiver recebendo os dados por POST, ira ter acesso ao req.body.
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// ATUALIZAR USUÁRIO
app.patch("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    // O primeiro parâmetro você passa o id, e como segundo parâmetro ira ser os campos que queremos modificar. Depois passamos um objeto que tem algumas opções sobre esse método, a que marcamos como true faz aparecer para nos, o retorno do registro todo atualizado.
    const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// DELETAR USUÁRIO
app.delete("/users/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const user = await UserModel.findByIdAndRemove(id);

    res.status(200).json(user);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const port = 5000;

app.listen(port, () => console.log(`Express rodando na porta ${port}!`));
