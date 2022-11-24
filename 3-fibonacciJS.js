function funcaoFibo(n){
    var term1 =0
    var term2 = 1
    var term3

    // document.write(term1+ ", "+ term2);

    for(i = 3; i <= n; i++){
        term3 = term1 + term2
        document.write(", "+ term3)
        term1 = term2
        term2 = term3
    }
}

