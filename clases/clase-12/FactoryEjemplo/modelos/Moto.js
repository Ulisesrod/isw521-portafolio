const Vehiculo = require("../interfaces/Vehiculo");

class Moto extends Vehiculo {

    conducir() {
        console.log("Conduciendo una moto.");
    }

}

module.exports = Moto;