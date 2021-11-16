// -> server -> controller -> service -> ...
/**
 * No insomnia, criar um novo request (chamado: Create User) e colocar as seguintes informações:
    { 
        "name": "",
        "email": "",
        "admin": true
    }
 * 
 */

import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

class CreateUserController{
    async handle(request: Request, response: Response){
        console.log("Chamou aqui")
        //recuperar as informacoes de dentro da requisicao
        //as requisicoes serao recebidas de dentro do request.body - tudo que vem do parametro
        const { name, email, admin } = request.body;

        //enviar para o service
        const createUserService = new CreateUserService();

        const user = await createUserService.execute({name, email, admin});

        //ira recuperar essa informacao para o json 
        return response.json(user);
    }
}

export {CreateUserController}

