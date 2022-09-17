window.onload = function () {
  //BUSINESS LOGIC
  let form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  let results = document.querySelector("div#results");
  let inputArray = [];

  // function for replacing numbers
  let beep = function (number) {
    if (inputArray[number].toString().includes(3)) {
      inputArray[number] = " Won't you be my neighbor?";
    } else if (inputArray[number].toString().includes(2)) {
      inputArray[number] = " Boop!";
    } else if (inputArray[number].toString().includes(1)) {
      inputArray[number] = " Beep!";
    }
  };

  // UI LOGIC

  form.onsubmit = function beeper(getInput) {
    getInput.preventDefault();
    // showing reset button and result div
    let userInput = document.querySelector("input#input").value;
    for (let i = 0; i <= userInput; i++) {
      inputArray.push(i);
    }
    inputArray.forEach(beep);
    document.querySelector("div#result").innerText = inputArray;
    // reset button function, cleans input values and hides resul div
    results.removeAttribute("class");
    resetBtn.removeAttribute("class");
  };

  resetBtn.addEventListener("click", function () {
    results.setAttribute("class", "hidden");
    document.getElementById("input").value = null;
  });
};
