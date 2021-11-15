const express = require('express')

const app = express();

/** Primeira rota
 * GET -> Buscar uma informação dentro da aplicação ou na API
 * POST -> Inserir (Criar) uma informação dentro da API 
 * PUT -> Alterar uma informação - dados do usuario, endereço, e etc
 * DELETE -> Remover uma informação/um dado.
 * PATCH -> Alterar uma informação especifica - alterar o avatar ou senha do usuario 
 * */ 

// Primeira rota -> busca uma informação
//get(recurso(rota), )
app.get("/test", (request, response) => {
    // Request -> Entrando
    // Response -> Saindo
    return response.send("Olá NLW");
});

// No Insomnia criar uma rota post e visualizar o retorno pelo: localhost:3000/test-post
app.post("/test-post", (request, response) => {
    return response.send("Olá NLW metodo POST")
})

//porta - http://localhost:3000
app.listen(3000, () => {
    console.log("Server is running")
});