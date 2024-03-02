let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin"); // selecionando elemento com classe
let flipBtn = document.querySelector("#flip-button"); // selecionando elemento com id
let resetBtn = document.querySelector("#reset-button"); // selecionando elemento com id

// adcionando um evento de click , utilando uma função callback...
flipBtn.addEventListener("click", () => {
  // Declarando uma variável e usando uma função pra retorna um numero ...
  let i = Math.floor(Math.random() * 2);
  // desativando animação
  coin.computedStyleMap.animation = "none";
  // fazendo verificação
  if (i) {
    // utilizando a função para da  atraso na execução de uma parte do código..
    setTimeout(() => {
      coin.style.animation = "spin-heads 3s forwards";
    }, 100);
    heads++;
  } else {
    setTimeout(() => {
      coin.style.animation = "spin-tails 3s forwards";
    }, 100);
    tails++;
  }

  setTimeout(updateStats, 3000); // a função define o tempo de execução
  disableButton(); // essa função pra desativar o botão
});

function updateStats() {
  document.querySelector("#heads-count").textContent = `Heads:${heads}`;
  document.querySelector("#tails-count").textContent = `Tails:${tails}`;
}

function disableButton() {
  flipBtn.disabled = true;
  setTimeout(() => {
    flipBtn.disabled = false;
  }, 3000);
}

resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStats();
});
