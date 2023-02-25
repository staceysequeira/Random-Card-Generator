/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const changeCard = () => {
  const suite = ["♦", "♥", "♠", "♣"];
  const number = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let suiteIndex = Math.floor(Math.random() * suite.length);
  let numberIndex = Math.floor(Math.random() * number.length);
  let suiteValue = suite[suiteIndex];
  let numberValue = number[numberIndex];

  const suiteTop = document.querySelector("#suiteTop");
  const suiteBottom = document.querySelector("#suiteBottom");
  suiteTop.innerText = suiteValue;
  suiteBottom.innerText = suiteValue;

  const center = document.querySelector("#center");
  center.innerText = numberValue;

  if (suiteIndex <= 1) {
    suiteTop.style.color = "red";
    suiteBottom.style.color = "red";
  }
};

window.onload = function() {
  changeCard();
  const btn = document.querySelector("#btn");
  btn.addEventListener("click", () => {
    changeCard();
  });

  // setInterval(changeCard, 3000);
};
