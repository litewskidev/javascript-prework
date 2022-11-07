var argMoveId, argPlayerMove, argComputerMove, computerMove, playerMove, randomNumber, playerInput;

/**
 * Describe this function...
 */
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

/**
 * Describe this function...
 */
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
  printMessage('I played: ' + argComputerMove + '. You played: ' + argPlayerMove);
}
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('wybór ruchu gracza to: ' + playerInput);
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);