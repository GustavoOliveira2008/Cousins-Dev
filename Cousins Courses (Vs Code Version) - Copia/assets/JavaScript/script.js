document.addEventListener("DOMContentLoaded", () => {
  // ===== MENU =====
  const btn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const menu = document.getElementById("menu");

  if (btn && menu && closeBtn) {
    btn.addEventListener("click", () => {
      menu.classList.add("open");
    });

    closeBtn.addEventListener("click", () => {
      menu.classList.remove("open");
    });
  }

  // ===== ANIMAÇÃO SCROLL =====
  const boxes = document.querySelectorAll(".box");

  function checkBoxes() {
    const triggerBottom = window.innerHeight * 0.8;

    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add("show");
      }
    });
  }

  window.addEventListener("scroll", checkBoxes);
  window.addEventListener("load", checkBoxes);

  // ===== PESQUISA =====
  const searchInput = document.getElementById("search");

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const valor = searchInput.value.toLowerCase();

      boxes.forEach(box => {
        const texto = box.textContent.toLowerCase();

        box.style.display = texto.includes(valor) ? "block" : "none";
      });
    });
  }
});
