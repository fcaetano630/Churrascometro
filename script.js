let adultos = document.getElementById("adultos");
let crianca = document.getElementById("criancas");
let duracao = document.getElementById("duracao");
let botao = document.querySelector("button");

let resultado = document.getElementById("resultado");

function calcular() {
  let qtduracao = duracao.value;
  let qtdAdultocarne = adultos.value * carnePP(qtduracao);
  let qtCriancacarne = (crianca.value * carnePP(qtduracao)) / 2;
  let qtcarne = qtdAdultocarne + qtCriancacarne;
  console.log(qtcarne);

  let qtdAdultocerveja = adultos.value * cervejaPP(qtduracao);
  console.log(qtdAdultocerveja);

  let qtBebida =
    adultos.value * bebidaPP(qtduracao) +
    (crianca.value / 2) * bebidaPP(qtduracao);
  console.log(qtBebida + " mls de bebida");

  document.getElementById("resultado").innerHTML = `<p>${
    qtcarne / 1000
  } kg de carne</p>`;
  document.getElementById("resultado").innerHTML += `<p>${
    qtdAdultocerveja / 1000
  } litros de cerveja</p>`;
  document.getElementById("resultado").innerHTML += `<p>${
    qtBebida / 1000
  } litros de refrigerante/água</p>`;
}

function carnePP(qtduracao) {
  if (qtduracao >= 6) {
    return 650;
  } else {
    return 400;
  }
}

function cervejaPP(qtduracao) {
  if (qtduracao >= 6) {
    return 2000;
  } else {
    return 1200;
  }
}

function bebidaPP(qtduracao) {
  if (qtduracao >= 6) {
    return 1500;
  } else {
    return 1000;
  }
}

botao.addEventListener("click", calcular);
