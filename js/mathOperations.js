// mathOperations.js
export function powers() {
    const base = Math.floor(Math.random() * 11);
    let power;
    if (base <= 4){
        power = Math.floor(Math.random() * 6);
    }else{
        power = Math.floor(Math.random() * 5);
    }
    let answer = base ** power;     
    return { base, power, answer };
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
    let answer = Math.round(Math.pow(base, 1 / root));
    return { base, root, answer };
}
