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

// criar um arquivo ou sobrescrever por completo
// O writeFile por padrão rescreve o conteúdo inteiro do arquivo, caso o arquivo já exista. Ele é assíncrono.
// O parâmetro writeFile recebe três parâmetros, o primeiro é o path, o segundo ira ser o conteúdo(do que vai aparecer dentro dele.), no último parâmetro vamos passar o callback, a função que vai ser executada quando essa escrita do arquivo for finalizada.
fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "hello node!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }
    console.log("Arquivo criada com sucesso!");
  }
);

// adicionar á um arquivo
// Ele é assíncrono.
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
// No segundo parâmetro temos que passar, qual sistema de caracteres esse arquivo está utilizando, e no terceiro parâmetro além do error, vamos passar o data, que e o conteúdo do arquivo que estamos lendo. Pode acontecer dele não ler tudo pelo fato do writeFile e o appendFile(no caso dele adicionar um novo texto no arquivo) não terem sidos concluídos ainda, para resolver isso, temos que colocar o appendFile e o readFile dentro do writeFile.
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
