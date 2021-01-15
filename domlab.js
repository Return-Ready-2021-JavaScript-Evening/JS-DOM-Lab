
// celsius convertor
function calc(){
    let userInput = parseInt(document.getElementById('userInput').value)
    
    // celsius
    let cValue = (userInput - 32) * (5/9)
    document.getElementById('cValue').innerHTML = cValue
    
    // kelvin
    let kelvin = (userInput - 32) * (5/9) + 273.15
    document.getElementById('kelvin').innerHTML = kelvin

    // rankine
    let rankine = userInput + 459.67
    document.getElementById('rankine').innerHTML = rankine

    

}
