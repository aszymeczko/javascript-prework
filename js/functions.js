function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function updateResult(playerResult, computerResult){
	var div = document.createElement('div');
	document.getElementById('result').innerHTML = '';
	div.innerHTML = "wynik gracza: "+playerResult+" wynik komputera: "+computerResult;
	document.getElementById('result').appendChild(div);
}