function sumaArray(array) {
    contador=0;
    for (let index = 0; index < array.length; index++) {
        contador = contador + array[index];
    }
    console.log("La suma es: "+contador)
    contador=(contador/array.length);
    console.log("El promedio es: "+contador)
}