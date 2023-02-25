Calculator

This is a simple calculator application built using HTML, CSS, and JavaScript. It allows users to perform basic operations such as addition, subtraction, multiplication, and division.
Installation

    Clone this repository to your local machine, or not. I don't really care.
    https://github.com/EmployedRanger/calculator
    Navigate to the project directory using cd calculator.
    Open the index.html file in your web browser.
    (Chrome works best, but firefox will do)

Usage

    Enter the first number using the number buttons.
    Select the operator using the corresponding operator button (+, -, x, /).
    Enter the second number using the number buttons.
    Click the equal button (=) to get the result.
    Click the clear button (C) to clear the input fields.

Features

    Basic math operations: addition, subtraction, multiplication, and division.
    Sign flip button to change the sign of the current number.
    Clear button to clear the input fields.
    Clear history button to clear the history of calculations.
    Responsive design for different screen sizes.

Fixes:
- 1/6= .17. Then times that by 6 gives 1.02. It should round to 6 instead.
- It concatenates the new number you press after doing an equation. So when I do 2+3, end up with 5, press number three; it will show 53