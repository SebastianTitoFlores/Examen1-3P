function multiplos() {
    var num = parseInt(document.getElementById("num").value);
    var contador = 0;
    var resultado = "";
    
    for (var i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0) {
            resultado += i + " ";
            contador++;
        }
    }
    
    document.getElementById("resultado").innerHTML = "Los números múltiplos de 3 y 5 son: " + resultado;
    document.getElementById("contador").innerHTML = "El número de múltiplos es: " + contador;
}