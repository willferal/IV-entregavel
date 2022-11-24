function funcaoPrimo(numPrimo){
    var i = 1;
    var contPrimo = 0;

    for(i = 1; i <= numPrimo; i++){
        if(numPrimo % i == 0) {
            contPrimo = contPrimo + 1;
        }
    }

    if (contPrimo == 2) {
        return("O numero digitado e primo.");
    }else{
        return("O numero digitado não é primo.");
    }
}
    

module.exports = funcaoPrimo;