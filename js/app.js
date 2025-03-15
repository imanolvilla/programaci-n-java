// Importación de la clase Concesionaria desde el archivo concesionaria.js
import { Concesionaria } from './concesionaria.js';

// Creación de una nueva instancia de la clase Concesionaria
let objConcesionaria = new Concesionaria();

// Evento para mostrar el modal de agregar auto al hacer clic en el botón
document.getElementById('add-car-btn').addEventListener('click', () => {
    // Muestra el modal para agregar un nuevo auto
    $('#addCarModal').modal('show');
});

// Evento para manejar el envío del formulario de agregar auto
document.getElementById('car-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Obtención de los valores ingresados en el formulario
    let marca = document.getElementById('car-brand').value;
    let modelo = document.getElementById('car-model').value;
    let precio = document.getElementById('car-price').value;

    // Llamada al método agregarAuto de la instancia de Concesionaria
    objConcesionaria.agregarAuto(marca, modelo, precio);

    // Oculta el modal después de agregar el auto
    $('#addCarModal').modal('hide');
});

// Evento para mostrar el auto más caro al hacer clic en el botón correspondiente
document.getElementById('show-most-expensive-btn').addEventListener('click', () => {
    // Llama al método mostrarAutoMasCaro de la instancia de Concesionaria
    objConcesionaria.mostrarAutoMasCaro();
});