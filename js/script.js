
var buttonRock, buttonScissors, buttonPaper;
var computerResult = 0;
var playerResult = 0;

buttonRock = document.getElementById('button-rock');
buttonPaper = document.getElementById('button-paper');
buttonScissors = document.getElementById('button-scissors');

function buttonClicked(argButtonName){
    clearMessages();
    console.log(argButtonName + ' został kliknięty');

    var argComputerMove, argMoveId, argPlayerMove, computerMove, playerMove, randomNumber;

    /**
     * Describe this function...
     */
    function getMoveName(argMoveId) {
      console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
      if (argMoveId == 1) {
        return 'kamień';
      } else if (argMoveId == 2) {
        return 'papier';
      } else if (argMoveId == 3) {
        return 'nożyce';
      } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return 'kamień';
      }
    }

    /**
     * Describe this function...
     */
    function displayResult(argPlayerMove, argComputerMove) {
      console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
      if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
        printMessage('Wygrywasz!');
        playerResult = playerResult + 1
      } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
        printMessage('Wygrywasz!');
        playerResult = playerResult + 1
      } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
        printMessage('Wygrywasz!');
        playerResult = playerResult + 1
      } else if (argPlayerMove == argComputerMove) {
        printMessage('Mamy remis :)');
      } else {
        printMessage('Przegrywasz :(');
        computerResult = computerResult + 1
      }
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
      updateResult(playerResult, computerResult)
    }

    playerMove = argButtonName;
    console.log('wybór ruchu gracza to: ' + playerMove);
    playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}


buttonRock.addEventListener('click', function(){ 
  buttonClicked('kamień'); 
});

buttonPaper.addEventListener('click', function(){ 
  buttonClicked('papier'); 
});

buttonScissors.addEventListener('click', function(){ 
  buttonClicked('nożyce'); 
});

