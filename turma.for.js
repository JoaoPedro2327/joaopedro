// Exercício 3 - Lista de alunos
let turma = [
  { nome: "João", nota: 7 },
  { nome: "Maria", nota: 9 },
  { nome: "Pedro", nota: 6 }
];

for (let i = 0; i < turma.length; i++) {
  console.log(turma[i].nome + ": " + turma[i].nota);
}

// Exercício 8 - Média da turma
let soma = 0;
for (let i = 0; i < turma.length; i++) {
  soma += turma[i].nota;
}
let media = soma / turma.length;
console.log("Média da turma: " + media);

// Exercício 10 - Verificação de aprovação
for (let aluno of turma) {
  if (aluno.nota >= 7) {
    console.log(aluno.nome + " está aprovado");
  } else {
    console.log(aluno.nome + " está reprovado");
  }
}
