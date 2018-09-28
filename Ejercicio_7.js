function promedioIncerteza(array) {
    promedio=0;
    suma=0;
    incerteza=0;

    for (let index = 0; index < array.length; index++) {
        suma= suma+array[index];
    }

    promedio=(suma/array.length);
    
    suma=0;
    for (let index = 0; index < array.length; index++) {
        suma= suma+Math.pow((array[index]-promedio),2);    
    }
    incerteza=Math.sqrt((suma/(array.length-1)));
    
    console.log("x="+promedio+"±"+incerteza);
}
