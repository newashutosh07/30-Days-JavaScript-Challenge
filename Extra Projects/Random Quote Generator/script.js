async function getQuote() {
  let response = await fetch("https://api.quotable.io/random");
  let data = await response.json();
  console.log(data);
}

getQuote();
