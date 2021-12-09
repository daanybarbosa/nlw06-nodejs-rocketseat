import { Request, Response } from 'express';
import { CreateTagService } from '../services/CreateTagService';


class CreateTagController{
    
    async handle(request: Request, response: Response){

        //o parametro name, sera recebido pelo o corpo do objeto
        const { name } = request.body;

        const createTagService = new CreateTagService();

        //ira criar a tag
        const tag = await createTagService.execute(name);

        return response.json(tag);
    }
}

export { CreateTagController }