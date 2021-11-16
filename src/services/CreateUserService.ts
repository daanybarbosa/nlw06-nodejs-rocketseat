// Criação de usuario
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

// I - no inicio só para facilitar na compreensao que é uma interface 
interface IUserRequest {
    name: string;
    email: string; 
    admin?: boolean; //opcional 
}

class CreateUserService {
    async execute({name, email, admin} : IUserRequest){

        //Não é permitido cadastrar mais de um usuario com o mesmo e-mail
        const usersRepository = getCustomRepository(UsersRepositories);

        console.log("Email", email);

        // se o email nao estiver preenchido 
        if(!email){
            throw new Error("Email incorrect");
        };
        
        //ira pesquisar pelo o email se o usuario ja existe
        const userAlreadyExists = await usersRepository.findOne({ 
            email,
         });

        //se o usuario já existir - ira lançar uma excessao/erro
        if(userAlreadyExists){
            throw new Error("User already exists");
        };

        //instancia do objeto 
        const user = usersRepository.create({
            name,
            email,
            admin
        });

        //Salvar o usuario 
        await usersRepository.save(user);

        return user;
    };
};

export { CreateUserService };