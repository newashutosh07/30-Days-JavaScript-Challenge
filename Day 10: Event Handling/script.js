/*
// Task 1
let btn = document.getElementById("myBtn");
let para = document.getElementById("1stP");
btn.addEventListener("click", () => {
  para.textContent = "New Text";
});

// Task 2
let img1 = document.getElementById("img1");
img1.addEventListener("dblclick", () => {
  if ((img1.style.visibility = "visible")) {
    img1.style.visibility = "hidden";
  } else {
    img1.style.visibility = "visible";
  }
});

// Task 3
let firstDiv = document.querySelector(".firstDiv");
firstDiv.addEventListener("mouseover", () => {
  firstDiv.style.backgroundColor = "red";
});

// Task 4
firstDiv.addEventListener("mouseout", () => {
  firstDiv.style.backgroundColor = "yellow";
});

// Keyboard Events
// Task 5
const textBox = document.getElementById("textBox");
const output = document.getElementById("output");

textBox.addEventListener("keydown", (e) => {
  console.log(`You Pressed ${e.key}`);
});

// Task 6
textBox.addEventListener("keyup", (e) => {
  output.textContent = e.target.value;
});

// Form Events
// Task 7
let form = document.querySelector("form");
let age = document.querySelector("#ageInput").value;
const errorMessage = document.getElementById("errMsg");

form.addEventListener("submit", (e) => {
  if (age < 18) {
    e.preventDefault();
    errorMessage.textContent =
      "You must be 18 or above to loggin to this website";
  }
  errorMessage.style.color = "red";
});

// Task 8
const animeNames = document.getElementById("animeNames");
const displayAnime = document.getElementById("displayAnime");

animeNames.addEventListener("change", (e) => {
  displayAnime.textContent = e.target.value;
});

// Task 9
document.querySelector("ul").addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

*/
// Task 10

document.addEventListener("DOMContentLoaded", () => {
  let childBtn = document.querySelector("#childBtn");
  let parent = document.querySelector("#parent");

  parent.addEventListener("click", (e) => {
    if (e.target.matches(".childElement")) {
      alert("New Element was Clicked!");
    }
  });

  childBtn.addEventListener("click", () => {
    let childElement = document.createElement("div");
    childElement.classList.add("childElement");
    childElement.textContent = "I am Child Element";
    parent.appendChild(childElement);
  });
});
