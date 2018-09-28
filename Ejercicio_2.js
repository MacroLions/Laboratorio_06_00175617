function sumaArray(array) {
    contador=0;
    for (let index = 0; index < array.length; index++) {
        contador = contador + array[index];
    }
    return contador;
}