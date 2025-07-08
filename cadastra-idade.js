try {
  let idade = parseInt(prompt("Digite sua idade:"));
  if (isNaN(idade) || idade < 0) {
    throw "Idade inválida";
  }
  console.log("Idade válida: " + idade);
} catch (erro) {
  console.log("Erro: " + erro);
}
