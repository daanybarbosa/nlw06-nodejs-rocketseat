import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";


class CreateTagService {

    //metodo - executar
    async execute(name: string){
        //chamar/referenciar o repositorio 
        const tagsRepositories = getCustomRepository(TagsRepositories);

        //verificar se a tag esta sem nome 
        if(!name){
            throw new Error("Incorrect name!")
        }

        //verificar se existe uma tag com o mesmo nome 
        //ira buscar o "name" dentro do banco de dados 
        //findOne -> SELECT * FROM TAGS WHERE NAME = 'NAME'
        const tagAlreadyExists = await tagsRepositories.findOne({
            name 
        });

        //se ja existir uma tag
        if(tagAlreadyExists){
            throw new Error("Tag already exists");
        }

        //se nao existir a tag ira cria-la
        const tag = tagsRepositories.create({
            name,
        });

        //ira salvar no banco de dados
        await tagsRepositories.save(tag);

        return tag;
    }
}

export { CreateTagService }