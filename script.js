document.addEventListener("DOMContentLoaded", function () {

  const openBtn = document.getElementById("openBtn");
  const wrap = document.getElementById("envelopeWrap");

  if (!openBtn) {
    alert("Botão não encontrado.");
    return;
  }

  openBtn.onclick = function () {

    // animação visual (se existir)
    if (wrap) {
      wrap.classList.add("open");
    }

    // redireciona diretamente
    setTimeout(function () {
      window.location = "/love-letter-envelope/message.html";
    }, 800);

  };

});
