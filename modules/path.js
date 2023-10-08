// O path é um modulo que nos usamos para manipular diretórios e arquivos.
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Mostra o nome do arquivo atual.
console.log(path.basename(__filename));

// Mostra o diretório onde este arquivo está.
console.log(path.dirname(__filename));

// Mostra a extensão do arquivo.
console.log(path.extname(__filename));

// Cria um objeto Path com varias informações.
console.log(path.parse(__filename));

// O join é utilizado para juntar caminhos de arquivos
console.log(path.join(__dirname));
console.log(path.join(__dirname, "join+pasta", "join+arquivo.html"));

console.log("-------------------------------");
console.log(__filename);
console.log(__dirname);

// O parâmetro __filename é o nome do arquivo (com o caminho completo) e o __dirname é o diretório onde o arquivo foi encontrado (caminho completo).
