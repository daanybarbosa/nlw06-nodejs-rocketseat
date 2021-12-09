import "reflect-metadata";
import express, { Request, Response, NextFunction} from 'express';
import "express-async-errors"; //importar a biblioteca para o express pegar os erros assincronos

import { router } from "./routes";

import "./database";

const app = express();

// O express nao entende o json por padrao, 
// entao, antes da criação das rotas, precisamos destacar o uso do json.
app.use(express.json);

//ira inserir as rotas dentro do Express
app.use(router);

/**
 * middleware - para tratativa de errors
 * - é importante os middlewares estarem depois das rotas 
 * 
 * ira receber quatro parametros:
 *  - err: Error -> ira verificar se tem algum erro 
 *  - request: Request -> requisicao
 *  - response: Response -> resposta
 *  - next: NextFunction -> passar para o proximo passo/nivel da rota da aplicação
*/

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    
    //verificar se o que esta vindo no err, é igual ao erro que vem do "throw new Error"
    //instanceof -> instancia da classe Error
    if(err instanceof Error){
        return response.status(400).json({
            //ira salvar no json o tipo de erro
            error: err.message
        })
    }

    //caso seja outro erro 
    return response.status(500).json({
        status: "error",
        message: "Internal Server Error"
    })
});

app.listen(3000, () => {
    console.log("Server is running")
});