export default class User {
  #nome
  #email
  #nascimento
  #role
  #ativo
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }
  criarPerfil() {
    return `${this.#nome}, bem vind@! `;
  }
  apagarPerfil(){
    return `${this.#nome} Perfil Apagado com sucesso`
  }
  exibirInfos() {
    return `${this.#nome}, ${this.#email}`;
  }
}

const novoUser = new User("leticia", "let@", "06-07-2006");
//console.log(novoUser);
//console.log(novoUser.exibirInfos());

//console.log(User.prototype.isPrototypeOf(novoUser));
