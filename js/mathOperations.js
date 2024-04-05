// mathOperations.js
export function powers() {
    const base = Math.floor(Math.random() * 11);
    let power;
    if (base <= 4){
        power = Math.floor(Math.random() * 6);
    }else{
        power = Math.floor(Math.random() * 5);
    }
    realAnswer = base ** power; 
    document.getElementById("math-operation-text").innerHTML = `¿Cuánto es ${base} elevado a la ${power}?`;
    document.getElementById("math-operation").innerHTML = `${base}<sup>${power}</sup>`;
    document.getElementById("math-operation").classList.add("display-4");
}

export function roots() {
    const root = Math.floor(Math.random() * 2) + 2;
    let base;
    if (root == 2){
        base = Math.floor(Math.random() * 10) + 1;
    }else{
        base = Math.floor(Math.random() * 4) + 1;
    }
    base **= root;
    realAnswer = Math.round(Math.pow(base, 1 / root));
    console.log(realAnswer)
    let operationText;
    if (root === 2) {
        operationText = "cuadrada";
        document.getElementById("math-operation").innerHTML = `&radic;${base}`;
    } else if (root === 3) {
        operationText = "cúbica";
        document.getElementById("math-operation").innerHTML = `<sup>3</sup>&radic;${base}`;
    }
    document.getElementById("math-operation-text").innerHTML = `¿Cuánto es la raíz ${operationText} de ${base}?`;
    document.getElementById("math-operation").classList.add("display-4");
}
