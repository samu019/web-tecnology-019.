function minDigit(x) {
    let numero = x.toString();
    let minimo = 9;

    for (let i = 0; i < numero.length; i++) {
        let digito = parseInt(numero[i]);
        if (digito < minimo) {
            minimo = digito;
        }
    }

    return minimo;
}
