let listaEstudantes = [
  {
    nome: "Ângelo",
    nota1: 10,
    nota2: 10,
  },
  {
    nome: "Jesica",
    nota1: 10,
    nota2: 8,
  },
  {
    nome: "Ted",
    nota1: 5,
    nota2: 7,
  },
];

function calcularMedia(nota1, nota2) {
  let media = (nota1 + nota2) / 2;
  return media;
}

for (estudante of listaEstudantes) {
  let mediaEstudante = calcularMedia(estudante.nota1, estudante.nota2);
  let estudanteNome = estudante.nome;

  if (mediaEstudante >= 7) {
    alert(`
      A média do(a) aluno(a) ${estudanteNome} é: ${mediaEstudante}
      Parabéns, ${estudanteNome}! Você foi aprovado(a) no concurso!
      `);
  } else {
    alert(`
      A média do(a) aluno(a) ${estudanteNome} é: ${mediaEstudante}
      Não foi dessa vez, ${estudanteNome}! Tente novamente!
      `);
  }
}
