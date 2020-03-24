// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const num = 100;
console.log(num, typeof num);

const grade = String(num);
console.log(grade, typeof grade)



// Write a JavaScript program to convert a string to the number.
const amount = "10.25"
console.log(amount, typeof amount);

const a = parseFloat(amount);
console.log(a, typeof a);


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
let a = false;
console.log(a, typeof a)

// * Null
let b = null;
console.log(b, typeof b)

// * Undefined
let c;
console.log(c, typeof c)

// * Number
const number = 5;
console.log(number, typeof number)
 
// * NaN
const NotANum = NaN;
console.log(NotANum, typeof NotANum)

// * String
const greeting = "Hello there";
console.log(greeting, typeof greeting)
  

  
// Write a JavaScript program that adds 2 numbers together.
const num1 = 5;
const num2 = 11;
const total = num1 + num2;
console.log(total)



// Write a JavaScript program that runs only when 2 things are true.
const value1 = 10;
const value2 = 20;

const truth = (arg1, arg2) => {
  if (arg1 && arg2){
    return true
  } else {
    return false
  }
} 

console.log(truth(value1, value2))



// Write a JavaScript program that runs when 1 of 2 things are true.

const numeroUno = 13;
const numeroDos = 0;

const oneIsTrue = (argue1, argue2) => {
  if (argue1 || argue2){
    return true
  } else {
    return false
  }
}

console.log(oneIsTrue(numeroUno, numeroDos))
// Write a JavaScript program that runs when both things are not true.

const empty = " ";
const zero = 0;

const oneIsFalse = (argument1, argument2) => {
  if (argument1 && argument2){
    return true
  } else {
    return false
  }
}

console.log(oneIsFalse(empty, zero))

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
