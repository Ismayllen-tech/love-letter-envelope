const wrap = document.getElementById("envelopeWrap");
const openBtn = document.getElementById("openBtn");

let opened = false;

function openOrGo(){
  if(!opened){
    wrap.classList.add("open");
    opened = true;
  }else{
    window.location.href = "message.html";
  }
}

wrap?.addEventListener("click", openOrGo);
openBtn?.addEventListener("click", (e) => {
  e.preventDefault();
  openOrGo();
});
