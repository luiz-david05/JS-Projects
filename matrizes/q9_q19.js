import { get_number } from "../entrada_utils.js"

import {
    criar_vetor, 
    preencher_vetor_automaticamente,
    ordenar_vetor,
    termos_fibo
    } from "./vetor_utils.js"

import { 
    criar_matriz, 
    preencher_matriz_automaticamnte, 
    preencher_matriz_transposta,
    somar_elementos_na_matriz,
    calcular_determinante,
    maior_e_menor_elemento,
    verificar_se_matriz_e_simetrica,
    mostrar_matriz,
    gerar_matriz_identidade,
    maior_e_menor_soma,
    soma_positivos_e_negativos
    } from "./matrizes_utils.js"


function q9() {
    let vetor = criar_vetor(10)
    vetor = preencher_vetor_automaticamente(vetor)
    console.log(vetor)
    console.log(ordenar_vetor(vetor))
}


function q10() {
    // Escreva os N primeiros termos da seqüência de Fibonacci (0,1,1,2,3,5,8,13,21,...). .

    const n = get_number("Digite o número de termos: ")

    const vetor = termos_fibo(n)

    console.log(vetor)
}


function q11() {
    // Leia uma matriz quadrada de ordem N, calcule e escreva sua matriz transposta..

    const n = get_number("Digite a ordem da matriz: ")

    let matriz = criar_matriz(n, n)

    matriz = preencher_matriz_automaticamnte(matriz)

    mostrar_matriz(matriz)

    let matriz_transposta = criar_matriz(n, n)
    matriz_transposta = preencher_matriz_transposta(matriz)

    console.log(matriz_transposta)
}


function q12() {
    /* Leia uma matriz quadrada de ordem N, calcule e escreva a soma dos elementos da diagonal principal,
    a soma dos elementos da diagonal secundária e a soma dos elementos que não estão na diagonal
    principal nem na diagonal secundária. */

    const n = get_number("Digite a ordem da matriz: ")

    let matriz = criar_matriz(n, n)
    matriz = preencher_matriz_automaticamnte(matriz)

    mostrar_matriz(matriz)

    const [soma_diagonal_principal, soma_diagonal_secundaria, soma_outros] = somar_elementos_na_matriz(matriz)

    console.log(`Soma da diagonal principal: ${soma_diagonal_principal}`)
    console.log(`Soma da diagonal secundária: ${soma_diagonal_secundaria}`)
    console.log(`Soma dos outros elementos: ${soma_outros}`)
}


function q13() {
    // Leia uma matriz quadrada de ordem N, calcule e escreva seu determinante.

    const n = get_number("Digite a ordem da matriz: ")

    let matriz = criar_matriz(n, n)
    matriz = preencher_matriz_automaticamnte(matriz)

    mostrar_matriz(matriz)

    const determinante = calcular_determinante(matriz, n)

    console.log(`Determinante: ${determinante}`)
}


function q14() {
    // leia uma matriz quadrada de ordem N, determine e escreva o maior e menor elemento na matriz e suas respectivas posições (linha, coluna)

    const n = get_number("Digite a ordem da matriz: ")

    let matriz = criar_matriz(n, n)

    matriz = preencher_matriz_automaticamnte(matriz)

    mostrar_matriz(matriz)

    const [maior, menor, posicao_maior, posicao_menor] = maior_e_menor_elemento(matriz)

    console.log(`\nMaior: ${maior} - Posição: ${posicao_maior}`)
    console.log(`Menor: ${menor} - Posição: ${posicao_menor}`)
}


function q15() {
    //leia uma matriz quadrada de ordem N e escreva se ela é ou não simétrica. Uma matriz quadrada é dita  simétrica se A[i,j] = A[j,i].

    // const n = get_number("Digite a ordem da matriz: ")

    // const linha = get_number("Digite o número de linhas: ")
    // const coluna = get_number("Digite o número de colunas: ")

    // let matriz = criar_matriz(linha, coluna)

    // matriz = preencher_matriz_manualmente(matriz)

    const matriz = [[1, -2, 4], [-2, 2, 0], [4, 0, 3]]

    mostrar_matriz(matriz)

    if (verificar_se_matriz_e_simetrica(matriz)) {
        console.log("A matriz é simétrica")
    }
    else {
        console.log("A matriz não é simétrica")
    }
}


function q16() {
    // escreva a matriz identidade de ordem N.
    const n = get_number("Digite a ordem da matriz: ")

    let matriz = criar_matriz(n, n)

    const matriz_identidade = gerar_matriz_identidade(matriz)

    mostrar_matriz(matriz_identidade)
}


function q17() {
    // leia uma matriz quadrada de ordem N e encontre a linha que possue a maior e a 
    // menor soma dos elementos.

    const n = get_number("Digite a ordem da matriz: ")

    let matriz = criar_matriz(n, n)

    matriz = preencher_matriz_automaticamnte(matriz)

    mostrar_matriz(matriz)

    const [linha_maior, linha_menor] = maior_e_menor_soma(matriz)

    console.log(`\nLinha com menor soma: ${linha_menor}`)
    console.log(`Linha com maior soma: ${linha_maior}`)
}


function q18() {
    // leia uma matriz quadrada de ordem N, calcule e escreva a soma dos números positivos e dos negativos.

    const n = get_number("Digite a ordem da matriz: ")

    let matriz = criar_matriz(n, n)

    matriz = preencher_matriz_automaticamnte(matriz)

    mostrar_matriz(matriz)

    const [soma_positivos, soma_negativos] = soma_positivos_e_negativos(matriz)

    console.log(`\nSoma dos positivos: ${soma_positivos}`)
    console.log(`Soma dos negativos: ${soma_negativos}`)
}


// é pegadinha kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk / dps termino
function q19() {
    // escreva a seguinte matriz [[1, 1, 1, 1, 1, 1], [1, 2, 2, 2, 2, 1], [1, 2, 3, 3, 2, 1], [1, 2, 3, 3, 2, 1], [1, 2, 2, 2, 2, 1], [1, 1, 1, 1, 1, 1]] de forma automatica
    const matriz = [[1, 1, 1, 1, 1, 1], [1, 2, 2, 2, 2, 1], [1, 2, 3, 3, 2, 1], [1, 2, 3, 3, 2, 1], [1, 2, 2, 2, 2, 1], [1, 1, 1, 1, 1, 1]]

    mostrar_matriz(matriz)
}


q19()