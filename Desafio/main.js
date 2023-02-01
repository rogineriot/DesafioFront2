const itens = document.querySelectorAll(".listaItem");

function clicou(e) {
  itens.forEach((item) => {
    item.classList.remove("ativo");
  });
  e.target.classList.add("ativo");
}
itens.forEach((item) => {
  item.addEventListener("click", clicou);
});

const botao = document.querySelector(".botao");
const principal = document.querySelector(".principal");
const resultado = document.querySelector(".resultado");
const nota = document.querySelector(".nota");
let escolha = 0;

function enviar() {
  principal.classList.add("desativado");
  resultado.classList.add("ativo");

  itens.forEach((item) => {
    if (item.className.includes("ativo")) {
      escolha = item.innerText;
      nota.innerText = escolha;
    }
  });
}
botao.addEventListener("click", enviar);
