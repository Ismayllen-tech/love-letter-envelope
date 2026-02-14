document.addEventListener("DOMContentLoaded", function () {

  const wrap = document.getElementById("envelopeWrap");
  const openBtn = document.getElementById("openBtn");

  if (!wrap || !openBtn) {
    console.log("Elemento não encontrado.");
    return;
  }

  openBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Ativa animação
    wrap.classList.add("open");

    // Espera animação terminar e redireciona
    setTimeout(function () {
      window.location.href = "message.html";
    }, 1000); // tempo da animação
  });

});
