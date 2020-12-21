// f to c cnvertor function

function calc(userInput){
    userInput = document.getElementsByClassName('userInput').value
    let c = document.getElementsByClassName('c').value
    c += userInput - 32 * (5/9)
    console.log(c)
}
// getting calc butten to work

let button = document.getElementsByClassName('calculateButton')

button[0].addEventListener('click', calc);
