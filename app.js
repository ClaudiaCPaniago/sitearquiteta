document.querySelectorAll(".filtro").forEach((botao) => {
  botao.addEventListener("click", () => {
    document
      .querySelectorAll(".filtro")
      .forEach((b) => b.classList.remove("ativo"));
    botao.classList.add("ativo");

    const comodo = botao.dataset.comodo;
    const itens = document.querySelectorAll(".galeria .item");

    itens.forEach((item) => {
      if (comodo === "todos" || item.dataset.comodo === comodo) {
        item.style.display = "block";
        item.style.opacity = "1";
      } else {
        item.style.display = "none";
        item.style.opacity = "0";
      }
    });
  });
});

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});
