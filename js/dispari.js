let sceltaPar = prompt("Scegli tra pari o dispari")
let sceltaNum = parseInt(prompt("Scegli un numero compreso tra 1 e 5"))
function numeroRandom(min, max){
    let numero = Math.floor((Math.random() * max) + min)
    return numero
}

let numCasuale = numeroRandom(1, 5)
function sommaParidispari(num1, num2){
    let somma= num1 + num2
    if(somma % 2 === 0){
        check = true
    }else{
        check = false
    }
}
let risultato = sommaParidispari(numCasuale,sceltaNum)
if(check === true && sceltaPar === "check"){
    alert("L'utente ha vinto")
}else{
    alert("Il computer ha vinto")
}