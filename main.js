// simulador prestamo personal. 
let tasa1 = 0.062;
let tasa2 = 0.065;
let tasa3 = 0.067;
let tasa4 = 0.069;
let prestamo;
let totalPrestamo;
infoCliente()
function infoCliente(){
    let nombre = parseInt(prompt("ingresa tu nombre"));    
    let cuota = parseInt(prompt("cantidad de cuotas, mínimo 3, máximo 60"));
    if(cuota>0 && cuota<=6){
    alert(`tasa 69%`);
    let prestamo = parseInt(prompt("ingresa el monto"));
    let totalPrestamo = parseInt((prestamo*cuota*tasa4)+prestamo);
    alert(`el total a devolver es de ${totalPrestamo}`);
    }
    else if(cuota>=7 && cuota<=11){
        alert(`tasa 67%`);
        let prestamo = parseInt(prompt("ingresa monto"));
        let totalPrestamo = parseInt((prestamo*cuota*tasa3)+prestamo);
        alert(`el total a devolver es de ${totalPrestamo}`);
    }
    else if(cuota>=12 && cuota<=48){
        alert(`tasa 65%`);
        let prestamo = parseInt(prompt("ingresa monto"));
        let totalPrestamo = parseInt((prestamo*cuota*tasa2)+prestamo);
        alert(`el total a devolver es de ${totalPrestamo}`);
    }
    else if(cuota>=49 && cuota<=60){
        alert(`tasa 62%`);
        let prestamo = parseInt(prompt("ingresa monto"));
        let totalPrestamo = parseInt((prestamo*cuota*tasa1)+prestamo);
        alert(`el total a devolver es de ${totalPrestamo}`);
    } 
    else{alert("error en la informacion ingresada")}
}
