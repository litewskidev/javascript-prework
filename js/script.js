var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'rock';
} else {
  computerMove = 'unknown movement';
}
printMessage('My move: ' + computerMove);
if (randomNumber == '2') {
  computerMove = 'paper';
} else {
  computerMove = 'unknown movement';
}
printMessage('My move: ' + computerMove);
if (randomNumber == '3') {
  computerMove = 'scissors';
} else {
  computerMove = 'unknown movement';
}
printMessage('My move: ' + computerMove);

var playerMove, playerInput;
playerInput = prompt('Choose your move! 1: rock, 2: paper, 3: scissors.');
console.log('The typed answer is: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'rock';
} else {
  playerMove = 'unknown movement';
}
printMessage('Your move: ' + playerMove);
if (playerInput == '2') {
  playerMove = 'paper';
} else {
  playerMove = 'unknown movement';
}
printMessage('Your move: ' + playerMove);
if (playerInput == '3') {
  playerMove = 'scissors';
} else {
  playerMove = 'unknown movement';
}
printMessage('Your move: ' + playerMove);