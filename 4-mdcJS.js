function funcaoMdc(num1, num2){

    var restoDiv

    do{

        restoDiv = num1 % num2
        num1 = num2
        num2 = restoDiv

    }while (restoDiv != 0);

    return(num1)

}

module.exports = funcaoMdc;