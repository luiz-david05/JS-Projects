import { getNumber } from "../entrada_utils.js";

export const criarMatriz = (linhas, colunas) => {
    let matriz = [];

    for (let i = 0; i < linhas; i++) {
        let linha = [];

        for (let j = 0; j < colunas; j++) {
            linha.push(0);
        }
        matriz.push(linha);
    }
    return matriz;
};

export const preencherMatrizAutomaticamnte = (matriz) => {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            matriz[i][j] = Math.floor(Math.random() * 100);
        }
    }
    return matriz;
};

export const preencherMatrizManualmente = (matriz) => {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            matriz[i][j] = getNumber(`Digite o valor da posição ${i} ${j}: `);
        }
    }
    return matriz;
};

export const preencherMatrizTransposta = (matriz) => {
    let matrizTransposta = criarMatriz(matriz[0].length, matriz.length);

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            matrizTransposta[j][i] = matriz[i][j];
        }
    }
    return matrizTransposta;
};

export const somarElementosNaMatriz = (matriz) => {
    let somaDiagonalPrincipal = 0;
    let somaDiagonalSecundaria = 0;
    let somaOutros = 0;

    for (let i = 0; i < matriz.length; i++) {
        somaDiagonalPrincipal += matriz[i][i];
        somaDiagonalSecundaria += matriz[i][matriz.length - i - 1];
    }

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (i != j && i != matriz.length - j - 1) {
                somaOutros += matriz[i][j];
            }
        }
    }

    return [somaDiagonalPrincipal, somaDiagonalSecundaria, somaOutros];
};

export const calcularDeterminante = (matriz, n) => {
    let determinante = 0;

    if (n == 2) {
        determinante =
            matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0];
    } else {
        for (let i = 0; i < n; i++) {
            let produto = 1;
            for (let j = 0; j < n; j++) {
                produto *= matriz[j][(i + j) % n];
            }
            determinante += produto;
        }
        for (let i = 0; i < n; i++) {
            let produto = 1;
            for (let j = 0; j < n; j++) {
                produto *= matriz[j][(i - j + n) % n];
            }
            determinante -= produto;
        }
    }

    return determinante;
};

export const maiorEMenorElemento = (matriz) => {
    let maior = matriz[0][0];
    let menor = matriz[0][0];

    let posicaoMaior = [0, 0];
    let posicaoMenor = [0, 0];

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j] > maior) {
                maior = matriz[i][j];
                posicaoMaior = [i, j];
            }

            if (matriz[i][j] < menor) {
                menor = matriz[i][j];
                posicaoMenor = [i, j];
            }
        }
    }

    return [maior, menor, posicaoMaior, posicaoMenor];
};

export const verificarSeMatrizEhSimetrica = (matriz) => {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j] != matriz[j][i]) {
                return false;
            }
        }
    }

    return true;
};

export const mostrarMatriz = (matriz) => {
    console.log("\nMatriz:");
    console.table(matriz);
};

export const gerarMatrizIdentidade = (matriz) => {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            if (i == j) {
                matriz[i][j] = 1;
            } else {
                matriz[i][j] = 0;
            }
        }
    }
    return matriz;
};

export const maiorEMenorSoma = (matriz) => {
    let maior = 0;
    let menor = 0;
    let linhaMaior = 0;
    let linhaMenor = 0;

    for (let i = 0; i < matriz.length; i++) {
        let soma = 0;
        for (let j = 0; j < matriz[0].length; j++) {
            soma += matriz[i][j];
        }

        if (i == 0) {
            maior = soma;
            menor = soma;
        } else {
            if (soma > maior) {
                maior = soma;
                linhaMaior = i;
            } else if (soma < menor) {
                menor = soma;
                linhaMenor = i;
            }
        }
    }

    return [linhaMaior, linhaMenor];
};

export const somaPositivosENegativos = (matriz) => {
    let somaPositivos = 0;
    let somaNegativos = 0;

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j] > 0) {
                somaPositivos += matriz[i][j];
            } else {
                somaNegativos += matriz[i][j];
            }
        }
    }

    return [somaPositivos, somaNegativos];
};