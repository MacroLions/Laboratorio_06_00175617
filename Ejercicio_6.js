function claveMurcielago(cadena) {
    cadena.split("");
    cadenaMurcielago=[];
    for (let index = 0; index < cadena.length; index++) {
        switch (cadena[index]) {
            case "0":
                cadenaMurcielago.push("m")
                break;
            case "1":
                cadenaMurcielago.push("u")
                break;
            case "2":
                cadenaMurcielago.push("r")
                break;
            case "3":
                cadenaMurcielago.push("c")
                break;
            case "4":
                cadenaMurcielago.push("i")
                break;
            case "5":
                cadenaMurcielago.push("e")
                break;
            case "6":
                cadenaMurcielago.push("l")
                break;
            case "7":
                cadenaMurcielago.push("a")
                break;
            case "8":
                cadenaMurcielago.push("g")
                break;
            case "9":
                cadenaMurcielago.push("o")
                break;
            
            default:
                break;

        }
        
    }
    return cadenaMurcielago.join(",");
}