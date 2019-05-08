function soma(x1, x2) {
    return x1 + x2;
}

function subtracao(x1, x2) {
    return x1 - x2;
}

function multiplicacao(x1, x2) {
    return x1 * x2;
}

function divisao(x1, x2) {
    if(x2 == 0){
        console.log("não se pode dividir um número por zero");
    }
    else{
        return x1/x2;
    }
}

//export
exports.soma = soma;
exports.subtracao = subtracao;
exports.multiplicacao = multiplicacao;
exports.divisao = divisao;