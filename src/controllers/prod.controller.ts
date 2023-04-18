import { Request, Response } from "express";
import { ProdService } from "./../services/Prod.service";

class ProdController {
  public async getProdutos(req: Request, res: Response): Promise<Response> {
    try {
      const { nome } = req.query;
      const prod = new ProdService();
      const retorno: any = await prod.readProducts();
      const arquivo = JSON.parse(retorno.toString("utf-8"));
      const arrayFitlrado = arquivo.filter((prod: any) => prod.nome === nome);
      console.log(arrayFitlrado);

      return res.json(arrayFitlrado);
    } catch (err) {
      return res.json(`erro: ${err}`);
    }
  }
  public postProdutos(req: Request, res: Response) {
    try {
      const { nome, descricao, preco } = req.body;
      const produto = {
        nome,
        descricao,
        preco,
      };

      const prod = new ProdService();
      prod.writeProdutos(produto);

      res.json("ok");
    } catch (err) {
      res.json("erro:");
    }
  }
}

export default new ProdController();
