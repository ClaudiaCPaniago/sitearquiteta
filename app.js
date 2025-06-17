// Filtros do portfólio
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

// Botão voltar ao topo
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

// Menu mobile
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");
const menuIcon = document.getElementById("menu-icon");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");

  // Alternar ícone
  if (menu.classList.contains("active")) {
    menuIcon.classList.replace("fa-bars", "fa-times");
  } else {
    menuIcon.classList.replace("fa-times", "fa-bars");
  }
});

// Fechar menu ao clicar em um link
document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    menuIcon.classList.replace("fa-times", "fa-bars");
  });
});

// Fechar menu ao clicar fora
document.addEventListener("click", (e) => {
  if (!menu.contains(e.target) && !toggle.contains(e.target)) {
    menu.classList.remove("active");
    menuIcon.classList.replace("fa-times", "fa-bars");
  }
});

// Modo claro/escuro
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

// Verificar preferência do usuário
const currentTheme =
  localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

// Aplicar tema salvo
if (currentTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

// Alternar tema
themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.getAttribute("data-theme") === "dark";

  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeIcon.classList.replace("fa-sun", "fa-moon");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  }
});
