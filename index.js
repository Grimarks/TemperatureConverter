const inputNumber = document.getElementById('inputNumber');
const fromRadios = document.getElementsByName('from');
const toRadios = document.getElementsByName('to');
const submitButton = document.getElementById('SubmitInput');
const resultElement = document.getElementById('result');


submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (inputNumber.value === '') {
        alert('Please enter a temperature value!');
        return;
    }

    let fromUnitSelected = false;
    for (const radio of fromRadios) {
        if (radio.checked) {
            fromUnitSelected = true;
            break;
        }
    }
    if (!fromUnitSelected) {
        alert('Please select a from unit!');
        return;
    }

    let toUnitSelected = false;
    for (const radio of toRadios) {
        if (radio.checked) {
            toUnitSelected = true;
            break;
        }
    }
    if (!toUnitSelected) {
        alert('Please select a to unit!');
        return;
    }

    let fromUnit = '';
    let toUnit = '';
    for (const radio of fromRadios) {
        if (radio.checked) {
            fromUnit = radio.id.replace('From', '');
            break;
        }
    }
    for (const radio of toRadios) {
        if (radio.checked) {
            toUnit = radio.id.replace('To', '');
            break;
        }
    }

    const inputValue = parseFloat(inputNumber.value);

    let result = 0;
    if (fromUnit === 'Celcius' && toUnit === 'Fahrenheit') {
        result = inputValue * 9/5 + 32;
    } else if (fromUnit === 'Celcius' && toUnit === 'Kelvin') {
        result = inputValue + 273.15;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Celcius') {
        result = (inputValue - 32) * 5/9;
    } else if (fromUnit === 'Fahrenheit' && toUnit === 'Kelvin') {
        result = (inputValue - 32) * 5/9 + 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Celcius') {
        result = inputValue - 273.15;
    } else if (fromUnit === 'Kelvin' && toUnit === 'Fahrenheit') {
        result = (inputValue - 273.15) * 9/5 + 32;
    }else if(fromUnit === 'Celcius' && toUnit === 'Celcius'){
        result = inputValue;
    }else if(fromUnit === 'Fahrenheit' && toUnit === 'Fahrenheit'){
        result = inputValue;
    }else if(fromUnit === 'Kelvin' && toUnit === 'Kelvin'){
        result = inputValue;
    }

    resultElement.textContent = `The result is: ${result.toFixed(2)} ${toUnit}`;
});