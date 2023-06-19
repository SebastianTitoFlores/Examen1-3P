function encontrarPrimos() {
    let numero = parseInt(document.getElementById("numero").value);
    let primos = [];

    
    for (let i=2; i<=numero; i++) {
        let esPrimo = true;
        for (let j=2; j<=Math.sqrt(i); j++) {
            if (i % j == 0) {
                esPrimo = false;
                break;
            }
        }
        if (esPrimo) {
            primos.push(i);
        }
    }

    
    let numerosPrimos = primos.join(", ");
    document.getElementById("numeros-primos").innerText = numerosPrimos;

    
    let numeroDePrimos = primos.length;
    document.getElementById("numero-de-primos").innerText = numeroDePrimos;
}