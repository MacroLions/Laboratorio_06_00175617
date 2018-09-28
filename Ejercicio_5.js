function arreglarArreglo(array,tipo) {
    arrayNuevo=[];
    for (let index = 0; index < array.length; index++) {
        if(typeof(tipo)==typeof(array[index])){
            arrayNuevo.push(array[index])
        }
        
    }
    return arrayNuevo;
}