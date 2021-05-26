// prova config script
var prova = "prova generale"
console.log(prova)



// prompt nome
var nomeUtente = prompt ("Inserisci il tuo NOME qui!").toLowerCase();
console.log("nome :", nomeUtente);


// prompt cognome
var cognomeUtente = prompt ("Inserisci il tuo cognome qui!").toLowerCase();
console.log("cognome :", cognomeUtente);

// prompt colore
var coloreUtente = prompt ("Inserisci il tuo colore qui!").toLowerCase();
console.log("colore preferito :", coloreUtente);



// addizione risultati
var psw = nomeUtente + cognomeUtente + coloreUtente + "21";
console.log("password segretissima :", psw).toLowerCase();
document.write(psw);
