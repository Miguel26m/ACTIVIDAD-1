const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => b !== 0 ? a / b : 'Error: División por cero';

const calcularOperacion = (tipo) => {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    const inputResultado = document.getElementById('resultado');

    if (isNaN(num1) || isNaN(num2)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingresa números válidos en ambos campos.'
        });
        return;
    }

    let resultado;

    switch (tipo) {
        case 'suma': resultado = sumar(num1, num2); break;
        case 'resta': resultado = restar(num1, num2); break;
        case 'multiplicar': resultado = multiplicar(num1, num2); break;
        case 'dividir': 
            resultado = dividir(num1, num2); 
            if (resultado === 'Error: División por cero') {
                Swal.fire('Error', resultado, 'error');
                return;
            }
            break;
    }

    inputResultado.value = resultado;
};