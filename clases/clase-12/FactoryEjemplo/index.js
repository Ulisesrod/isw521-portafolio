const VehiculoFactory = require("./factory/VehiculoFactory");

// Ver qué está exportando el archivo
console.log(VehiculoFactory);

// Intentar crear un carro
const carro = VehiculoFactory.crearVehiculo("carro");
carro.conducir();

const moto = VehiculoFactory.crearVehiculo("moto");
moto.conducir();

const bicicleta = VehiculoFactory.crearVehiculo("bicicleta");
bicicleta.conducir();