//Chiedere all’utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

const parola = prompt("Inserisci una parola palindroma");

function checkPalindromo (parola) {
    const lett = parola.split('')
    let reverseParola = ''

    for (let i = lett.length - 1; i >= 0; i--) {
        reverseParola += lett[i]
        console.log(i)
    }
    
    if (parola === reverseParola) {
        alert ("La parola scelta è palindroma")
    }
    else {
        alert ("La parola scelta non è palindroma")
    }
}
checkPalindromo(parola)