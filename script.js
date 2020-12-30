const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeClassActiveFromPanels();
    panel.classList.add("active");
  });
});

function removeClassActiveFromPanels() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
