function fizzbuzz() {
    let result = "";
    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result += i + " FizzBuzz\n";
        } else if (i % 3 === 0) {
            result += i + " Fizz\n";
        } else if (i % 5 === 0) {
            result += i + " Buzz\n";
        }
    }
    alert(result);
    document.addEventListener("DOMContentLoaded", () => {
        const boton = document.getElementById("btnFizzBuzz");
        boton.addEventListener("click", fizzBuzz);
    });
}
/*Dado el arreglo [4, 8, 15, 16, 23, 42], calcula la suma total con un ciclo for…of.*/
function sumaArray() {
    const array = [4, 8, 15, 16, 23, 42];
    let result = 0;
    for (const num of array) {
        result += num;
    }
    alert(result);
    document.addEventListener("DOMContentLoaded", () => {
        const boton = document.getElementById("btnSumArray");
        boton.addEventListener("click", sumaArray);
    });
}
