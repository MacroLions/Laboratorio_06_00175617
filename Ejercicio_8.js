function sumaMatrices(A,B) {
    bandera=false;
    c=[];

    if(A.lenght!=B.lenght){
        console.log("La suma no es posible")
    }
    else{
        bandera=true;
    }
    
    console.log(bandera);

    if(bandera){
        for (let i = 0; i < A.length; i++) {
            for (let j = 0; j < A.length; j++) {
                lineaNueva=[];
                elemento=A[i][j]+B[i][j]
                lineaNueva.push(elemento);
            }
            c.push(lineaNueva);
        }
    }
    return c;
}