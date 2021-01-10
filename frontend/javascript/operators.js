//logical operators

console.log(3 > 2);
console.log(3 < 2);
console.log(3 >= 2);
console.log(3 <= 2);
console.log(3 == 2);
console.log(3 == 3);
console.log("3" == 3);
console.log(3 === 3);
console.log("3" === 3);

//not equal

console.log(3 != 3);
console.log(3 !== 3);

//testing the values and data types

console.log(true == 1);
console.log(true === 1);

console.log(false == 0);
console.log(false === 0);

console.log(null == undefined);
console.log(null === undefined);

console.log(NaN === NaN);
console.log(NaN == NaN);

//logical operators 

console.log(1 === 1 && 2 === 2);  //end operator
console.log(1 === 2 || 2 === 2);  // OR operator
console.log(!!1 === 2 && 2 === 2);  // NOT operator

//exercises

let x = 1;
let y = 2;

console.log("first exec", "2" == y && x === 1);
console.log("second exec", x >= 0 || y === "2");
console.log("third exec",!(x !== 1 && y === (1 + 1)));
console.log("forth exec", y !== "2" && x < 10);
console.log("fifth exec", y !== x || y == "2" || x === 3);


