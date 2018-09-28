function numeroAleatorio() {
    arreglo=[];
    for (let index = 0; index < 20; index++) {
        arreglo.push(Math.round(Math.random()*10));
    }
    a=prompt("Adivina el número: ")
    for (let index = 0; index < arreglo.length; index++) {
        if(a==arreglo[index]){
            console.log("Acertaste!")
        }
    }
}