const user = {
  nome: "Letícia Nascimento",
  email: "let.lu.nascimento@gmail.com",
  nascimento: "2006-07-06",
  role: "estudante",
  ativo: true,

  exibirInfos: function () {
    console.log(this.nome, this.email);
  },
};
const admin = {
  nome: "Letícia ",
  email: "let.lu.@gmail.com",
  nascimento: "2006-07-06",
  role: "admin",
  ativo: true,
  criarCurso: function () {
    console.log("Curso Criado");
  },
};

Object.setPrototypeOf(admin, user);

admin.criarCurso();
admin.exibirInfos();
