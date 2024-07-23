// Task 1

let heading = document.getElementById("myH1");
heading.textContent = "New Text";

// Task 2
let secHead = document.querySelector(".myH2");
secHead.style.backgroundColor = "red";

// Task 3
let div1 = document.createElement("div");
document.body.append(div1);

// Task 4
let li = document.createElement("li");
document.getElementById("ul").appendChild(li);

//Task 5
heading.remove();

//Task 6
const div2 = document.getElementById("div2");
div2.lastElementChild.remove();

//Task 7
const img1 = document.getElementById("img1");
img1.src = "yuna.jpeg";

// Task 8
let SecLi = document.createElement("li");
SecLi.classList.add("secondList");
let ul = document.getElementById("ul");
ul.appendChild(SecLi);
document.querySelector("ul").firstElementChild.classList.remove("3rdList");

// Task 9
let myBtn = document.getElementById("myBtn");
let changeTextPara = document.getElementById("changeTextPara");
myBtn.addEventListener("click", () => {
  changeTextPara.textContent = "Text has been Changed!";
});

//Task 10
let div3 = document.getElementById("div3");
div3.addEventListener("mouseover", () => {
  div3.style.borderColor = "red";
});
