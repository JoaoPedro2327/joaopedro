// Lista de nomes dos clientes
let listaNomes = [];
// Conjunto de e-mails únicos
let conjuntoEmails = new Set();
// Mapa de IDs e telefones dos clientes
let mapaTelefones = new Map();

// Cadastro de 10 clientes
for (let i = 0; i < 10; i++) {
  let nome = prompt("Digite o nome do cliente:");
  let email = prompt("Digite o e-mail do cliente:");
  let id = prompt("Digite o ID do cliente:");
  let telefone = prompt("Digite o telefone do cliente:");

  // Adicionando na lista
  listaNomes.push(nome);
  // Adicionando no conjunto de e-mails
  conjuntoEmails.add(email);
  // Adicionando no mapa de ID e telefone
  mapaTelefones.set(id, telefone);
}

// Exibindo os dados cadastrados
console.log("Lista de Nomes Cadastrados:");
console.log(listaNomes);

console.log("Conjunto de E-mails Únicos:");
console.log([...conjuntoEmails]);

console.log("Mapa de Telefones por ID:");
mapaTelefones.forEach((telefone, id) => {
  console.log(`ID: ${id}, Telefone: ${telefone}`);
});
