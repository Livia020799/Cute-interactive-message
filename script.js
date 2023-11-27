const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const GoodBtn = document.querySelector(".Good-btn");
const BadBtn = document.querySelector(".Bad-btn");
const MehBtn = document.querySelector(".Meh-btn");
const AlmostBtn = document.querySelector(".Almost-btn");

GoodBtn.addEventListener("click", () => {
  question.innerHTML = "Yay ^^!";
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";
});

BadBtn.addEventListener("click", () => {
  question.innerHTML = "Wish I was there to cuddle you :'(";
  gif.src =
    "https://media.giphy.com/media/U1fWij5wh8CMkDczUg/giphy.gif";
});

MehBtn.addEventListener("click", () => {
  question.innerHTML = "Nooo, Cheer up!";
  gif.src =
    "https://media.giphy.com/media/jRknn339p7emYjUu3u/giphy.gif";
});

AlmostBtn.addEventListener("click", () => {
  question.innerHTML = "Good job today!";
  gif.src =
    "https://media.giphy.com/media/5CnOzYQRSFnWw/giphy.gif";
});