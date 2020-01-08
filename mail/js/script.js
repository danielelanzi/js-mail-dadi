// Lista Email autorizzate
var email = ['a@gmail.com', 'b@gmail.com', 'c@gmail.com', 'd@gmail.com'];
// Prompt verifica email
var userName = prompt('Inserisci l\'email autorizzata: ');
console.log('Email inserita:',userName);
// Variabile di verifica
var verify = false;
// Ciclo For
for (var i = 0; i < email.length; i++) {
  console.log('Email autorizzate:',email[i]);
  if (userName == email[i]) {
    var verify = true;
  }
}
// Condizione di verità
if (verify == true) {
  console.log('Email autorizzata.');
  alert('Email autorizzata.');
} else {
  console.log('Accesso negato.');
  alert('Accesso negato.');
}
