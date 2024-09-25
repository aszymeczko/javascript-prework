var computerMove, randomNumber;
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
jeśli (losowa liczba == '1') {
  computerMove = 'kamień';
} w przeciwnym razie jeśli (losowa liczba == '2') {
  komputerMove = 'papier';
} w przeciwnym razie jeśli (losowa liczba == '3') {
  computerMove = 'nożyce';
} w przeciwnym razie {
  computerMove = 'nieznany ruch';
}
printMessage('Mój ruch: ' + computerMove);