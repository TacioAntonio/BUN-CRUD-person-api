import { Elysia } from "elysia";
import PersonsController from "./app/controllers/persons";
const routes = new Elysia();

routes
    .get("/persons", PersonsController.getAll)
    .get("/person/:id", PersonsController.getById)
    .post("/person/create", PersonsController.create)
    .put("/person/update/:id", PersonsController.update)
    .delete("/person/delete/:id", PersonsController.delete);

export default routes;
