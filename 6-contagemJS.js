
function funcaoContagem(array){  
    var testeInteiro
    var finalVariable = [];
    array = [23.15, 45, 16.15, 37, 3, 99.48, 22]
    array.forEach(element => {
        testeInteiro = element - Math.trunc(element);
        if (testeInteiro == 0) {
            finalVariable += element
        }
    });
    return finalVariable
}

funcaoContagem([23.15, 45, 16.15, 37, 3, 99.48, 22]);


module.exports = funcaoContagem;