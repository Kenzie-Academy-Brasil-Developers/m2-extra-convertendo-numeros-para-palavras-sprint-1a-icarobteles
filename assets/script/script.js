const arrayOfUnits = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];

const arrayOfExceptions = ["onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];

const arrayOfTens = ["dez", "vinte"];

function numbersToWords(){
    let arr = [];
    for(let i = 0; i < arrayOfUnits.length; i++){
        arr.push(arrayOfUnits[i]);
    }
    arrayOfTens[0][0] = arrayOfTens[0][0].toUpperCase();
    arr.push(arrayOfTens[0]);
    for(let i = 0; i < arrayOfExceptions.length; i++){
        arr.push(arrayOfExceptions[i]);
    }
    arr.push(arrayOfTens[1]);
    displaysTheNumbersOnThePage(arr);
    return arr;
}

function displaysTheNumbersOnThePage(theNumbers){
    const mainContainer = document.getElementById("main");
    
    for (let i = 0; i < theNumbers.length; i++){
        const p = document.createElement("p");
        p.innerText = (i+1) + ": " + theNumbers[i];
        mainContainer.appendChild(p);
    }
}

numbersToWords();