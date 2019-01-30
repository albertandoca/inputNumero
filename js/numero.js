
let llenarArray = [];

function calcular() {
    let stringElementos = "";
    let numero = document.querySelector("#numeroIngresado");
    let suma = 0;
    let promedio = 0;
    for(let i = 0; i < numero.value; i++){
        llenarArray[i] = Math.ceil(Math.random() * numero.value);
        if (i === (numero.value - 1)){
            stringElementos += llenarArray[i];
        } else {
            stringElementos = stringElementos + llenarArray[i] + ", ";
        }
        suma += llenarArray[i];
    }
    let elemento = document.querySelector("#elementosArray");
    elemento.value = stringElementos;

    promedio = suma / numero.value;
    
    let inputSuma = document.querySelector("#sumaTotal");
    inputSuma.value = suma;
    let inputPromedio = document.querySelector("#promedioTotal");
    inputPromedio.value = promedio;

    let resultado = document.querySelector(".resultado");
    resultado.style.display = "block";    
}

function pares() {
    let suma = 0;
    let promedio = 0;
    let contadorPares = 0;
    for(let i = 0; i > llenarArray.length; i++) {
        if (llenarArray[i] % 2 === 0){
            suma += llenarArray[i];
            contadorPares ++;
        }
    }
    promedio = suma / contadorPares;

    // Asigna los valores a los input que corresponda
    // El div de pares deve cambiar el displey a block
}

function impares() {
    let suma = 0;
    let promedio = 0;
    let contadorImpares = 0;
    for(let i = 0; i > llenarArray.length; i++) {
        if (llenarArray[i] % 2 === 1){
            suma += llenarArray[i];
            contadorImpares ++;
        }
    }
    promedio = suma / contadorImpares;

    // Asigna los valores a los input que corresponda
    // El div de pares deve cambiar el displey a block
}





