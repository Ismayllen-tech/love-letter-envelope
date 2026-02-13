const wrap = document.getElementById("envelopeWrap");
const openBtn = document.getElementById("openBtn");

function openAndGo() {
  // adiciona classe que ativa a animação
  wrap.classList.add("open");

  // desativa botão para evitar clique duplo
  openBtn.disabled = true;

  // tempo da animação (900ms no CSS)
  setTimeout(() => {
    window.location.href = "message.html";
  }, 1000); // 1 segundo
}

// Clique no botão abre e já redireciona
openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  openAndGo();
});
