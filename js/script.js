const buttonPaper = document.getElementById('button-paper').addEventListener('click', function(){ buttonClicked('paper'); }),
  buttonRock = document.getElementById('button-rock').addEventListener('click', function(){ buttonClicked('rock'); }),
  buttonScissors = document.getElementById('button-scissors').addEventListener('click', function(){ buttonClicked('scissors'); });

let argButtonName;
function buttonClicked(argButtonName) {
  clearMessages();
  console.log(argButtonName + ' was clicked');

function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'rock';
  } else if (argMoveId == 2) {
    return 'paper';
  } else if (argMoveId == 3) {
    return 'scissors';
  } else {
    printMessage('Unkown movement id: ' + argMoveId + '. I assume it was "rock".');
    return 'rock';
  }
}

let randomNumber = Math.floor(Math.random() * 3 + 1),
  computerMove = getMoveName(randomNumber),
  playerMove = argButtonName;
function displayResult(argPlayerMove, argComputerMove) {
  console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
  if (argPlayerMove == 'rock' && argComputerMove == 'scissors') {
    printMessage('You win!');
  } else if (argPlayerMove == 'paper' && argComputerMove == 'rock') {
    printMessage('You win!');
  } else if (argPlayerMove == 'scissors' && argComputerMove == 'paper') {
    printMessage('You win!');
  } else if (argPlayerMove == argComputerMove && argComputerMove == argPlayerMove) {
    printMessage('It\'s a draw.');
  } else {
    printMessage('You lose :(');
  }
  printMessage('I played: ' + argComputerMove + ' | You played: ' + argPlayerMove);
}

console.log('ruch gracza to: ' + playerMove);
console.log('wylosowana liczba to: ' + randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
}