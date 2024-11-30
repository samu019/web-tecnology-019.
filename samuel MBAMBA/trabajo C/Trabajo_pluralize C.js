
function pluralize(n) {
    let forma;
    if (n % 10 === 1 && n % 100 !== 11) {
        forma = "запись"; // Singular (one)
    } else if (
        n % 10 >= 2 &&
        n % 10 <= 4 &&
        (n % 100 < 10 || n % 100 >= 20)
    ) {
        forma = "записи"; // Plural para few
    } else {
        forma = "записей"; // Plural para many
    }

    return `Como resultado de la solicitud se encontró ${n} ${forma}`;
}
