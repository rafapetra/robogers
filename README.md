# Mr. Roboger's Neighborhood

#### By _Rafael Petrachini_

A translator for Mr. Roger's.\
https://rafapetra.github.io/robogers/

## Technologies Used

- _HTML_
- _CSS_
- _JavaScript_

## Description

A web application that takes a number from the user and returns a list of values from 0 to the user's inputted number with substituting numbers that contain a 1 to "Beep!", numbers that contain a 2 to "Boop!", and numbers that contain a 3 to "Won't you be my neighbor?" and prints the results.

## Setup/Installation Requirements

1. Clone this repository to your desktop.
2. Navigate to the top level of the directory.
3. Open index.html in your browser.

## Test-Driven Development

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

## Known Bugs

- N/A

## License

MIT

Copyright (c) [2022] [Rafael Petrachini]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
