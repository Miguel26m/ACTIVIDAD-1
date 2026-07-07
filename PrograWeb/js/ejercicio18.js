const input = document.getElementById('nuevoElemento');
const botonAgregar = document.getElementById('agregarBtn');
const lista = document.getElementById('lista');

const agregarElemento = () => {
    const texto = input.value.trim();

    if (texto !== '') {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.textContent = texto;

        const botonEliminar = document.createElement('button');
        botonEliminar.className = 'btn btn-danger btn-sm';
        botonEliminar.textContent = 'Eliminar';

        botonEliminar.addEventListener('click', () => li.remove());

        li.appendChild(botonEliminar);
        lista.appendChild(li);

        input.value = '';
        input.focus();
    } else {
        Swal.fire({
            title: "error",
            text: "Debes escribir algo",
            icon: "error",
        });
    }
};

botonAgregar.addEventListener('click', agregarElemento);

