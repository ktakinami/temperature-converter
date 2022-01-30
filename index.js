let resultBox = document.getElementById("results")

function fromCelsius() {
    degree = document.getElementById("degree-input").value
    if(isNaN(degree) || degree == "" || degree.indexOf(' ') >= 0) {
        alert("Please enter a numeric value!")
        reset()
    } else {
    document.getElementById("result-1").innerHTML = degree + "° Celsius"
    document.getElementById("result-2").innerHTML = (degree * (9/5) + 32).toFixed(1) + "° Fahrenheit"
    document.getElementById("result-3").innerHTML = Math.floor((parseFloat(degree) + 273)) + "° Kelvin"
    
    show()
    }
}

function fromFahrenheit() {
    degree = document.getElementById("degree-input").value
    if(isNaN(degree) || degree == "" || degree.indexOf(' ') >= 0) {
        alert("Please enter a numeric value!")
        reset()
    } else {
    document.getElementById("result-1").innerHTML = degree + "° Fahrenheit"
    document.getElementById("result-2").innerHTML = ((parseFloat(degree) - 32) * (5/9)).toFixed(1) + "° Celsius"
    document.getElementById("result-3").innerHTML = ((parseFloat(degree) - 32) * (5/9) + 273).toFixed(1) + "° Kelvin"

    show()
    }
}

function fromKelvin() {
    degree = document.getElementById("degree-input").value
    if(isNaN(degree) || degree == "" || degree.indexOf(' ') >= 0) {
        alert("Please enter a numeric value!")
        reset()
    } else {
    document.getElementById("result-1").innerHTML = degree + "° Kelvin"
    document.getElementById("result-2").innerHTML = (parseFloat(degree) - 273).toFixed(1) + "° Celsius"
    document.getElementById("result-3").innerHTML = ((parseFloat(degree) - 273) * (9/5) + 32).toFixed(1) + "° Fahrenheit"

    show()
    }
}

function clearOnFocus() {
    document.getElementById("degree-input").value = ""
}

function show() {
    let deg = document.getElementById("degree-input")
    
    resultBox = document.getElementById("results")
    resultBox.style.display = "block"
}

function reset() {
    document.getElementById("degree-input").value = ""
    resultBox.style.display = "none"
}
