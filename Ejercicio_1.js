function encontrarNumero(numero,array) {
    contador=0;
    for (let index = 0; index < array.length; index++) {
        if(array[index]==numero){
            contador=contador+1;
        }        
    }
    console.log("El numero se repite: "+contador+" veces")
}