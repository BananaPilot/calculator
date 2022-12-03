// imports 

let display = document.getElementById('display')
let previous = document.getElementById('previous')
let buttonOperator = document.querySelectorAll('[data-operator]')
let buttonNumber = document.querySelectorAll('[data-number]')
let buttonClear = document.querySelectorAll('[data-clear]')
let buttonEqual = document.querySelectorAll('[data-equal]')

buttonClear.forEach(button =>{
    button.addEventListener('click', () =>{
        clear()
    })
})

buttonEqual.forEach(button =>{
    button.addEventListener('click', () =>{
        const sum = previous.innerText + ' ' + display.innerText
        let split = sum.split(' ')
        clear()
        compute(split)
    })
})

buttonNumber.forEach(button =>{
    button.addEventListener('click', () =>{
        const number = button.innerText
        appendNumber(number)
    })
})

buttonOperator.forEach(button =>{
    button.addEventListener('click', () =>{
        const operator = button.innerText
        appendOperator(operator)
    })
})

function appendNumber (number) {
    if (number === '.' && display.innerText.includes('.')) return
    display.innerText = display.innerText + number
}

function appendOperator (operator) {
    if (display.innerText == '') return
    display.innerText = display.innerText + ' ' + operator
    previous.innerText = display.innerText
    clearDisplay()
}

function clearDisplay () {
    display.innerText = ''
}

function clear () {
    display.innerText = ''
    previous.innerText = ''
}

function compute (split) {
    if(split.includes('+')){
        split = split.map(Number)
        display.innerText = split[0] + split[2]
    }
    else if(split.includes('-')){
        split = split.map(Number)
        display.innerText = split[0] - split[2]
    }
    else if(split.includes('x')){
        split = split.map(Number)
        display.innerText = split[0] * split[2]
    }
    else if(split.includes('÷')){
        split = split.map(Number)
        display.innerText = split[0] / split[2]
    }
}