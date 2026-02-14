document.addEventListener("DOMContentLoaded", function () {

  const openBtn = document.getElementById("openBtn");
  const wrap = document.getElementById("envelopeWrap");

  if (!openBtn) {
    alert("Botão não encontrado.");
    return;
  }

  openBtn.addEventListener("click", function () {

    if (wrap) {
      wrap.classList.add("open");
    }

    setTimeout(function () {

      const isGitHub = window.location.hostname.includes("github.io");

      if (isGitHub) {
        window.location.href = "/love-letter-envelope/message.html";
      } else {
        window.location.href = "message.html";
      }

    }, 1000);

  });

});

