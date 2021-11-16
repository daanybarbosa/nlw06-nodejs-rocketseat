import "reflect-metadata";
const express = require('express');

import { router } from "./routes";

import "./database";

const app = express();

// O express nao entende o json por padrao, 
// entao, antes da criação das rotas, precisamos destacar o uso do json.
app.use(express.json);

//ira inserir as rotas dentro do Express
app.use(router);

app.listen(3000, () => {
    console.log("Server is running")
});