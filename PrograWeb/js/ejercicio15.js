let estudiantes = [];

function agregarEstudiante() {
    let nombre = document.getElementById("nombre").value.trim();
    let calificacion = document.getElementById("calificacion").value;

    if (nombre === "" || calificacion === "") {
        alert("Ingresa nombre y calificación.");
        return;
    }

    calificacion = parseFloat(calificacion);
    if (isNaN(calificacion) || calificacion < 0) {
        alert("La calificación debe ser un número positivo.");
        return;
    }

    let estudiante = {
        nombre: nombre,
        calificacion: calificacion
    };

    estudiantes.push(estudiante);

    document.getElementById("nombre").value = "";
    document.getElementById("calificacion").value = "";

    alert("Estudiante agregado correctamente.");
}

function calcularResultados() {
    if (estudiantes.length === 0) {
        alert("No hay estudiantes registrados.");
        return;
    }

    let promedio = estudiantes.reduce((total, e) => total + e.calificacion, 0) / estudiantes.length;

    let calificacionMaxima = Math.max(...estudiantes.map(e => e.calificacion));
    let calificacionMinima = Math.min(...estudiantes.map(e => e.calificacion));

    let estudianteMax = estudiantes.find(e => e.calificacion === calificacionMaxima);
    let estudianteMin = estudiantes.find(e => e.calificacion === calificacionMinima);

    document.getElementById("promedio").value = promedio.toFixed(2);
    document.getElementById("maximo").value = estudianteMax.nombre + " (" + estudianteMax.calificacion + ")";
    document.getElementById("minimo").value = estudianteMin.nombre + " (" + estudianteMin.calificacion + ")";
}
