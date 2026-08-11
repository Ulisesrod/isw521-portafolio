const Vehiculo = require("../interfaces/Vehiculo");

class Carro extends Vehiculo {

    conducir() {
        console.log("Conduciendo un carro.");
    }

}

module.exports = Carro;