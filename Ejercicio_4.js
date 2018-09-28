function sumaPolos(array) {
    for (let index = 0; index < array.length; index++) {
        if(index==(array.length-2)){
            break;
        }
        contador= array[index] + array[(array.length-index-1)];
        console.log(array[index]+"+"+array[(array.length-index-1)]+" "+contador);
    }
}