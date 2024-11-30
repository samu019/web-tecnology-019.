
// Función para encontrar el máximo común divisor (MCD) de dos números
function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage:
// console.log(gcd(48, 18)); // Debería generar 6
