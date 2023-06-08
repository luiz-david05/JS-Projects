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
    calcular_determinante
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

    console.log(matriz)

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

    console.log(matriz)

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

    console.log(matriz)

    const determinante = calcular_determinante(matriz, n)

    console.log(`Determinante: ${determinante}`)
}


q13()