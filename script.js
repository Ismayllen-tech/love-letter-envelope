const wrap = document.getElementById("envelopeWrap");
const openBtn = document.getElementById("openBtn");

let opened = false;

function openEnvelope() {
  if (opened) return;
  wrap.classList.add("open");
  opened = true;

  // Depois que abrir, o botão vira "Ler mensagem"
  openBtn.textContent = "Ler mensagem 💌";
  openBtn.setAttribute("data-state", "go");
}

function goToMessage() {
  window.location.href = "message.html";
}

// Clique no envelope abre (uma vez)
wrap.addEventListener("click", () => {
  openEnvelope();
});

// Clique no botão:
openBtn.addEventListener("click", (e) => {
  e.preventDefault();

  // Se ainda não abriu, abre
  if (!opened) {
    openEnvelope();
    return;
  }

  // Se já abriu, vai para a próxima página
  goToMessage();
});
