import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

//repositorio da entidade e esta dentro do User 
@EntityRepository(User)
//extends - para pegar os metodos definidos dentro da classe Repository - metodos por padrao
//implements - importar os metodos da interface, e da para manipular o implemento da forma como quiser.
//User - tipo de usuario (ira pegar o User)
class UsersRepositories extends Repository<User>{}

export { UsersRepositories };


