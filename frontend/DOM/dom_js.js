// let myhead = document.querySelector('h1');
// myhead.style.color = '#2de3fd';

// function getColor() {
//     let letters = "0123456789ABCDEF";
//     let color = '#';
//     for(let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random()*16)];
//     }
//     return color;
// }

// function changeHeaderColor() {
//     colorInput = getColor();
//     myhead.style.color = colorInput;
// }

// setInterval("changeHeaderColor()", 500);

// let paragraph = document.querySelector('p');
// paragraph.innerHTML = "<strong>Hello there from DOM</strong>";

// let specialID = document.querySelector("#special");
// let specialA = specialID.querySelector("a");
// specialA.getAttribute("href");
// specialA.setAttribute('href', "https://amazon.com");
// console.log(specialA);

let headOne = document.querySelector('#one');
let headTWo = document.querySelector('#two');
let headThree = document.querySelector('#three');

function mouseChange() {
    headOne.textContent = "Mouse Currently over";
    headOne.style.color = 'blue';
}
function mouseOut() {
    headOne.textContent = "Hover over me";
    headOne.style.color = 'black';
}

headOne.addEventListener('mouseover', mouseChange);
headOne.addEventListener('mouseout', mouseOut);

function mouseClick() {
    headTWo.textContent = "Clicked on";
    headTWo.style.color = 'green';
}
headTWo.addEventListener('click', mouseClick);

function doubleClicked() {
    headThree.textContent = "You just double clicked me";
    headThree.style.color = "yellow";
}
headThree.addEventListener('dblclick', doubleClicked);