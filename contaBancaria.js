class ContaBancaria {
  constructor(saldo = 0) {
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  sacar(valor) {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente");
    }
  }
}

// Teste:
const minhaConta = new ContaBancaria(80);
minhaConta.sacar(55);
console.log(`Saldo final: ${minhaConta.saldo}`);
