const WHATSAPP_NUMBER = "5551980556184";

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  const message = link.dataset.message || "Olá! Vim pelo site do PS2 Turbo 2.0.";
  link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
});

const menuButton = document.getElementById("menuButton");
const navMenu = document.getElementById("navMenu");

menuButton.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { opacity: 0, transform: "translateY(22px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          { duration: 550, easing: "ease-out", fill: "both" }
        );
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".feature-card, .buy-card, .guarantee-box").forEach((el) => observer.observe(el));
