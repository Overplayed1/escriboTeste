// Chama a biblioteca "readline"
var readline = require('readline');

// Realiza a criação da interface desse processo
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função responsável pela averiguação
function somaTudo(value) {
    // Transforma o valor em inteiro
    const parsedValue = parseInt(value);

    let soma = 0;

    // Realiza o looping até o valor registrado anteriormente
    for (let i = 0; i < parsedValue; i++) {

        // Verifica se o valor é divisível por 3 ou por 5
        if ((i % 3 === 0) || (i % 5 === 0)) {

            // Realiza a soma caso seja divisível
            soma = soma + i;
        }
    }

    // Retorna o resultado de soma
    return soma;

}

// O Readline importado é invocado para coletar o número.
rl.question("Informe o número inteiro: ", (val) => {

    //Constante com o resultado
    const res = somaTudo(val)

    // readline com o resultado
    rl.write("O resultado da soma dos números divisíveis por 3 e 5 que estão abaixo de " + val + " é " + res);

    // Fecha o Readline para o programa não ficar executando infinitamente
    rl.close();

});