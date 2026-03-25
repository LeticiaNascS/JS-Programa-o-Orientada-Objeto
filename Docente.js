import User from "./User.js";

export default class Docente extends User {
  constructor(nome, email, nascimento, role = "docente", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  aprovarEstudantes(estudante, curso) {
    return ` estudande ${estudante} passou no curso de ${curso}, responsavel ${this.nome}`;
  }
  reprovarEstudante(estudante, curso) {
    return ` estudande ${estudante} reprovou no curso de ${curso}, responsavel ${this.nome}`;
  }
}
// const novaDocente = new Docente ('Ana', 'A@', '01-01-1800')
// console.log(novaDocente.aprovarEstudantes('Leticia', 'Engenharia'))
