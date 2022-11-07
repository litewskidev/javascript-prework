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