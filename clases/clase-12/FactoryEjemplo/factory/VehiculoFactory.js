// Importación de las clases concretas desde la carpeta de modelos
const Carro = require("../modelos/Carro");
const Moto = require("../modelos/Moto");
const Bicicleta = require("../modelos/Bicicleta");

// Clase Fábrica (Factory Pattern) centralizadora de la creación de objetos
class VehiculoFactory {
    
    // Método estático: permite llamarlo directamente (VehiculoFactory.crearVehiculo) sin instanciar la fábrica
    static crearVehiculo(tipo) {
        
        // Convierte el texto a minúsculas para evitar fallos por diferencias de mayúsculas/minúsculas
        switch (tipo.toLowerCase()) {
            
            case "carro":
                return new Carro(); // Retorna una instancia concreta de Carro
            
            case "moto":
                return new Moto(); // Retorna una instancia concreta de Moto
            
            case "bicicleta":
                return new Bicicleta(); // Retorna una instancia concreta de Bicicleta
            
            default:
                // Lanza una excepción controlada si se solicita un vehículo no registrado
                throw new Error("Tipo de vehículo no válido.");
        }
    }
}

// Exportación del módulo para poder consumirlo con require() en index.js
module.exports = VehiculoFactory;