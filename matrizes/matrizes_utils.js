import { get_number } from "../entrada_utils.js"


export const criar_matriz = (linhas, colunas) => {
    let matriz = []

    for (let i = 0; i < linhas; i++) {
        let linha = []

        for (let j = 0; j < colunas; j++) {
        linha.push(0)
        }
        matriz.push(linha)
    }
    return matriz;
}


export const preencher_matriz_automaticamnte = (matriz) => {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++){
            matriz[i][j] = Math.floor(Math.random() * 100)
        }
    }
    return matriz
}


export const preencher_matriz_manualmente = (matriz) => {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++){
            matriz[i][j] = get_number(`Digite o valor da posição ${i} ${j}: `)
        }
    }
    return matriz
}


export const preencher_matriz_transposta = (matriz) => {
    let matriz_transposta = criar_matriz(matriz[0].length, matriz.length)

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++){
            matriz_transposta[j][i] = matriz[i][j]
        }
    }
    return matriz_transposta
}


export const somar_elementos_na_matriz = (matriz) => {
    let soma_diagonal_principal = 0
    let soma_diagonal_secundaria = 0
    let soma_outros = 0

    for (let i = 0; i < matriz.length; i++) {
        soma_diagonal_principal += matriz[i][i]
        soma_diagonal_secundaria += matriz[i][matriz.length - i - 1]
    }

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {

            if (i != j && i != matriz.length - j - 1) {
                soma_outros += matriz[i][j]
            }
        }
    }

    return [soma_diagonal_principal, soma_diagonal_secundaria, soma_outros]
}


export const calcular_determinante = (matriz, n) => {
    let determinante = 0

    if (n == 2) {
        determinante = matriz[0][0] * matriz[1][1] - matriz[0][1] * matriz[1][0]
    }
    else {
        for (let i = 0; i < n; i++) {
            let produto = 1
            for (let j = 0; j < n; j++) {
                produto *= matriz[j][(i + j) % n]
            }
            determinante += produto
        }
        for (let i = 0; i < n; i++) {
            let produto = 1
            for (let j = 0; j < n; j++) {
                produto *= matriz[j][(i - j + n) % n]
            }
            determinante -= produto
        }
    }

    return determinante
}