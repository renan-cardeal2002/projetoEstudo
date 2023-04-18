import fs from "fs";

export class ProdService {
  public writeProdutos(produtos: any) {
    fs.writeFile("produtos.json", JSON.stringify(produtos), () => {
      console.log("ok");
    });
  }
  public async readProducts() {
    return fs.readFileSync("produtos.json");
  }
}

export default new ProdService();
