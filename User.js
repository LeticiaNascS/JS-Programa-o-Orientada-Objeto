export default class User {
  #nome;
  #email;
  #nascimento;
  #role;
  #ativo;
  constructor(nome, email, nascimento, role, ativo = true) {
    this.#nome = nome;
    this.#email = email;
    this.#nascimento = nascimento;
    this.#role = role || "estudante";
    this.#ativo = ativo;
  }
  #montaObjUser() {
    return {
      nome: this.#nome,
      email: this.#email,
      nascimento: this.#nascimento,
      role: this.#role,
      ativo: this.#ativo,
    };
  }
  criarPerfil() {
    return `${this.#nome}, bem vind@! `;
  }
  apagarPerfil() {
    return `${this.#nome} Perfil Apagado com sucesso`;
  }
  exibirInfos() {
    const objUser = this.#montaObjUser();
    return `${objUser.nome}, ${objUser.email}`;
  }
}

const novoUser = new User("leticia", "let@", "06-07-2006");
//console.log(novoUser);
//console.log(novoUser.exibirInfos());

//console.log(User.prototype.isPrototypeOf(novoUser));
