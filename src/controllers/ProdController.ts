import { Request, Response } from "express";
import fs from "fs";

class ProdController {
  public teste(req: Request, res: Response) {
    try {
      const { nome, idade } = req.query;
      const pessoa = {
        nome,
        idade,
      };

      const pessoaGroup = [
        {
          nome: "Joao",
          idade: 21,
        },
        { nome: "Sigolo", idade: 19 },
        { nome: "Renan", idade: 21 },
      ];

      let contador = pessoaGroup.reduce((total, x) => total + x.idade, 0);
      let map1 = pessoaGroup.map((x) => {
        return { nome: x.nome, idade: x.idade * 2 };
      });

      pessoaGroup.forEach((r) => {
        console.log(r);
      });

      fs.writeFile("teste.json", JSON.stringify(pessoa), () => {
        console.log("ok");
      });

      res.json(map1);
    } catch (err) {
      res.json("erro:");
    }
  }
  public testePost(req: Request, res: Response) {
    try {
      let { nome, idade, sexo, altura } = req.body;

      res.json("");
    } catch (err) {
      res.json("erro:");
    }
  }
}

export default new ProdController();
