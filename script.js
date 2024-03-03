// Q1 : Write a program to take a number in a variable do the require arithematic to display result

let a = 10;
document.write(`The value of a is: <b>${a}</b> <br>`);
document.write(`The value of ++a is: <b>${++a}</b> <br>`);
document.write(`Now the value of a is: <b>${a}</b> <br>`);
document.write(`The value of a++ is: <b>${a++}</b> <br>`);
document.write(`Now the value of a is: <b>${a}</b> <br>`);
document.write(`The value of --a is: <b>${--a}</b> <br>`);
document.write(`Now the value of a is: <b>${a}</b> <br>`);
document.write(`The value of a-- is: <b>${a--}</b> <br>`);
document.write(`Now the value of a is: <b>${a}</b> <hr>`);

// Q2 : What Will Be The Output Of Variables a,b & result after execution of the following script
// let a = 2 ; let b = 1; let res = --a - --b + ++b + b--;

let x = 2;
let y = 1;
let results = --x - --y + ++y + y--;
document.write(`The Value of x At Last is <b> ${x} </b> <br>`);
document.write(`The Value of y At Last is <b> ${y} </b> <br>`);
document.write(`The Final Result Of The Calculation is <b> ${results} </b> <hr>`);

// Q3: Write The Program That Takes The Input a name From User And Greet That Person:

let userInput = prompt("Enter Your Name");
alert(`Welcome ${userInput} To My Web Page`);

// Q4: Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.

let tableNumber = +prompt("Enter a Number Of Table You Want To Print", 5);
for (let i = 1; i <= 10; i++) {
    document.write(`${tableNumber} X ${i} = <b>${tableNumber * i}</b> <br>`);
}

// Q5: 
// a) Take three subjects name from user and store them in 3 different variables
// b) Total marks for each subject is 100, store it in another variable
// c) Take obtained marks for first subject from user and stored it in different variable
// d) Take obtained marks for remaining 2 subjects from user and store them in variables
// e) Now calculate total marks and percentage and show the result in browser like this.
// (Hint: user table)

const subject1 = prompt("Enter the name of the first subject:");
const subject2 = prompt("Enter the name of the second subject:");
const subject3 = prompt("Enter the name of the third subject:");
const totalMarks = 100;
const obtainedMarks1 = parseFloat(prompt(`Enter the obtained marks in ${subject1}:`));
const obtainedMarks2 = parseFloat(prompt(`Enter the obtained marks in ${subject2}:`));
const obtainedMarks3 = parseFloat(prompt(`Enter the obtained marks in ${subject3}:`));
const totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
const percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;
const result = `
<table align="center" border="2">
  <tr>
    <th>Subject</th>
    <th>Total Marks</th>
    <th>Obtained Marks</th>
  </tr>
  <tr>
    <td align="center">${subject1}</td>
    <td align="center">${totalMarks}</td>
    <td align="center">${obtainedMarks1}</td>
  </tr>
  <tr>
    <td align="center">${subject2}</td>
    <td align="center">${totalMarks}</td>
    <td align="center">${obtainedMarks2}</td>
  </tr>
  <tr>
    <td align="center">${subject3}</td>
    <td align="center">${totalMarks}</td>
    <td align="center">${obtainedMarks3}</td>
  </tr>
  <tr>
    <td align="center" colspan="2">Total</td>
    <td align="center">${totalObtainedMarks}</td>
  </tr>
  <tr>
    <td align="center" colspan="2">Percentage</td>
    <td align="center">${percentage.toFixed(2)}%</td>
  </tr>
</table>
`;
document.write(`<hr> ${result}`);