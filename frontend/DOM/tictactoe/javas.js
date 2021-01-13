//Restart game button
let restart = document.querySelector("#b");

//grabs all the squares
let squares = document.querySelectorAll("td");

//clear squares
function clearTable() {
  for (let i = 0; i < squares.length; i++) {
    squares[i].textContent = "";
  }
}

//check the square marker
// let cellOne = document.querySelector('#one') ;
// cellOne.addEventListener('click', function() {
//     if(cellOne.textContent === '') {
//         cellOne.textContent = 'X';
//     } else if(cellOne.textContent === 'X') {
//         cellOne.textContent = 'O';
//     } else {
//         cellOne.textContent = '';
//     }
// });

function changeMarker() {
  if (this.textContent === "") {
    this.textContent = "X";
  } else if (this.textContent === "X") {
    this.textContent = "O";
  } else {
    this.textContent = "";
  }
}

// for loop to add event listeners to all the squares

for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", changeMarker);
}

restart.addEventListener("click", clearTable);
