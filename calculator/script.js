// imports 

let display = document.getElementById('display')
let previous = document.getElementById('previous')
let buttonOperator = document.querySelectorAll('[data-operator]')
let buttonNumber = document.querySelectorAll('[data-number]')
let buttonClear = document.querySelectorAll('[data-clear]')
let buttonEqual = document.querySelectorAll('[data-equal]')


buttonClear.forEach(button => {
    button.addEventListener('click', () =>{
        clearAll()
    })
})

buttonEqual.forEach(button =>{
    button.addEventListener('click', () =>{
        compute()
    })
})

buttonNumber.forEach(button =>{
    button.addEventListener('click', () =>{
        number = button.innerText
        appendNumber(number)
    })
})

buttonOperator.forEach(button =>{
    button.addEventListener('click', () =>{
        if (display.innerText === '.') return
        operator = button.innerText
        appendOperator(operator)
        clearDisplay()
    })
})

//  functions

function clearAll(){
    display.innerText = ''
    previous.innerText = ''
}

function clearDisplay(){
    display.innerText = ''
}

function appendNumber(number){
    if (number === '.' && display.innerText.includes('.')) return
    display.innerText = display.innerText + number
}

function appendOperator(operator){
    if (display.innerText == '') return
    if (previous.innerText !== ''){
        compute()
    }
    previous.innerText = display.innerText
}

function compute(){
    let computation
    const a = parseFloat(previous.innerText)
    const b = parseFloat(display.innerText)
    if (isNaN(a) || isNaN(b)) return
    switch (operator){
        case '+':
            computation = a + b
            break
        case '-':
            computation = a - b
            break
        case 'x':
            computation = a * b
            break
        case '÷':
            computation = a / b
            break
        default:
            return
    }
    display.innerText = computation
    operator = undefined
    previous.innerText = ''
}