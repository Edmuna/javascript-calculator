const btns = document.querySelectorAll(".btn");
const output = document.querySelector(".output");
const addition = document.querySelector(".add");
const ac = document.querySelector(".ac");
const decimal = document.querySelector(".decimal")
const equals = document.querySelector(".equals");
const subtract = document.querySelector(".subtract");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");

let currentNum = "";
let firstNum = "";
let result = "";
let sum = [];
let operation = null;

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentNum += btn.textContent;
    output.textContent = currentNum;
  });
});

addition.addEventListener("click", () => {
  performOperation();
  operation = "+";
});

subtract.addEventListener("click", () => {
  performOperation();
  operation = "-";
});

multiply.addEventListener("click", () => {
  performOperation();
  operation = "*";
});

divide.addEventListener("click", () => {
  performOperation();
  operation = "/";
});

ac.addEventListener("click", () => {
  output.textContent = 0;
  currentNum = "";
  sum = [];
  operation = null;
});

equals.addEventListener("click", () => {
  performOperation();
  operation = null;
});

decimal.addEventListener("click", () => {
  if (!currentNum.includes(".")) {
    currentNum += ".";
    output.textContent = currentNum;
  }
})

function performOperation() {
  if (currentNum !== "") {
    const number = parseFloat(currentNum);
    sum.push(number);
    currentNum = "";
  }

  if (operation && sum.length >= 2) {
    let tempResult = 0;

    switch (operation) {
      case "+":
        tempResult = sum.reduce((acc, num) => acc + num);
        break;
      case "-":
        tempResult = sum.reduce((acc, num) => acc - num);
        break;
      case "*":
        tempResult = sum.reduce((acc, num) => acc * num);
        break;
      case "/":
        tempResult = sum.reduce((acc, num) => acc / num);
        break;
      default:
        break;
    }

    result = tempResult;
    output.textContent = result.toString();
    sum = [result];
  }

  if (currentNum.includes(".")) return
}

const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");
const modal = document.querySelector(".modal");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
