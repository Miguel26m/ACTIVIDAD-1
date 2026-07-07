const gestionTareas = (() => {
    let tareas = JSON.parse(localStorage.getItem('Tareas')) || [];

    const guardar = () => localStorage.setItem('Tareas', JSON.stringify(tareas));
    
    const renderizar = () => {
        const lista = document.getElementById('listaTareas');
        lista.innerHTML = '';
        tareas.forEach((tarea, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${tarea} 
                <button onclick="acciones.eliminar(${index})">Eliminar</button>
            `;
            lista.appendChild(li);
        });
    };
    
    return {
        agregar: (tarea) => {
            tareas.push(tarea);
            guardar();
            renderizar();
        },
        eliminar: (index) => {
            Swal.fire({
                title: 'Quieres eliminar esta tarea?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar'
            }).then((result) => {
                if (result.isConfirmed) {
                    tareas.splice(index, 1);
                    guardar();
                    renderizar();
                }
            });
        },
        iniciar: () => renderizar()
    };
})();

const acciones = gestionTareas;

document.getElementById('botonAgregar').addEventListener('click', () => {
    const input = document.getElementById('inputTarea');
    if (input.value) {
        acciones.agregar(input.value);
        input.value = '';
    }
});

acciones.iniciar();