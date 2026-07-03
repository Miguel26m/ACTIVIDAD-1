function convertir() {
    var celsius = document.getElementById("celsius").value;

    if (celsius === "" || isNaN(celsius)) {
        alert("Por favor ingresa un número válido en °C.");
        return;
    }
    var fahrenheit = (celsius * 9/5) + 32;

    document.getElementById("fahrenheit").value = fahrenheit + " °F";
}
