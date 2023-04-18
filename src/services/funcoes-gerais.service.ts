class FuncoesGeraisService {
  calcularTotal(array: any, campo: string) {
    return array.reduce((total, x) => total + x[campo], 0);
  }

  //   let map1 = pessoaGroup.map((x) => {
  //     return { nome: x.nome, idade: x.idade * 2 };
  //   });

  //   pessoaGroup.forEach((r) => {
  //     console.log(r);
  //   });
}

export default new FuncoesGeraisService();
