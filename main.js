let prestamo = parseInt(prompt("Monto de prestamo solicitado?"));
let tiempo = parseInt(prompt("cantidad de cuotas?"));
let destino = parseInt(prompt("cual va a ser su destino? \n 1.Personal \n 2. Prendario"));
    if ((destino == 1) && (tiempo>=3 && tiempo <=18)) {

        let resultado = parseInt(prompt("Hola, en este caso tu préstamo esta alcanzado por un CFT del 62%"));}
    else if ((destino == 2) && (tiempo<= 18)){
        let resultado = parseInt(prompt("Hola, en este caso tu préstamo esta alcanzado por un CFT del 23%"));}
    else if ((destino == 1) && (tiempo>=4 && tiempo <=60)){
        let resultado = parseInt(prompt("Hola, en este caso tu préstamo estas alcanzado por una CFT del 65%"));
    }
    

    

/* while((tiempo>3) && (tiempo<=18)){
    let interes = 0.45;
    // let montoCuota = (prestamo / tiempo)
} */

console.log(prestamo);
console.log(tiempo);

// console.log(interes);
// console.log(montoCuota);