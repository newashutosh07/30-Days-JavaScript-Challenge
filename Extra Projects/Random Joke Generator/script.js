const setup = document.querySelector(".setup");
const delivery = document.querySelector(".delivery");
const btn = document.getElementById("submitBtn");

btn.addEventListener("click", getJokes);

async function getJokes() {
  let response = await fetch("https://v2.jokeapi.dev/joke/Any");
  let data = await response.json();
  setup.textContent = data.setup;
  setTimeout(() => {
    delivery.textContent = data.delivery;
  }, 2000);
}
