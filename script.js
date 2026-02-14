document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.getElementById("openBtn");
  const wrap = document.getElementById("envelopeWrap");

  if (!openBtn) {
    alert("Botão não encontrado.");
    return;
  }

  openBtn.addEventListener("click", function () {
    if (wrap) wrap.classList.add("open");

    setTimeout(function () {
      window.location.href = "message.html";
    }, 1000);
  });
});
