import { Router, Request, Response } from "express";
import ProdController from "./controllers/Prod.controller";

const routes = Router();

routes.get("/produtos", ProdController.getProdutos);
routes.post("/produtos", ProdController.postProdutos);

export default routes;
