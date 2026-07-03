function comprobar() {
    var edad = document.getElementById("edad").value;
    var resultado = document.getElementById("resultado");

    if (edad === "" || isNaN(edad)) {
        alert("Por favor ingresa un número válido.");
        return;
    }

    edad = parseInt(edad);

    if (edad <= 0) {
        alert("La edad debe ser positiva.");
        return;
    }

    if (edad >= 18) {
        resultado.value = "Puedes votar";
    } else {
        resultado.value = "No puedes votar";
    }
}

