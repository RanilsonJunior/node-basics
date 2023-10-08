// O fs serve para usar junto com o path, para manipular arquivos, fazendo criar, ler e renomear eles.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// criar uma pasta
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }
  console.log("Pasta criada com sucesso");
});

// Dessa forma ele vai conseguir ler o texto todo, após usar o appendFile, porquê os assíncronos estão dentro do writeFile, com isso ele vai fazer um de cada vez.
// criar um arquivo ou sobrescrever por completo
fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criada com sucesso!");

    fs.appendFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "hello world",
      (error) => {
        if (error) {
          return console.log("Error: ", error);
        }
        console.log("Arquivo modificado com sucesso");
      }
    );

    // ler arquivo
    fs.readFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Error: ", error);
        }
        console.log(data);
      }
    );
  }
);
