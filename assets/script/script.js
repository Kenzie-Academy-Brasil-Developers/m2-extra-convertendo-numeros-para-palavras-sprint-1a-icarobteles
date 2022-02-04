const arrayOfUnits = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove"];

const arrayOfExceptions = ["dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];

const arrayOfTens = ["vinte", "trinta", "quarenta", "cinquenta", "sessenta", "setenta", "oitenta", "noventa"];

function numbersToWords(){
    let arr = [];
    for(let i = 0; i < arrayOfUnits.length; i++){
        arr.push(arrayOfUnits[i]);
    }
    for(let i = 0; i < arrayOfExceptions.length; i++){
        arr.push(arrayOfExceptions[i]);
    }
    for(let j = 0; j < arrayOfTens.length; j++){
        arr.push(arrayOfTens[j]);
        for(let i = 0; i < arrayOfUnits.length; i++){
            arr.push(arrayOfTens[j] + " e " + arrayOfUnits[i]);
        }
    }
    arr.push("cem");
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