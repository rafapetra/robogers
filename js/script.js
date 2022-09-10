window.onload = function () {
  let form = document.querySelector("form");
  let resetBtn = document.querySelector("button#reset");
  let results = document.querySelector("div#results");

  // submitting input
  form.onsubmit = function beeper(getInput) {
    getInput.preventDefault();
    // showing reset button and result div
    results.removeAttribute("class");
    resetBtn.removeAttribute("class");
    // getting input
    const userInput = document.getElementById("input").value;
    // array for input numbers
    let inputArray = [];
    for (let i = 0; i <= userInput; i++) {
      inputArray.push(i);
    }

    // function for replacing numbers
    let beep = function (number) {
      if (inputArray[number].toString().includes(1)) {
        inputArray[number] = " Beep";
      } else if (inputArray[number].toString().includes(2)) {
        inputArray[number] = " Boop!";
      } else if (inputArray[number].toString().includes(3)) {
        inputArray[number] = " Won't you be my neighbor?";
      }
    };

    // calling it on array of numbers
    inputArray.forEach(beep);
    document.querySelector("div#result").innerText = inputArray;
  };

  // reset button function, cleans input values and hides resul div
  resetBtn.addEventListener("click", function () {
    results.setAttribute("class", "hidden");
    document.getElementById("input").value = null;
  });
};
