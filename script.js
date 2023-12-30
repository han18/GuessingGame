"use strict";

const div = document.getElementById("div");
// document.querySelector(".number").textContent = "❖";
document.querySelector(".score").textContent = "20";

const head = document.createElement("h3");
head.style.color = "red";
head.style.fontSize = "20px";
head.style.backgroundColor = "white";
head.style.textAlign = "center";
head.textContent = "Let's play a guessing game!";

div.appendChild(head);

const secretNumber = Math.trunc(Math.random() * 10) + 1; // the 1 is to make it exactly 10 choices

// creating a variable decrease the number of times a user plays
let scoreCheck = 5;

// see if I could implement an function to do the repetitive code
function scoreRepeat() {
  if (scoreCheck > 0) {
    document.querySelector(".message").textContent = "Too High";
    scoreCheck--;
    document.querySelector(".score").textContent = scoreCheck;
  } else {
    document.querySelector(".message").textContent = "YOU LOST!";
  }
}

// selecting a button because a button triggers an event. the click event requires a second argument called eventHandler  to do something with the event and we pass in a function with its value
document.querySelector(".check").addEventListener("click", function () {
  const guessNum = Number(document.querySelector(".guess").value);
  if (!guessNum) {
    document.querySelector(".message").textContent = "No number";
  } else if (guessNum === secretNumber) {
    document.querySelector(".message").textContent = "You WON!";
    document.querySelector(".number").textContent = secretNumber;
  } else if (guessNum > secretNumber) {
    scoreRepeat(); // this is a declared function used to for repeated text
  } else if (guessNum < secretNumber) {
    if (scoreCheck > 1) {
      document.querySelector(".message").textContent = "Too Low!";
      scoreCheck--;
      document.querySelector(".score").textContent = scoreCheck;
    } else {
      document.querySelector(".message").textContent = " 🔴  YOU LOST!";
    }
  }
});
