document.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
  h1.style.opacity = 0;
  h1.style.transition = "opacity 1.5s ease-in-out";
  setTimeout(() => {
    h1.style.opacity = 1;
  }, 100);
});
