

function calc(){
    let userInput = parseInt(document.getElementById('userInput').value)
    
    let cValue = (userInput - 32) * (5/9)

    document.getElementById('cValue').innerHTML = cValue
    
    
    
}
