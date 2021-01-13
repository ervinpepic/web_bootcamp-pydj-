// dissadvantage of not using arrays
let country1 = "USA";
let country2 = "GERMAN";
let country3 = "CHINA";

//advantages using arrays

let countries = ["USA", "GERMANY", "CHINA"];
console.log(countries);

//immutable
console.log((country1[2] = "B"));
console.log(country1);

//mutable (changable)
console.log((countries[2] = "A"));
console.log(countries);

//array methods

let myArr = ["one", "two", "three"];

let lastItem = myArr.pop();
console.log(lastItem);
console.log(myArr);

myArr.push("new_item");
console.log(myArr);
console.log(myArr.length);
console.log([myArr.length - 1]);

//array iteration

let arr = ["A", "B", "C"];
console.log(arr);
for (let i = 0; i < arr.length; i++) {
  console.log("classic for loop ->", arr[i]);
}

for (letter of arr) {
  console.log("For of loop -> ", letter);
}

for (letter1 of arr) {
    // alert(letter1);
}

arr.forEach(console.log);

function addAwesom(name) {
    console.log(name + " is awesome");
}
let niz = ["Django", "Laravel", "Flask"];

niz.forEach(addAwesom);

//exercise

let roster = [];

function addNew() {
    let newName = prompt("Enter name to push to the array?");
    roster.push(newName);
}

function removeStudent() {
    let removeName = prompt("Enter name to remove");
    let index = roster.indexOf(removeName);
    roster.splice(index, 1);
}

function displayStudent() {
    console.log(roster);
}

let start = prompt("Would you like to start roster web app? Y/N");
let request = "empty";

if (start === 'y' || start === 'Y') {
    while (request !== "quit") {
        request = prompt("Select an action: add, remove, display, or type 'quit' for exiting the app!");

        if (request === 'add') {
            addNew();
        } else if(request === 'display') {
            displayStudent();
        }
        else if(request === 'remove') {
            removeStudent();
        } else {
            alert("Not recognized command!")
        }
    }
}
alert("Thank you! Refresh for using again!");