let buttonNum = document.querySelectorAll('[data-number]')
let buttonOperator = document.querySelectorAll('[data-operator]')
let display = document.getElementById('display')
let clear = document.querySelectorAll('[data-c]')
let equal = document.querySelectorAll('[data-equal]')
let previous = document.getElementById('previous')

clear.forEach(button =>{
    button.addEventListener('click', () =>{
        clearAll()
    })
})

buttonOperator.forEach(button =>{
    button.addEventListener('click', () =>{
        const op = button.innerText
        selectOperator(op)
        updateDisplay()
        previous.innerText = display.innerText
        display.innerText = ''
    })
})

buttonNum.forEach(button =>{
    button.addEventListener('click', ()=>{
        const num = button.innerText
        appendNumber(num)
        updateDisplay()
    })
})

    equal.forEach(button =>{
        button.addEventListener('click', ()=>{
            if (previous.innerText == '') return
            let toSum = previous.innerText + ' ' + display.innerText
            let split = toSum.split(' ')
            clearAll()
            compute(split)
        })
    })

//        functions

    function selectOperator(op){
        if(display.innerText == '') return
        display.innerText = display.innerText + ' ' + op
    }

    function appendNumber(num) {
        if (num === '.' && this.display.innerText.includes('.')) return
        this.display.innerText = display.innerText + num
    }

    function updateDisplay() {
        this.display.innerText = display.innerText
    }

    function clearAll() {
        display.innerText = ''
        previous.innerText = ''
    }

    function compute(split) {
        if (split.includes('+')){
            split = split.map(Number)
            display.innerText = split[0] + split[2]
        }
        else if (split.includes('x')){
            split = split.map(Number)
            display.innerText = split[0] * split[2]
        }
        else if (split.includes('-')){
            split = split.map(Number)
            display.innerText = split[0] - split[2]
        }
        else {
           split = split.map(Number)
            display.innerText = split[0] / split[2]
        }
    }