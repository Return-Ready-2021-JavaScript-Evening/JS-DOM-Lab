
// Fahrenheit Converter 


function fahrenheitConverter(){
    let tempToConvert = parseInt(document.getElementById("temp").value);
    let convertedTempToCelsius = (tempToConvert - 32) * 5/9;
    let convertedTempToKelvin = (tempToConvert - 32) * 5/9 + 273.15;
    let convertedTempToRankine = tempToConvert + 459.67;
    document.getElementById("celsius").innerHTML = convertedTempToCelsius;
    document.getElementById("kelvin").innerHTML = convertedTempToKelvin;
    document.getElementById("rankine").innerHTML = parseFloat(convertedTempToRankine).toFixed(2);
    document.getElementById("fahrenheit").innerHTML = tempToConvert;



}

function control(){
    let startingScale = document.getElementById("scale").value;
    if(startingScale === 'fahrenheit'){
        fahrenheitConverterx();
    } else if(startingScale === 'celsius'){
        celciusConverter();
    }else if(startingScale === 'kelvin'){
        kelvinConverter();
    }else if(startingScale === 'rankine'){
        rankineConverter();
    }

}

function fahrenheitConverterx(){
    let tempToConvert = parseInt(document.getElementById("tempc").value);
    let convertedTempToCelsius = (tempToConvert - 32) * 5/9;
    let convertedTempToKelvin = (tempToConvert - 32) * 5/9 + 273.15;
    let convertedTempToRankine = tempToConvert + 459.67;
    
    document.getElementById("celsiusc").innerHTML = convertedTempToCelsius;
    document.getElementById("kelvinc").innerHTML = convertedTempToKelvin;
    document.getElementById("rankinec").innerHTML = parseFloat(convertedTempToRankine).toFixed(2);
    document.getElementById("fahrenheitc").innerHTML = tempToConvert;
}

function  celciusConverter(){
    let celsiusTempConverter = parseInt(document.getElementById("tempc").value);
    let convertTempToFahrenheit = (celsiusTempConverter * 9/5) + 32;
    let convertTempToKelvin = celsiusTempConverter + 273.15;
    let convertTempToRankine = celsiusTempConverter * 9/5 + 491.67;
    
    document.getElementById("fahrenheitc").innerHTML = convertTempToFahrenheit;
    document.getElementById("kelvinc").innerHTML = convertTempToKelvin;
    document.getElementById("rankinec").innerHTML = convertTempToRankine.toFixed(2);
    document.getElementById("celsiusc").innerHTML = celsiusTempConverter;
}



function kelvinConverter(){
    let kelvinTempConverter = parseInt(document.getElementById("tempc").value);
    let convertTempToFahrenheit = (kelvinTempConverter - 273.15) * 9/5 + 32;
    let convertTempTocelsius = kelvinTempConverter - 273.15;
    let convertTempToRankine = kelvinTempConverter * 1.8;
    
    document.getElementById("fahrenheitc").innerHTML = convertTempToFahrenheit;
    document.getElementById("celsiusc").innerHTML = convertTempTocelsius;
    document.getElementById("rankinec").innerHTML = convertTempToRankine.toFixed(2);
    document.getElementById("kelvinc").innerHTML = kelvinTempConverter;


}


function rankineConverter(){
    let rankineTempConverter = parseInt(document.getElementById("tempc").value);
    let convertTempToFahrenheit = rankineTempConverter - 459.67;
    let convertTempToKelvin = rankineTempConverter  + 273.15;
    let convertTempToCelsius = (rankineTempConverter - 491.67) * 5/9;
    
    document.getElementById("fahrenheitc").innerHTML = convertTempToFahrenheit.toFixed(2);
    document.getElementById("kelvinc").innerHTML = convertTempToKelvin.toFixed(2);
    document.getElementById("celsiusc").innerHTML = convertTempToCelsius.toFixed(2);
    document.getElementById("rankinec").innerHTML = rankineTempConverter;


}
