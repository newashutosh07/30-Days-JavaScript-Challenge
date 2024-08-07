const key = document.getElementById("key");

window.addEventListener("keydown", (e) => {
  key.textContent = e.key;
});
