function funcaoSomatorio(array){
    var somatorio = 0;
    var i = 0;

    while (i < array.length) {
        somatorio += array[i];
        i ++;
    }

    return somatorio
}

module.exports = funcaoSomatorio;