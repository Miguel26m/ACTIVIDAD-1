function convertir() {
    var kilometros = document.getElementById("kilometros").value;

    if (kilometros === "" || isNaN(kilometros)) {
        alert("Por favor ingresa un número válido en Km.");
        return;
    }
    var millas = kilometros * 0.621371;

    document.getElementById("millas").value = millas;
}
