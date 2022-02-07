function getADate(container){
    const header = document.getElementById("header");
    header.removeChild(header.lastElementChild);

    const buttonReturn = document.createElement("button");
    buttonReturn.innerText = "Retornar";
    buttonReturn.addEventListener('click', () => returnPage(container, header));

    header.appendChild(buttonReturn);

    const labelElement = document.createElement("label");
    const inputElement = document.createElement("input");
    labelElement.innerText = "Escolha uma data!"
    inputElement.type = "date";
    inputDate = inputElement;
    const paragraphResult = document.createElement("p");
    inputDate.addEventListener('change', () => {
        const currentDate = getTheCurrentDate();
        paragraphResult.classList.add("paragraphResult");
        paragraphResult.innerText = compareDates(currentDate, inputDate.value);
        container.appendChild(paragraphResult);
    });

    container.appendChild(labelElement);
    container.appendChild(inputElement);

}

function returnPage(container, header){
    const countFixed = container.childElementCount;
    for (let i = 0; i < countFixed; i++){
        container.removeChild(container.firstElementChild);
    }
    header.removeChild(header.lastElementChild);
    numbersToWords();
}

function getTheCurrentDate(){
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const mounth = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();

    const currentDate = day + "/" + (mounth) + "/" + year;
    const currentHours = hour + ":" + minute + ":" + second;
    let arr = [currentDate, currentHours];
    return arr;
}

function compareDates(dateOne, dateTwo){
    //[[dia, mes, ano], [hora, minuto, segundo]];
    dateOne[0] = dateOne[0].split("/"); 
    dateOne[1] = dateOne[1].split(":");

    dateTwo = dateTwo.split("-").reverse();

    const totalOfDaysInDateOne = parseInt(dateOne[0][0]) + parseInt(dateOne[0][1]) * 30 + parseInt(dateOne[0][2]) * 360;
    const totalOfDaysInDateTwo = parseInt(dateTwo[0]) + parseInt(dateTwo[1]) * 30 + parseInt(dateTwo[2]) * 360;
    const diff = totalOfDaysInDateOne - totalOfDaysInDateTwo;

    if (diff <= 360){
        if (diff === 360){ //Um ano
            return (diff / 360) + " ano atrás";
        } else{ //Menos de 1 ano
            if (diff <= 30){ //Um mês ou menos
                if (diff === 30){ //Um mês
                    return (diff / 30) + " mês atrás";
                } else{ //Menos de 1 mês
                    if (diff === 1) return diff + " dia atrás";
                    return diff + " dias atrás";
                }
            } else if(diff > 30 && diff < 60){ //Entre um e dois meses
                if (parseInt((diff % 30) === 1)) return parseInt(diff / 30) + " mês" + " e " + (diff % 30) + " dia atrás"; //Mês e dia
                return parseInt(diff / 30) + " mês" + " e " + (diff % 30) + " dias atrás"; //Mês e dias
            } else{ //Dois meses ou mais
                if (diff % 30 === 0){ //Meses exatos
                    return (diff / 30) + " meses atrás";
                } else{ //Meses e dias
                    if (parseInt((diff % 30) === 1)) return parseInt(diff / 30) + " meses" + " e " + (diff % 30) + " dia atrás"; 
                    return parseInt(diff / 30) + " meses" + " e " + (diff % 30) + " dias atrás";
                }
            }
        }
    } else if (diff > 360 && diff < 720){
        if (diff % 360 <= 30){ //Um mês ou menos
            if (diff % 360 === 30){ //Um mês exato
                return parseInt(diff / 360) + " ano" + " e " + ((diff % 360) / 30) + " mês atrás";
            } else{ //Menos de 1 mês
                if (diff % 360 === 1) return parseInt(diff / 360) + " ano" + " e " + (diff % 360) + " dia atrás";
                return parseInt(diff / 360) + " ano" + " e " + (diff % 360) + " dias atrás";
            }
        } else if (diff % 360 > 30 && diff % 360 < 60){ //Entre um e dois meses
            if (parseInt((diff % 360) % 30) === 1) return parseInt(diff / 360) + " ano" + ", " + parseInt((diff % 360) / 30) + " mês" + " e " + ((diff % 360) % 30) + " dia atrás"; //Mês e dia
            return parseInt(diff / 360) + " ano" + ", " + parseInt((diff % 360) / 30) + " mês" + " e " + ((diff % 360) % 30) + " dias atrás"; //Mês e dias
        } else{ //Dois meses ou mais
            if (diff % 30 === 0){ //Meses exatos
                return parseInt(diff / 360) + " ano" + " e " + ((diff % 360) / 30) + " meses atrás";
            } else{ //Meses e dias
                if (parseInt((diff % 360) % 30) === 1) return parseInt(diff / 360) + " ano" + ", " + parseInt((diff % 360) / 30) + " meses" + " e " + ((diff % 360) % 30) + " dia atrás";
                return parseInt(diff / 360) + " ano" + ", " + parseInt((diff % 360) / 30) + " meses" + " e " + ((diff % 360) % 30) + " dias atrás";
            }
        }
    } else{
        if (diff % 360 === 0){ //Anos exatos
            return parseInt(diff / 360) + " anos atrás";
        } else{ //Anos inexatos
            if (diff % 360 <= 30){ //Um mês ou menos
                if (diff % 360 === 30){ //Um mês exato
                    return parseInt(diff / 360) + " anos" + " e " + ((diff % 360) / 30) + " mês atrás";
                } else{ //Menos de 1 mês
                    if (diff % 360 === 1) return parseInt(diff / 360) + " anos" + " e " + (diff % 360) + " dia atrás";
                    return parseInt(diff / 360) + " anos" + " e " + (diff % 360) + " dias atrás";
                }
            } else if (diff % 360 > 30 && diff % 360 < 60){ //Entre um e dois meses
                if (parseInt((diff % 360) % 30) === 1) return parseInt(diff / 360) + " anos" + ", " + parseInt((diff % 360) / 30) + " mês" + " e " + ((diff % 360) % 30) + " dia atrás"; //Mês e dia
                return parseInt(diff / 360) + " anos" + ", " + parseInt((diff % 360) / 30) + " mês" + " e " + ((diff % 360) % 30) + " dias atrás"; //Mês e dias
            } else{ //Dois meses ou mais
                if (diff % 30 === 0){ //Meses exatos
                    return parseInt(diff / 360) + " anos" + " e " + ((diff % 360) / 30) + " meses atrás";
                } else{ //Meses e dias
                    if (parseInt((diff % 360) % 30) === 1) return parseInt(diff / 360) + " anos" + ", " + parseInt((diff % 360) / 30) + " meses" + " e " + ((diff % 360) % 30) + " dia atrás";
                    return parseInt(diff / 360) + " anos" + ", " + parseInt((diff % 360) / 30) + " meses" + " e " + ((diff % 360) % 30) + " dias atrás";
                }
            }
        }
    }





    console.log(arrResult.reverse().join(" e "));

    
}

/*
    for (let i = 0; i < dateOne[0].length; i++){
        arrPush.push(parseInt(dateOne[0][i]) - parseInt(dateTwo[i]));
        console.log(dateOne[0][i]);
        console.log(dateTwo[i]);

        if (arrPush[i] === 1){
            arrPush[i] += arrText[i][0];
        } else if (arrPush[i] > 1){
            arrPush[i] += arrText[i][1];
        }

        if (arrPush[i] !== 0){
            arrResult.push(arrPush[i]);
        }
    }
*/