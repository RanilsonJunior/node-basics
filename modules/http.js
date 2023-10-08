import { createServer } from "node:http";

const port = 8080;

const app = createServer((req, res) => {
    res.write("lila");
    res.end()
})

app.listen(port, () => console.log(`Rodando na porta ${port}!`))