// import { Person } from "./person.js";
import dotenv from "dotenv";
import { connectToDatabase } from "./src/database/connect.js";

// Permiti utilizar as variáveis do .env na nossa aplicação.
dotenv.config();

// Tem que chamar a função depois do dotenv.config, porque caso seja antes dele, vai ser mostrado o valor null. Isso acontece pelo fato dele do dotenv não ter sido configurado ainda.
connectToDatabase();

// Sempre tem que deixar depois do dotenv.config()
// Está importando um arquivo.
import("./modules/express.js")
// import("./modules/path.js");
// import("./modules/fs2.js")
// import("./modules/http.js")

// const person = new Person("Ranilson");
// console.log(person.sayMyName());
