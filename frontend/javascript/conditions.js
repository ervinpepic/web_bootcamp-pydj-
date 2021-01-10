//if statement

let hot = false;
let temp = 27;

if (temp > 30) {
  console.log("Temp is hot");
} else if (temp >=15 ){
  console.log("Temp is fine");
} else {
    console.log("it's cold");
}


let cheese = 10;
let ham = 10;

let report = "Blank";

if (ham >= 10 && cheese >= 10) {
    report = "Strong sales of both!"
} else if (ham === 0 && cheese === 0) {
    report = "Nothing Sold!"
} else {
    report = "We had some sales of items"
}

console.log(report);

//while loops

let x = 0;

while (x < 5) {
  console.log("X is currently: " + x);
  if(x === 3) {
    console.log("X is " + x);
    break;
  }
  console.log("X is still less than 5, adding 1 to X! ");
  x +=  1;
}

//print only even number

x = 1;
while (x < 10) {
  if (x % 2 === 0){
    console.log("Im printing only even numbers" + x);
  } 
  x += 1;
}

//for loops

for (let i = 0; i < 20; i++) {
  console.log("for loop priniting ..." + i);
  
}

let word = "ABCDEFGHIJK";

for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
  
}