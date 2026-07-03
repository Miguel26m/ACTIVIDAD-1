function convertir() {
    var pesos = document.getElementById("pesos").value;

   if (pesos === "" || pesos < 0) {
        alert("Ingresa un numero avlido");
        pesos.value = "";
        return;
   }
    var dolares = pesos * 0.055;

    document.getElementById("dolares").value = dolares;
}
