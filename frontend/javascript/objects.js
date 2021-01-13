let carInfo = {
  make: "Nisan",
  year: 2020,
  model: "Xtrail",
};

console.log(carInfo);

let myNewObj = {
  a: "Hello",
  b: [1, 2, 3],
  c: {
    inside: ["a", "b"],
  },
};

console.log(myNewObj);

console.log(myNewObj["b"][1]);
console.log(myNewObj["c"]["inside"][1]);

carInfo["year"] = 2018;
console.log(carInfo);

carInfo["year"] -= 1;
console.log(carInfo);

console.dir(carInfo);

for (k in carInfo) {
  console.log(k);
  console.log(carInfo[k]);
}

let myObj = {
  prop: 34,
  reportProb: function () {
    return this.prop;
  },
};
console.log(myObj.reportProb());

let simpleObj = {
  probperty: "Hello",
  myMethod: function () {
    console.log("The myMethod was called!");
  },
};
console.log(simpleObj);

let newObj = {
  name: "Ervin",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

console.log(newObj.greet());

//exercise

let employee = {
  name: "Ervin Pepic",
  job: "Developer",
  age: 27,
  nameLength: function () {
    console.log(this.name.length);
  },
  report: function () {
    console.log(
      "Name is: " + this.name + "; " + "job is: " + this.job + "; " + "age: " + this.age
    );
  },
  lastname: function () {
    console.log(this.name.split(" ")[1]);
  },
};


console.log(employee.nameLength(), employee.report(), employee.lastname());