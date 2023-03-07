//funcion comprar()
function comprar(){
    //toma de valores
    var dat = document.getElementById("option").value;
     
    //nivel 1, 20 cupos
    if (dat == "1"){
        var boleto = parseFloat(prompt("¿cuantos boletos desea comprar?"));
        var cupo = 20 - boleto;

        //bucle
        while(cupo > 0){
            alert(`los boletos comprados son: ${boleto} y quedan aun ${cupo} cupos`);
            boleto = parseFloat(prompt("¿cuantos mas boletos desea comprar?"));
            var boletos= cupo-=boleto;
        }
        if (boleto == 20){
            alert("Se acabaron los cupos mira en los otros niveles")
            /* ocultar seleccion de datos */
            const input = document.querySelector("[name=niveles1]");
            input.style.display = "none";
        }
        else if (boletos >= cupo){
            alert("Se acabaron los cupos mira en los otros niveles");
            const input = document.querySelector("[name=niveles1]");
            input.style.display = "none";   
        }
    }
    
    //nivel 2, 40 cupos
    else if (dat == "2"){
        var boleto2 = parseFloat(prompt("¿cuantos boletos desea comprar?"));
        var cupo2 = 40 - boleto2;

        //bucle
        while(cupo2 > 0){
            alert(`los boletos comprados son: ${boleto2} y quedan aun ${cupo2} cupos`);
            boleto2 = parseFloat(prompt("¿cuantos mas boletos desea comprar?"));
            var boletos2 = cupo2-=boleto2;
        }
        if (boleto2 == 40){
            alert("Se acabaron los cupos mira en los otros niveles")
            /* ocultar seleccion de datos */
            const input2 = document.querySelector("[name=niveles2]");
            input2.style.display = "none";
        }
        else if (boletos2 >= cupo2){
            alert("Se acabaron los cupos mira en los otros niveles");
            const input = document.querySelector("[name=niveles2]");
            input.style.display = "none";   
        }
    }

    //nivel 3, 30 cupos
    else if (dat == "3"){
        var boleto3 = parseFloat(prompt("¿cuantos boletos desea comprar?"));
        var cupo3 = 30 - boleto3;

        //bucle
        while(cupo3 > 0){
            alert(`los boletos comprados son: ${boleto3} y quedan aun ${cupo3} cupos`);
            boleto3 = parseFloat(prompt("¿cuantos mas boletos desea comprar?"));
            var boletos3 = cupo3-=boleto3;
        }
        if (boleto3 == 30){
            alert("Se acabaron los cupos mira en los otros niveles")
            /* ocultar seleccion de datos */
            const input3 = document.querySelector("[name=niveles3]");
            input3.style.display = "none";
        }
        else if (boletos3 >= cupo3){
            alert("Se acabaron los cupos mira en los otros niveles");
            const input = document.querySelector("[name=niveles3]");
            input.style.display = "none";   
        }
    }
}