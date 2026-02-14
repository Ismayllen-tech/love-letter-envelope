document.addEventListener("DOMContentLoaded", () => {
  const wrap = document.getElementById("envelopeWrap");
  const openBtn = document.getElementById("openBtn");

  if (!wrap || !openBtn) {
    alert("Erro: envelopeWrap ou openBtn não encontrados no HTML.");
    return;
  }

  let clicked = false;

  function navigateToMessage() {
    const target = "message.html";

    console.log("[OK] Tentando navegar para:", target);

    // Tentativa 1
    try {
      window.location.href = target;
    } catch (e) {
      console.log("[ERRO] href falhou:", e);
    }

    // Tentativa 2
    setTimeout(() => {
      try {
        window.location.assign(target);
      } catch (e) {
        console.log("[ERRO] assign falhou:", e);
      }
    }, 100);

    // Tentativa 3
    setTimeout(() => {
      try {
        window.location.replace(target);
      } catch (e) {
        console.log("[ERRO] replace falhou:", e);
      }
    }, 200);

    // Fallback final (se tudo falhar)
    setTimeout(() => {
      console.log("[FALLBACK] Abrindo em nova aba:", target);
      window.open(target, "_blank");
    }, 400);
  }

  openBtn.addEventListener("click", () => {
    if (clicked) return;
    clicked = true;

    openBtn.disabled = true;
    openBtn.textContent = "Indo para a mensagem…";

    // Dispara animação
    wrap.classList.add("open");

    // Aguarda animação e navega
    setTimeout(() => {
      navigateToMessage();
    }, 1200);
  });
});
