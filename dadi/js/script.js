var giocatore1 = prompt('il tuo nome?');
var giocatore2 = prompt('il tuo nome?');
console.log(giocatore1);
console.log(giocatore2);
document.getElementById('giocatore-1').innerHTML += giocatore1;
document.getElementById('giocatore-2').innerHTML += giocatore2;

var dado1 = Math.floor(Math.random() * 6) + 1;
var dado2 = Math.floor(Math.random() * 6) + 1;
console.log(dado1);
console.log(dado2);
document.getElementById('dado-1').innerHTML += dado1;
document.getElementById('dado-2').innerHTML += dado2;

if (dado1 > dado2){
  document.getElementById('risultato-1').innerHTML += 'Ha vinto ' + giocatore1;
  document.getElementById('risultato-2').innerHTML += 'Ha perso ' + giocatore2;
}
else if(dado1 = dado2){
  document.getElementById('risultato-1').innerHTML += 'Sia ' + giocatore1 + ' che';
  document.getElementById('risultato-2').innerHTML += giocatore2 + ' avete pareggiato, nessuno ha vinto.';
}
