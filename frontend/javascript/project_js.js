let firstname = prompt("Enter your First Name: ");
let lastName = prompt("Enter your Last Name: ");
let age = prompt("Enter your age please: ");
let height = prompt("Enter your height: ");
let petName = prompt("Enter your pet name: ");
alert("Thank you for providin your information! ");

//four conditions
let nameCond = null;
let ageCond = null;
var heightCond = null;
var petCondition = null;

if (firstname[0] === lastName[0]) {
  nameCond = true;
} else {
  nameCond = false;
}

if (age > 20 && age < 30) {
  ageCond = true;
} else {
  ageCond = false;
}

if (height >= 170) {
  heightCond = true;
} else {
  heightCond = false;
}

if (petName[petName.length-1] === "y") {
    petCondition = true;
} else {
    petCondition = false;
}

if (nameCond && ageCond && heightCond && petCondition) {
    console.log("Welcome Spy!");
} else {
    console.log("Nothing to see here");
}