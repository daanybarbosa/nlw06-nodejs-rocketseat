import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin"; 

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

// Rotas dentro da API
router.post("/users", createUserController.handle);

// se utilizar esse metodo todas as rotas abaixo desse middleware serão obrigadas a utiliza-los.
// router.use(ensureAdmin); 

// para evitar isso, iremos passar o middleware diretamente dentro da rota que esse middleware precisa ser inserido, entao iremos inclui-lo entre o path e a função da rota.
// router.post("/tags", createTagController.handle);
router.post("/tags", ensureAdmin, createTagController.handle);

export { router };