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


export const maior_e_menor_elemento = (matriz) => {
    let maior = matriz[0][0]
    let menor = matriz[0][0]

    let posicao_maior = [0, 0]
    let posicao_menor = [0, 0]

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++){
            if (matriz[i][j] > maior) {
                maior = matriz[i][j]
                posicao_maior = [i, j]
            }

            if (matriz[i][j] < menor) {
                menor = matriz[i][j]
                posicao_menor = [i, j]
            }
        }
    }

    return [maior, menor, posicao_maior, posicao_menor]
}


export const verificar_se_matriz_e_simetrica = (matriz) => {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++){
            if (matriz[i][j] != matriz[j][i]) {
                return false
            }
        }
    }

    return true
}


export const mostrar_matriz = (matriz) => {
    console.log("\nMatriz:")
    console.table(matriz)
}


export const gerar_matriz_identidade = (matriz) => {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++){
            if (i == j) {
                matriz[i][j] = 1
            }
            else {
                matriz[i][j] = 0
            }
        }
    }
    return matriz
}


export const maior_e_menor_soma = (matriz) => {
    let maior = 0
    let menor = 0
    let linha_maior = 0
    let linha_menor = 0

    for (let i = 0; i < matriz.length; i++) {
        let soma = 0
        for (let j = 0; j < matriz[0].length; j++) {
            soma += matriz[i][j]
        }

        if (i == 0) {
            maior = soma
            menor = soma
        }
        else {
            if (soma > maior) {
                maior = soma
                linha_maior = i
            }
            else if (soma < menor) {
                menor = soma
                linha_menor = i
            }
        }
    }

    return [linha_maior, linha_menor]
}


export const soma_positivos_e_negativos = (matriz) => {
    let soma_positivos = 0
    let soma_negativos = 0

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz.length; j++) {
            if (matriz[i][j] > 0) {
                soma_positivos += matriz[i][j]
            }
            else {
                soma_negativos += matriz[i][j]
            }
        }
    }

    return [soma_positivos, soma_negativos]
}