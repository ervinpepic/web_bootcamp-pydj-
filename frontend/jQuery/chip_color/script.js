let player1 = prompt("Player One: Enter your name, your color is blue!");
let player1Color = "rgb(86, 151, 255)";

let player2 = prompt("Player Two: Enter your name, your color is red!");
let player2Color = "rgb(237, 45, 73)";

let game_on = true;
let table = $("table tr");

function reportWin(rowNum, colNum) {
  console.log("You won starting at this row, col: ");
  console.log(rowNum);
  console.log(colNum);
}

function changeColor(rowIndex, colIndex, color) {
  return table
    .eq(rowIndex)
    .find("td")
    .eq(colIndex)
    .find("button")
    .css("background-color", color);
}

function returnColor(rowIndex, colIndex) {
  return table
    .eq(rowIndex)
    .find("td")
    .eq(colIndex)
    .find("button")
    .css("background-color");
}

function checkBottom(colIndex) {
  let colorReport = returnColor(5, colIndex);
  for (let row = 5; row > -1; row--) {
    colorReport = returnColor(row, colIndex);
    if (colorReport === "rgb(128, 128, 128)") {
      return row;
    }
  }
}

function colorMatchCheck(one, two, three, four) {
  return (
    one === two &&
    one === three &&
    one === four &&
    one !== "rgb(128, 128, 128)" &&
    one !== undefined
  );
}

function horizontalWinCheck() {
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 4; col++) {
      if (
        colorMatchCheck(
          returnColor(row, col),
          returnColor(row, col + 1),
          returnColor(row, col + 2),
          returnColor(row, col + 3)
        )
      ) {
        console.log("horiz");
        reportWin(row, col);
        return true;
      } else {
        continue;
      }
    }
  }
}

function verticalWinCheck() {
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row < 3; row++) {
      if (
        colorMatchCheck(
          returnColor(row, col),
          returnColor(row + 1, col),
          returnColor(row + 2, col),
          returnColor(row + 2, col)
        )
      ) {
        console.log("vertical");
        reportWin(row, col);
        return true;
      } else {
        continue;
      }
    }
  }
}
function diagonalWinCheck() {
  for (let col = 0; col < 5; col++) {
    for (let row = 0; row < 7; row++) {
      if (
        colorMatchCheck(
          returnColor(row, col),
          returnColor(row + 1, col + 1),
          returnColor(row + 2, col + 2),
          returnColor(row + 3, col + 3)
        )
      ) {
        console.log("diag");
        reportWin(row, col);
        return true;
      } else if (
        colorMatchCheck(
          returnColor(row, col),
          returnColor(row - 1, col + 1),
          returnColor(row - 2, col + 2),
          returnColor(row - 3, col + 3)
        )
      ) {
        console.log("diag");
        reportWin(row, col);
        return true;
      } else {
        continue;
      }
    }
  }
}

function gameEnd(winningPlayer) {
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row < 7; row++) {
      $("h3").fadeOut("fast");
      $("h2").fadeOut("fast");
      $("h1")
        .text(winningPlayer + "Has won! refresh to play again")
        .css("fontSize", "50px");
    }
  }
}
//start with player one
let currentPlayer = 1;
let currentName = player1;
let currentColor = player1Color;

$("h3").text(player1 + "It is your turn, pick a column to drop in!");
$(".board button").on("click", function () {
  var col = $(this).closest("td").index();
  var bottomAvail = checkBottom(col);
  changeColor(bottomAvail, col, currentColor);

  if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
    gameEnd(currentName);
  }

  //if no win or tie, contiune to next player
  currentPlayer = currentPlayer * -1;

  //re-check who the current player is
  if (currentPlayer === 1) {
    currentName = player1;
    $("h3").text(currentName + "Your Turn");
    currentColor = player1Color;
  } else {
    currentName = player2;
    $("h3").text(currentName + "Your Turn");
    currentColor = player2Color;
  }
});
