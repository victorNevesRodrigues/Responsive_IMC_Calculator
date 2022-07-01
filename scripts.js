let button = document.querySelector('button')
let divResult = document.querySelector('.result')

function imcCalculator () {
    let weightInput = document.querySelector('.weight').value.replace(",", ".")
    let heightInput = document.querySelector('.height').value.replace(",", ".")
    let result = Number(weightInput / (heightInput * heightInput))
    return result
}

function checkClassification (result) {
    result = imcCalculator()
    let weightClassification = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade Grau 1', 'Obesidade Grau 2', 'Obesidade Grau 3']
    if (result >= 40) return weightClassification[5]
    if (result >= 35) return weightClassification[4]
    if (result >= 30) return weightClassification[3]
    if (result >= 25) return weightClassification[2]
    if (result >= 18.5) return weightClassification[1]
    if (result < 18.5) return weightClassification[0]
}

function setResult () {
    let imcResult = imcCalculator()
    let checkresult = checkClassification()
    let finalResult = `${imcResult.toString().slice(0, 5).replace(".", ",")} (${checkresult})`
    return finalResult
}

button.addEventListener('click', (event) => {
    event.preventDefault()
    divResult.removeAttribute('id')
    divResult.textContent = `O IMC é: ${setResult()}`
})

