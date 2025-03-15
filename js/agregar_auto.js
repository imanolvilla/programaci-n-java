// Definición de la clase Auto
export class Auto { 

    // Constructor de la clase Auto
    constructor(marca, modelo, precio) {
        // Asignación de la marca del auto
        this.marca = marca;
        
        // Asignación del modelo del auto
        this.modelo = modelo;
        
        // Conversión del precio a un número de punto flotante y asignación
        this.precio = parseFloat(precio);
        
        // Generación de un ID único para cada instancia de Auto
        this.id = Auto.incrementId();
    }

    // Método estático para incrementar y devolver un ID único
    static incrementId() {
        // Inicializa currentId si no ha sido definido
        if (!this.currentId) {
            this.currentId = 0; // Comienza desde 0
        }
        // Incrementa currentId y lo devuelve
        return ++this.currentId;
    }
}