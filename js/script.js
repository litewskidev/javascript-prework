var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
if (randomNumber == '1') {
  computerMove = 'rock';
} else if (randomNumber == '2') {
  computerMove = 'paper';
} else if (randomNumber == '3') {
  computerMove = 'scissors';
} else {
  computerMove = 'nieznany ruch';
}
printMessage('My move: ' + computerMove);

var playerMove, playerInput;
playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Wpisana odpowiedź to: ' + playerInput);
if (playerInput == '1') {
  playerMove = 'rock';
} else if (playerInput == '2') {
  playerMove = 'paper';
} else if (playerInput == '3') {
  playerMove = 'scissors';
} else {
  playerMove = 'unknown movement';
}
printMessage('Your move: ' + playerMove);