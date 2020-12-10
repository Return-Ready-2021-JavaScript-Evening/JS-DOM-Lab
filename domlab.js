
let input = document.querySelector('input')
let cValue = (input - 32) *  5/9

const span = document.querySelector("span")
const button = document.querySelector('calulateButton')

button.addEventListener('click', () => {
    cValue = span.value
})
