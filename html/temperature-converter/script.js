//Declaracion de constantes

const FAHRENHEIT = 'Fahrenheit'
const CELSIUS = 'Celsius'
const KELVIN = 'Kelvin'


// Seleccionar los elementos del DOM
const temperatureInput = document.getElementById('temperature')
const fromUnit = document.getElementById('fromUnit')
const toUnit = document.getElementById('toUnit')
const convertButton = document.getElementById('convertButton');
const resultDisplay = document.getElementById('result')

// Funcion para habilitar o desabilitar el boton
function checkFields() {

    if(temperatureInput.value && fromUnit.value && toUnit.value){
        convertButton.disabled = false;
    }else{

        convertButton.disabled = true
    }
}

// Event listeners para comprobar si los campos estan llenos
temperatureInput.addEventListener('input', checkFields)
fromUnit.addEventListener('change', checkFields)
toUnit.addEventListener('change', checkFields)

//Función de conversion de temperatura
function convertTemperature(temp, from, to){
    if( from === to ){
        return temp
    }
    let convertedTemp = 0
    if(from === FAHRENHEIT){
        if( to === CELSIUS){
            convertedTemp = (temp - 32 ) * 5 / 9
        } else if (to === KELVIN){
            convertedTemp = (temp - 32) * 5/9 + 273.5
        }
    }
    else if ( from === CELSIUS){
        if(to === FAHRENHEIT) {
            convertedTemp = (temp * 9/5) + 32
        }
        else if( to === KELVIN){
            convertedTemp = temp + 273.5
        }
    }
    else if( from === KELVIN ) {
        if(to === FAHRENHEIT){
            convertedTemp = (temp- 273.15) * 9/5 + 32
        }
        else if (to === CELSIUS) {
            convertedTemp = temp -273.15
        }
    }

    return convertedTemp

}

//funcion del evento
function buttonClick(e){
    e.preventDefault()
    const temperature = parseFloat(temperatureInput.value)
    const from = fromUnit.value
    const to = toUnit.value

    const convertedValue = convertTemperature(temperature, from, to)
    resultDisplay.textContent = `${temperature.toFixed(2)} ${from} son ${convertedValue.toFixed(2)} ${to}`
}

//evento al hacer click en el boton de conversion
convertButton.addEventListener('click', buttonClick)