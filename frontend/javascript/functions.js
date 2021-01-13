//define function
function hello() {
  console.log("Hello there! ");
}
hello(); //call function

//function with parameter
function heyYou(name) {
  console.log("Hey, " + name);
}
heyYou("Ervin");

function addNum(num1, num2) {
  console.log(num1 + num2);
}
addNum(10, 20);

//function with paramater values

function helloSomebody(name = "Somebody") {
  console.log("Hello, " + name);
}
helloSomebody("Ervin");

function formal(name = "Ervin", title = "Sir") {
  return title + " " + name;
}
let output = formal();
let x = "Welcome, " + formal();
console.log(x);

function timesFive(numInput) {
  let result = numInput * 5;
  return result;
}

// console.log(result); //function scope variables

//global scope vs local scope vars

let l = "GLOBAL VARIABLE";
let stuff = "GLOBAL STUFF";

function fun(stuff) {
  console.log(l);
  stuff = "RESASSIGN STUFF VARIABLE INSIDE FUNC";
  console.log(stuff);
}

fun();
console.log(stuff);

//exercises

function sleepIn(weekday, vacation) {
  return !weekday || vacation;
}

function monkeyTrouble(aSmile, bSmile) {
  return (aSmile && bSmile) | (!aSmile && !bSmile);
}

function stringTimes(str, n) {
  let returnStr = "";
  let i = 0;
  while (i < n) {
    returnStr += str;
    i++;
  }
  return returnStr;
}

function luckySym(a, b, c) {
  if (a === 13) {
    return 0;
  } else if (b === 13) {
    return a;
  } else if (c === 13) {
    return a + b;
  } else {
    return a + b + c;
  }
}

function caught_speeding(speed, is_birthday) {
  if (is_birthday) {
    speed -= 5;
  } else if (speed <= 60) {
    return 0;
  } else if (60 < speed <= 80) {
    return 1;
  }
  return 2;
}

function makeBricks(small, big, goal) {
  return goal % 5 >= 0 && goal % 5 - small <= 0 && small + 5 * big >= goal;
}