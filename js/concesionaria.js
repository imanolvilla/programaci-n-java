// Importación de la clase Auto y la función obtenerAutos
import { Auto } from './agregar_auto.js';
import { obtenerAutos } from './obtener_autos.js';

// Definición de la clase Concesionaria
export class Concesionaria {
    // Constructor de la clase Concesionaria
    constructor() {
        this.autos = []; // Inicializa un array para almacenar los autos
        this.cargarAutosIniciales(); // Carga los autos iniciales al crear la concesionaria
    }

    // Método para cargar autos iniciales desde una fuente externa
    cargarAutosIniciales() {
        const autosIniciales = obtenerAutos(); // Obtiene los datos de autos iniciales
        // Itera sobre cada auto inicial y crea una instancia de Auto
        autosIniciales.forEach(autoData => {
            let objAuto = new Auto(autoData.marca, autoData.modelo, autoData.precio);
            this.autos.push(objAuto); // Agrega el auto a la lista de autos
        });
        this.actualizarTabla(); // Actualiza la tabla para mostrar los autos
    }

    // Método para agregar un nuevo auto a la concesionaria
    agregarAuto(marca, modelo, precio) {
        let id = this.autos.length + 1; // Genera un ID basado en la longitud actual del array
        let objAuto = new Auto(marca, modelo, precio); // Crea una nueva instancia de Auto
        this.autos.push(objAuto); // Agrega el nuevo auto a la lista
        this.actualizarTabla(); // Actualiza la tabla para mostrar el nuevo auto
    }

    // Método para actualizar la tabla de autos en la interfaz
    actualizarTabla() {
        let tableBody = document.getElementById('cars-table-body'); // Obtiene el cuerpo de la tabla
        tableBody.innerHTML = ''; // Limpia el contenido actual de la tabla
        // Itera sobre cada auto y crea una fila en la tabla
        this.autos.forEach(auto => {
            let row = `<tr>
                <td>${auto.id}</td>
                <td>${auto.marca}</td>
                <td>${auto.modelo}</td>
                <td>${auto.precio}</td>
            </tr>`;
            tableBody.innerHTML += row; // Agrega la fila al cuerpo de la tabla
        });
    }

    // Método para mostrar el auto más caro en una alerta
    mostrarAutoMasCaro() {
        let mayorPrecio = 0; // Inicializa la variable para el mayor precio
        let autoMasCaro = null; // Inicializa la variable para el auto más caro
        // Itera sobre los autos para encontrar el más caro
        for (let auto of this.autos) {
            if (auto.precio > mayorPrecio) {
                mayorPrecio = auto.precio; // Actualiza el mayor precio
                autoMasCaro = auto; // Actualiza el auto más caro
            }
        }
        // Muestra una alerta con la información del auto más caro
        if (autoMasCaro) {
            Swal.fire({
                title: "Auto más caro",
                text: `El auto más caro es: ${autoMasCaro.marca} modelo ${autoMasCaro.modelo} con un precio de $${autoMasCaro.precio}`,
                icon: "info"
              });
              
           // alert(`El auto más caro es: ${autoMasCaro.marca} modelo ${autoMasCaro.modelo} con un precio de $${autoMasCaro.precio}`);
        } else {
            Swal.fire({
                title: "Alert",
                text: `No hay autos en la concesionaria.`,
                icon: "error",
              });
            //alert("No hay autos en la concesionaria."); // Mensaje si no hay autos
        }
    }
}