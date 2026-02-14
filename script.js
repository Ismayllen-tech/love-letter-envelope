document.addEventListener("DOMContentLoaded", () => {

  const wrap = document.getElementById("envelopeWrap");
  const openBtn = document.getElementById("openBtn");

  if (!wrap || !openBtn) {
    alert("Erro: elementos não encontrados.");
    return;
  }

  let alreadyOpened = false;

  openBtn.addEventListener("click", () => {

    if (alreadyOpened) return;
    alreadyOpened = true;

    // desativa botão imediatamente
    openBtn.disabled = true;

    // força o navegador a aplicar a classe visualmente
    requestAnimationFrame(() => {
      wrap.classList.add("open");

      // aguarda a animação COMPLETAR
      setTimeout(() => {
        window.location.assign("message.html");
      }, 1200); // tempo seguro
    });

  });

});
