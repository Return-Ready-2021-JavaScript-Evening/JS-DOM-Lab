// Temperature Conversion Functions
function farenheitDisplay(f) {
    f = Number(tempInput.value).toFixed(2);
    document.getElementById("farenheitValue").innerText = `${f} \xB0F`;
}


function fToC(f, c) {
    f = Number(tempInput.value);
    c = ((f - 32) * (5/9)).toFixed(2);
    document.getElementById("celsiusValue").innerText = `${c} \xB0C`;
}

function fToK(f, k) {
    f = Number(tempInput.value);
    k = ((f + 459.67) * (5/9)).toFixed(2);
    document.getElementById("kelvinValue").innerText = `${k} \xB0K`;
}

function fToR(f, r) {
    f = Number(tempInput.value);
    r = (f + 459.67).toFixed(2);
    document.getElementById("rankineValue").innerText = `${r} \xB0R`;
}

function celsiusDisplay(c) {
    c = Number(tempInput.value).toFixed(2);
    document.getElementById("celsiusValue").innerText = `${c} \xB0C`;
}

function cToF(c, f) {
    c = Number(tempInput.value);
    f = (c * 1.8 + 32).toFixed(2);
    document.getElementById("farenheitValue").innerText = `${f} \xB0F`;
}

function cToK(c, k) {
    c = Number(tempInput.value);
    k = (c + 273.15).toFixed(2);
    document.getElementById("kelvinValue").innerText = `${k} \xB0K`;
}

function cToR(c, r) {
    c = Number(tempInput.value);
    r = ((c + 273.15) * 1.8).toFixed(2);
    document.getElementById("rankineValue").innerText = `${r} \xB0R`;
}

function kelvinDisplay(k) {
    k = Number(tempInput.value).toFixed(2);
    document.getElementById("kelvinValue").innerText = `${k} \xB0K`;
}

function kToF(k, f) {
    k = Number(tempInput.value);
    f = (k * 1.8 - 459.67).toFixed(2);
    document.getElementById("farenheitValue").innerText = `${f} \xB0F`;
}

function kToC(k, c) {
    k = Number(tempInput.value);
    c = (k - 273.15).toFixed(2);
    document.getElementById("celsiusValue").innerText = `${c} \xB0C`;
}

function kToR(k, r) {
    k = Number(tempInput.value);
    r = (k * 1.8).toFixed(2);
    document.getElementById("rankineValue").innerText = `${r} \xB0R`;
}

function rankineDisplay(r) {
    r = Number(tempInput.value).toFixed(2);
    document.getElementById("rankineValue").innerText = `${r} \xB0R`;
}

function rToF(r, f) {
    r = Number(tempInput.value);
    f = (r - 459.67).toFixed(2);
    document.getElementById("farenheitValue").innerText = `${f} \xB0F`;
}

function rToC(r, c) {
    r = Number(tempInput.value);
    c = ((r - 491.67) * (5/9)).toFixed(2);
    document.getElementById("celsiusValue").innerText = `${c} \xB0C`;
}

function rToK(r, k) {
    r = Number(tempInput.value);
    k = (r * (5/9)).toFixed(2);
    document.getElementById("kelvinValue").innerText = `${k} \xB0K`;
}

// HTML Editing (Not sure if this is the proper indenting style, but it helped me keep track of the code.)
document.getElementById("tempBody").innerHTML += `<div id="outerBorder" class ="card m-3"></div>`;
    document.getElementById("outerBorder").innerHTML += `<h1 class="d-flex justify-content-center m-4">Temperature Scale Converter</h1>`;
    document.getElementById("outerBorder").innerHTML += `<div id="inputRow" class="row d-flex justify-content-center m-4"></div>`;
        document.getElementById("inputRow").innerHTML += `<div id="selectCol" class="col">`;
            document.getElementById("selectCol").innerHTML += `<label>Select Type</label><br>`;
            document.getElementById("selectCol").innerHTML += `<select id="dropDown" onchange="typeChange()"></select>`;
                document.getElementById("dropDown").innerHTML += `<option value="farenheit">Farenheit</option>`;
                document.getElementById("dropDown").innerHTML += `<option value="celsius">Celsius</option>`;
                document.getElementById("dropDown").innerHTML += `<option value="kelvin">Kelvin</option>`;
                document.getElementById("dropDown").innerHTML += `<option value="rankine">Rankine</option>`;
        document.getElementById("inputRow").innerHTML += `<div id="dataEntryCol" class="col">`;
            document.getElementById("dataEntryCol").innerHTML += `<label class="ml-4">Value</label><br>`;
            document.getElementById("dataEntryCol").innerHTML += `<input type="text" id="tempInput">`;
        document.getElementById("inputRow").innerHTML += `<div id="buttonCol" class="col">`;
            document.getElementById("buttonCol").innerHTML += `<br><button id="tempButton" onclick ="farenheitDisplay(), fToC(), fToK(), fToR()" class="px-4 mt-2">Calculate</button>`;
    document.getElementById("outerBorder").innerHTML += `<div id="outputRow" class="row d-flex justify-content-center mt-4">`;
        document.getElementById("outputRow").innerHTML += `<div id="farenheitCol" class="col ml-5">`;
            document.getElementById("farenheitCol").innerHTML += `<label><strong>Farenheit</strong></label><br>`;
            document.getElementById("farenheitCol").innerHTML += `<p id="farenheitValue"></p>`;
        document.getElementById("outputRow").innerHTML += `<div id="celsiusCol" class="col">`;
            document.getElementById("celsiusCol").innerHTML += `<label><strong>Celsius</strong></label><br>`;
            document.getElementById("celsiusCol").innerHTML += `<p id="celsiusValue"></p>`;
        document.getElementById("outputRow").innerHTML += `<div id="kelvinCol" class="col">`;
            document.getElementById("kelvinCol").innerHTML += `<label><strong>Kelvin</strong></label><br>`;
            document.getElementById("kelvinCol").innerHTML += `<p id="kelvinValue"></p>`;
        document.getElementById("outputRow").innerHTML += `<div id="rankineCol" class="col mr-5">`;
            document.getElementById("rankineCol").innerHTML += `<label><strong>Rankine</strong></label><br>`;
            document.getElementById("rankineCol").innerHTML += `<p id="rankineValue"></p>`;

// Select and Button Logic
let dropDown = document.getElementById("dropDown");
let buttonCol = document.getElementById("buttonCol");
function typeChange() {
    if(dropDown.value == "farenheit") {
        buttonCol.innerHTML = "";
        buttonCol.innerHTML += `<br><button id="tempButton" onclick ="farenheitDisplay(), fToC(), fToK(), fToR()" class="px-4 mt-2">Calculate</button>`;
    } else if(dropDown.value == "celsius") {
        buttonCol.innerHTML = "";
        buttonCol.innerHTML += `<br><button id="tempButton" onclick ="celsiusDisplay(), cToF(), cToK(), cToR()" class="px-4 mt-2">Calculate</button>`;
    } else if(dropDown.value == "kelvin") {
        buttonCol.innerHTML = "";
        buttonCol.innerHTML += `<br><button id="tempButton" onclick ="kelvinDisplay(), kToF(), kToC(), kToR()" class="px-4 mt-2">Calculate</button>`;
    } else if(dropDown.value == "rankine") {
        buttonCol.innerHTML = "";
        buttonCol.innerHTML += `<br><button id="tempButton" onclick ="rankineDisplay(), rToF(), rToC(), rToK()" class="px-4 mt-2">Calculate</button>`;
    }
}