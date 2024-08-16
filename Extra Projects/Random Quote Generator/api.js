const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.open(
  "GET",
  "https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10"
);
xhr.setRequestHeader("x-rapidapi-key", "Sign Up for Key");
xhr.setRequestHeader(
  "x-rapidapi-host",
  "andruxnet-random-famous-quotes.p.rapidapi.com"
);

xhr.send(data);
