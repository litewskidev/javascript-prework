function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var computerMove, playerMove;
computerMove = 'rock';
printMessage('I played ' + computerMove + '! If your move is paper, you win!');
playerMove = 'paper';
printMessage('I played ' + playerMove + '! If your move is scissors, you win!');