const fadeIns = document.querySelectorAll(".fade-in");

window.addEventListener("load", () => {
  setTimeout(() => fadeIns.forEach(item => item.classList.add("on")), 400);
});
