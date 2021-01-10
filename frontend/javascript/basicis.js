// alert("Hello World"); 
//comments in js is with just two forward slash

//DATA TYPES

console.log(typeof 10); //integer
console.log(typeof -10); //negative integer

console.log(typeof 20.2); //floating numnber
console.log(typeof -20.2); //negative floating numnber
// All these data types in js is treated as NUMBER data type



console.log("Hello World");

// booleans

console.log(true);
console.log(false);

//undefined type and null type are not the same
//default data type in JS are UNDEFINED!

console.log(2 + 2);
console.log(3 - 2);
console.log(3 * 2);
console.log(3 / 2);
console.log(3 ** 2);
console.log(3 % 2);

//Strings
console.log("Django " + "is super cool"); //concatination
console.log("Django " + "is super cool".length); //length of string...also wihite spaces are countered
console.log("Django \n Hellooo");
console.log("Django \t give me a tab");
console.log("Django \" give \" me a tab");

//indexing strings
console.log("Hello"[0]);

//variables ...use var or let 

let bankAccount = 1000;
let deposit = 50;
let total = bankAccount + deposit;
console.log(total);

let greeting = "Hello";
let username = "Ervin";
console.log(greeting + ", " + username + "!");

let myVariable;
let myNullVariable = null;
console.log(typeof myVariable);
console.log(typeof myNullVariable);

let age = +prompt("eneter your year");
let a = age + 10;
console.log(a);