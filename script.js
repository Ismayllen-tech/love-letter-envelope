document.addEventListener("DOMContentLoaded", () => {

  const wrap = document.getElementById("envelopeWrap");
  const openBtn = document.getElementById("openBtn");

  if (!wrap || !openBtn) {
    alert("Erro: elementos não encontrados.");
    return;
  }

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();

    // ativa animação
    wrap.classList.add("open");

    // desativa botão
    openBtn.disabled = true;
    openBtn.textContent = "Abrindo…";

    // espera animação e redireciona
    setTimeout(() => {
      window.location.href = "https://ismayllen-tech.github.io/love-letter-envelope/message.html";
    }, 1200);

  });

});
