function fibonacci(seqFibonacci) {
    let n1, n2, sucessor;
    n1 = 0;
    n2 = 1;
    if (seqFibonacci <= 0){
        return []
    } else if (seqFibonacci == 1) {
        return [0]
    } else if (seqFibonacci == 2) {
        return [0, 1]
    }
    numeros = [0, 1]
    for (i = 2; i < seqFibonacci; i ++) {
        sucessor = n1 + n2;
        n1 = n2;
        n2 = sucessor;
        numeros.push(sucessor);
    }
    return numeros
    }
module.exports = fibonacci;
