document.addEventListener("keydown", (e) => {
  // console.log(e);
  console.log(e.key);
  if (e.key === "Escape") clr();
  if (e.code === "NumpadEnter") calculate();
  if (+e.key <= 9 || e.key === ".") press(e.key);
  if (e.key === "/" || e.key === "*" || e.key === "-" || e.key === "+")
    setOP(e.key);
});

const displayElem = document.querySelector("#display");
let num1 = 0;
let num2 = 0;
let operator = null;

const setOP = (op) => {
  operator = op;
  console.log("setting operator: ", operator);
  num2 = num1;
  num1 = 0;
  console.log("num2: ", num2);
  console.log("operator: ", operator);
  displayElem.innerHTML = operator;
};

function press(num) {
  if (
    (num === "." && displayElem.innerHTML.includes(".")) ||
    displayElem.innerHTML.length >= 10
  )
    return;

  if (displayElem.innerHTML === "0" || displayElem.innerHTML === operator) {
    displayElem.innerHTML = num;
  } else {
    displayElem.innerHTML += num;
  }

  num1 = parseFloat(+displayElem.innerHTML);
  console.log("num1: ", num1);
}

function clr() {
  num1 = 0;
  num2 = 0;
  op = null;
  displayElem.innerHTML = 0;
}

function calculate() {
  let result =
    operator === "+"
      ? num2 + num1
      : operator === "-"
      ? num2 - num1
      : operator === "/"
      ? num2 / num1
      : operator === "*"
      ? num2 * num1
      : 0;
  console.log("result: ", result);
  num1 = result;
  displayElem.innerHTML = result;
}
