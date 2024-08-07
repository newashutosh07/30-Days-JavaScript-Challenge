/*
const sayAshutosh = () => {
  console.log("Ashutosh");
};

const changeMe = setTimeout(() => {
  document.querySelector("h1").innerHTML = "Ashutosh Chaudhary";
}, 1000);

document.querySelector("#stop").addEventListener("click", () => {
  clearTimeout(changeMe);
  console.log("stop");
});
*/

let intervalID;

document.getElementById("start").addEventListener("click", () => {
  const sayDate = function () {
    console.log("Ashutosh", Date.now());
  };
  intervalID = setInterval(sayDate, 1000, "hi");
});

document.getElementById("stop").addEventListener("click", () => {
  clearInterval(intervalID);
});
