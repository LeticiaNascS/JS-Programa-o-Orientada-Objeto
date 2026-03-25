import User from "./User.js";

class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = true) {
    super(nome, email, nascimento, role, ativo);
  }

  criarCurso(nomeCurso,qtVagas){
    return `curso ${nomeCurso} criado com ${qtVagas} vagas`
  }
}

const novoAdmin = new Admin("rodrigo", "R@", "01-01-1900");
console.log(novoAdmin);
console.log(novoAdmin.criarCurso('JavaS', '20'));
