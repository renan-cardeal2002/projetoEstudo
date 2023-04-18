import { Router, Request, Response } from "express";
import ProdController from "./controllers/ProdController";

const routes = Router();

routes.get("/vazio", ProdController.teste);
routes.post("/vazio", ProdController.testePost);

export default routes;
