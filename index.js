class ContaBancaria {
    constructor(agencia, numero, tipo, saldo) {
      this.agencia = agencia;
      this.numero = numero;
      this.tipo = tipo;
      this._saldo = saldo;
    }
  
    get saldo() {
      return this._saldo;
    }
  
    set saldo(valor) {
      this._saldo = valor;
    }
  
    sacar(valor) {
      if (valor <= this._saldo) {
        this._saldo -= valor;
        alert(`Saque de R$${valor} realizado com sucesso. Novo saldo: R$${this._saldo}`);
      } else {
        alert('Saldo insuficiente para realizar o saque.');
      }
    }
  
    depositar(valor) {
      this._saldo += valor;
      alert(`Depósito de R$${valor} realizado com sucesso. Novo saldo: R$${this._saldo}`);
    }
  }
  
  class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, saldo, cartaoCredito) {
      super(agencia, numero, 'conta corrente', saldo);
      this._cartaoCredito = cartaoCredito;
    }
  
    get cartaoCredito() {
      return this._cartaoCredito;
    }
  
    set cartaoCredito(valor) {
      this._cartaoCredito = valor;
    }
  }
  
  class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero, saldo) {
      super(agencia, numero, 'conta poupança', saldo);
    }
  }
  
  class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero, saldo) {
      super(agencia, numero, 'conta universitária', saldo);
    }
  
    sacar(valor) {
      if (valor <= 500) {
        super.sacar(valor);
      } else {
        alert('Você não pode sacar mais de R$500 em uma conta universitária.');
      }
    }
  }
  
  // Solicitação dos dados do usuário
  const agencia = prompt('Digite o número da agência:');
  const numero = prompt('Digite o número da conta:');
  const saldoInicial = parseFloat(prompt('Digite o saldo inicial:'));
  const tipoConta = prompt('Digite o tipo de conta (conta corrente, conta poupança ou conta universitária):');
  
  let conta;
  
  if (tipoConta === 'conta corrente') {
    const cartaoCredito = parseFloat(prompt('Digite o limite do cartão de crédito:'));
    conta = new ContaCorrente(agencia, numero, saldoInicial, cartaoCredito);
  } else if (tipoConta === 'conta poupança') {
    conta = new ContaPoupanca(agencia, numero, saldoInicial);
  } else if (tipoConta === 'conta universitária') {
    conta = new ContaUniversitaria(agencia, numero, saldoInicial);
  } else {
    alert('Tipo de conta inválido. Use "conta corrente", "conta poupança" ou "conta universitária".');
  }
  
  // Exemplo de uso:
  const operacao = prompt('Escolha a operação (depositar ou sacar):');
  const valorOperacao = parseFloat(prompt('Digite o valor da operação:'));
  
  if (operacao === 'depositar') {
    conta.depositar(valorOperacao);
  } else if (operacao === 'sacar') {
    conta.sacar(valorOperacao);
  } else {
    alert('Operação inválida. Use "depositar" ou "sacar".');
  }
  
  alert(`Saldo atual da conta: R$${conta.saldo}`);
  