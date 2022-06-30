let button = document.querySelector('button');
let divResult = document.querySelector('.result');
let weightInput = document.querySelector('.weight')
let heightInput = document.querySelector('.height')

let imcCalculator = (weight, height, result) => {
    button.addEventListener('click', () => {
        weight = weightInput.value.replace(",", ".")
        height = heightInput.value.replace(",", ".")
        result = Number(weight / (height * height))
        let checkClassification = (weightClassification) => {
            if (result < 18.5) { weightClassification = 'Abaixo do peso'}
            else if (result >= 18.5 && result < 25) { weightClassification = 'Peso normal'}
            else if (result >= 25 && result < 30) { weightClassification = 'Sobrepeso'}
            else if (result >= 30 && result < 35) { weightClassification = 'Obesidade Grau 1'} 
            else if (result >= 35 && result < 40) { weightClassification = 'Obesidade Grau 2'}
            else if (result >= 40) { weightClassification = 'Obesidade Grau 3'}
            return weightClassification
        }
        divResult.textContent = `O IMC é: ${result.toString().slice(0, 5).replace(",", ".")} (${checkClassification()})`
    })
}

imcCalculator()
button.addEventListener('click', () => { divResult.removeAttribute('id') })
button.addEventListener('click', event => event.preventDefault())