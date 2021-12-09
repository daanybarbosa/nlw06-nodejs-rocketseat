// Função que irá verificar o usuário é um administrador e se terá acesso a determinada rota

import { Request, Response, NextFunction } from "express"

export function ensureAdmin(request: Request, response: Response, next: NextFunction) {

    //Verificar se o usuario admin
    //const admin = false;
    const admin = true;

    //Verificar se o usuario é admin
    if (admin) {
        return next();
    }

    //status 401 -> Unauthorized - sem autorização (Protocolo HTTP)
    return response.status(401).json({
        error: "Unauthorized",
    });

};
