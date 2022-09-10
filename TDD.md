Describe: beep()

Test: "Gathers user's input"
Code:
const userInput = "3";
console.log(userInput);
Expected Output: "3"

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code:
beep(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It recognizes the number 1 in the array"
Code:
beep(100);
Expected Output: "true";

Test: "For numbers that contain a 1, all digits are replaced with "Beep!""
Code:
beep(5);
Expected Output: ["0, 'Beep!, 2, 3, 4, 5"];

Test: "For numbers that contain a 2, all digits are replaced with "Boop!""
Code:
beep(5);
Expected Output: ["0, 'Beep', 'Boop!, 3, 4, 5"];

Test: "For numbers that contain a 1, all digits are replaced with "Won't you be my neighbor?"
Code:
beep(5);
Expected Output: ["0, 'Beep', 'Boop!, "Won't you be my neighbor?", 4, 5"];
