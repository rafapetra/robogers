window.onload = function() {

let form = document.querySelector('form');

// get the value from the input
form.onsubmit = function beep (input) {
  input.preventDefault();
  const userInput = document.getElementById("input").value;
  const userInputNumber = parseInt(userInput);
  document.body.append(userInputNumber);

const inputArray = [];
for (let i = 0; i <= userInputNumber; i++) {
  inputArray.push(i);
  console.log(inputArray);
    }
  }
}
