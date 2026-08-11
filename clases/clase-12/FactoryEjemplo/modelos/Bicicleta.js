const Vehiculo = require("../interfaces/Vehiculo");

class Bicicleta extends Vehiculo {

    conducir() {
        console.log("Conduciendo una bicicleta.");
    }

}

module.exports = Bicicleta;