let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

let operation = [];


const numbers = document.querySelectorAll(".number");

numbers.forEach((number) =>{
    number.addEventListener("click",(event) =>{
        console.log(event.target.value);
    })
})

const calculatorScreen = document.querySelector(".kalkulator-screen");

const updateScreen = (number) => {
    calculatorScreen.value = number;
}



const operationScreen = document.querySelector(".operation-screen");

const updateoperationScreen = (number) =>{
    operationScreen.value = number;
}


numbers.forEach((number) =>{
    number.addEventListener("click", (event) =>{
        updateScreen(event.target.value);
        updateoperationScreen(event.target.value);       
    });
})


const inputNumber = (number) => {
    if(currentNumber === '0'){
        currentNumber = number;
    }
    else{
        currentNumber += number;
    }
}


numbers.forEach((number) =>{
    number.addEventListener("click", (event) =>{
        inputNumber(event.target.value);
        updateScreen(currentNumber);        
        if(operation.length < 2){
            updateoperationScreen(currentNumber);
        }
        else{
            updateoperationScreen(`${prevNumber} ${calculationOperator} ${currentNumber}`);
        }
    });
});


const operators = document.querySelectorAll(".operator");


operators.forEach((operator) =>{
    operator.addEventListener("click",(event) =>{
        inputOperator(event.target.value);
        operation.push(event.target.value);
        if(operation.length < 2){
            updateoperationScreen(currentNumber);
        }
        else{
            updateoperationScreen(`${prevNumber} ${calculationOperator}`);
        }
    });
})



const inputOperator = (operator) =>{
    if(calculationOperator === '+' || calculationOperator === '-' || calculationOperator === '*' || calculationOperator === '/'){
        calculate();
        updateScreen(currentNumber);
    }
    if(calculationOperator === ''){
        operation.push(currentNumber);
        prevNumber = currentNumber;
    }
        
        calculationOperator = operator;
        currentNumber = '0';
    
}


const equalSign = document.querySelector(".equal-sign");

equalSign.addEventListener("click", () =>{
    operation.push(currentNumber);
    calculate();
    updateScreen(currentNumber);
   
})


const calculate = () =>{
    let result = '';
        if (calculationOperator === "/" && currentNumber === 0){
            result = "Invinity";
        }
        else {
        switch (calculationOperator){
            case "+" : 
                result = parseFloat(prevNumber) +  parseFloat(currentNumber);
                break;
            case "-" :
                result = prevNumber - currentNumber;
                break;
            case "*" :
                result = prevNumber * currentNumber;
                break;
            case "/" :
                result = prevNumber / currentNumber;
                break;
            default :
                break;
        }

        currentNumber = result;
        calculationOperator = '';
        }
    }



const clearBtn = document.querySelector(".all-clear");

clearBtn.addEventListener("click",() =>{
    clearAll();
    updateScreen(currentNumber);
    updateoperationScreen(operation);
})

const clearAll = () =>{
    prevNumber ='';
    currentNumber = '0';
    calculationOperator = '';
    operation = [];
}


const decimal = document.querySelector(".decimal");

decimal.addEventListener("click",(event) =>{
    inputDecimal(event.target.value);

    updateScreen(currentNumber);
    if(operation.length < 2){
        updateoperationScreen(currentNumber);
    }
    else{
        updateoperationScreen(`${prevNumber} ${calculationOperator}`);
    }
})

inputDecimal = (dot) =>{
    if(currentNumber.includes('.')){
        return
    }
    else {
        currentNumber += dot; 
    }
}



const persenNumber = document.querySelector(".percentage");

persenNumber.addEventListener("click", (event) =>{
    inputPersen(event.target.value);
    updateScreen(currentNumber);
})

inputPersen = () => {
    currentNumber = currentNumber / 100;
}

const deletebutton = document.querySelector(".delete");

deletebutton.addEventListener("click",(event) =>{
    inputdelete(event.target.value);
})

inputdelete = () =>{
    var a = currentNumber;
    currentNumber = a.substring(0, a.length -1);
    angkaakhir();
    updateScreen(currentNumber);
    if(operation.length < 1){
        updateoperationScreen(currentNumber);
    }
    else{
        updateoperationScreen(`${prevNumber} ${calculationOperator} ${currentNumber}`);
    }
}

angkaakhir = () =>{
    if (currentNumber.length <1 ){
        currentNumber ='0';
    }
}
