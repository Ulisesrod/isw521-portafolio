// Clase base (simula una Interfaz o Clase Abstracta)
class Vehiculo {

    // Método plantilla: obliga a las clases hijas (Carro, Moto, Bicicleta) a implementar su propia versión
    conducir() {
        // Lanza un error en tiempo de ejecución si una clase hija llama a conducir() sin haberlo sobreescrito
        throw new Error("Este método debe implementarse.");
    }

}

// Exporta la clase base para poder ser heredada (extends) en la carpeta de modelos
module.exports = Vehiculo;