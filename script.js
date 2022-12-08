// imports 

let display = document.getElementById('display')
let previous = document.getElementById('previous')
let buttonOperator = document.querySelectorAll('[data-operator]')
let buttonNumber = document.querySelectorAll('[data-number]')
let buttonClear = document.querySelectorAll('[data-clear]')
let buttonEqual = document.querySelectorAll('[data-equal]')


buttonClear.forEach(button => {
    button.addEventListener('click', () =>{
        display.setSelectionRange(display.value.length,display.value.length);
        clearAll()
    })
})

buttonEqual.forEach(button =>{
    button.addEventListener('click', () =>{
        display.setSelectionRange(display.value.length,display.value.length);
        compute()
    })
})

buttonNumber.forEach(button =>{
    button.addEventListener('click', () =>{
        display.setSelectionRange(display.value.length,display.value.length);
        number = button.innerText
        appendNumber(number)
    })
})

buttonOperator.forEach(button =>{
    button.addEventListener('click', () =>{
        if (display.value === '.') return
        operator = button.innerText
        appendOperator(operator)
        clearDisplay()
    })
})

//  functions

function clearAll(){
    display.value = ''
    previous.innerText = ''
}

function clearDisplay(){
    display.value = ''
}

function appendNumber(number){
    if (number === '.' && display.value.includes('.')) return
    display.value = display.value + number
}

function appendOperator(operator){
    if (display.value == '') return
    if (previous.innerText !== ''){
        compute()
    }
    previous.innerText = display.value
}

function compute(){
    let computation
    const a = parseFloat(previous.innerText)
    const b = parseFloat(display.value)
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
    display.value = computation
    operator = undefined
    previous.innerText = ''
}