let num1 = Number(prompt('Ingresa el primer numero'));
let num2 = Number(prompt('Ingresa el segundo numero'));
let num3 = Number(prompt('Ingresa el tercer numero'));


console.log(`Números ingresados: ${num1}, ${num2}, ${num3}`);

function ordenarNumeros(a, b, c) {
    let mayor, medio, menor;

    if (a === b && b === c) {
        console.log("Los números son iguales");
        return [a, b, c];
    }

    if (a >= b && a >= c) {
        mayor = a;
        if (b >= c) {
            medio = b;
            menor = c;
        } else {
            medio = c;
            menor = b;
        }
    } else if (b >= a && b >= c) {
        mayor = b;
        if (a >= c) {
            medio = a;
            menor = c;
        } else {
            medio = c;
            menor = a;
        }
    } else {
        mayor = c;
        if (a >= b) {
            medio = a;
            menor = b;
        } else {
            medio = b;
            menor = a;
        }
    }

    return [mayor, medio, menor];
}

let [mayor, medio, menor] = ordenarNumeros(num1, num2, num3);

console.log(`Números ordenados de mayor a menor: ${mayor}, ${medio}, ${menor}`);
console.log(`Números ordenados de menor a mayor: ${menor}, ${medio}, ${mayor}`);

