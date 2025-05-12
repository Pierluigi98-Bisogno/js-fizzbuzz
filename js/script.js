// Consegna del giorno:
// Scrviamo insieme prima dei commenti in italiano per capire cosa vogliamo fare
// Poi scriviamo le istruzioni che vogliam far eseguire al nostro programma
// così come lo faremo "a mano"



// 1 -> 1
// 2 -> 2
// 3 -> Fizz
// 4 -> 4
// 5 -> Buzz
// 6 -> Fizz
// ... 
// 15 -> FizzBuzz

// ...

// 100 -> Buzz

for (let i = 1; i <= 100; i++) {
    let output = '';
    
    // Controllo se il numero è divisibile sia per 3 che per 5
    if (i % 3 === 0 && i % 5 === 0) {
        output = 'FizzBuzz';
    }
    // Controllo se il numero è divisibile per 3
    else if (i % 3 === 0) {
        output = 'Fizz';
    }
    // Controllo se il numero è divisibile per 5
    else if (i % 5 === 0) {
        output = 'Buzz';
    }
    // Se non è divisibile né per 3 né per 5, uso il numero
    else {
        output = i;
    }

    // Stampo il risultato nella console
    console.log(output);
}