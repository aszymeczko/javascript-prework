function printMessage(msg){
	const div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function updateResult(playerResult, computerResult){
	const div = document.createElement('div');
	document.getElementById('result').innerHTML = '';
	div.innerHTML = "wynik gracza: "+playerResult+" wynik komputera: "+computerResult;
	document.getElementById('result').appendChild(div);
}