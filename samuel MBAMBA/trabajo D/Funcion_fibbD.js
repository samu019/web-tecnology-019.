function fibb(n) {
    // Validar que n sea un número no negativo y menor o igual a 1000
    if (n < 0 || n > 1000) {
        throw new Error("El valor de n debe estar entre 0 y 1000.");
    }

    // Caso base: si n es 0 o 1
    if (n === 0) return 0;
    if (n === 1) return 1;

    // Variables para los números de Fibonacci
    let a = 0, b = 1;

    // Calcular el n-ésimo número de Fibonacci
    for (let i = 2; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}
