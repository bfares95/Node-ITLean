let calculation = '';
let display = document.getElementById('display')


function updateDisplay(value){
    calculation += value;
    display.value = calculation;
    
}

function clearDisplay(){
    calculation = '';
    display.value = '';
}

function calculate(){
    try {
        calculation = eval(calculation)
        display.value = calculation;
    }catch (error){
        display.value = 'Operação inválida';
    }
}















