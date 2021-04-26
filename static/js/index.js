const toggleMode = document.querySelector("#toggle-mode");
const body = document.body;

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  toggleMode.setAttribute("checked", true);
  body.classList.add("theme--dark");
} else {
  body.classList.add("theme--light");
}

toggleMode.addEventListener("change", function (e) {
  body.classList.toggle("theme--light");
  body.classList.toggle("theme--dark");
});
