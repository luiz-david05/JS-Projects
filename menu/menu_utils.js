import {get_number, get_positive_number} from './entrada_utils.js';


export const criar_vetor_vazio = () => {
    const tamanho = get_positive_number("Digite o tamanho do vetor: ")

    const vetor = new Array(tamanho)

    return vetor
}


export const preencher_vetor_com_valor_padrao = (vetor) => {
    const valor_padrao = get_number("Digite o valor padrão: ")
    
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = valor_padrao
    }

    return vetor
}


export const preencher_vetor_manualmente = (vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = get_number(`Digite o valor do índice ${i}: `)
    }

    return  vetor
}


export const preencher_vetor_automaticamente = (vetor) => {
    const min = get_number("Digite o valor mínimo: ")
    const max = get_number("Digite o valor máximo: ")

    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = Math.floor(Math.random() * (max - min + 1) + min)
    }

    return vetor
}


export const mostrar_vetor = (vetor) => {
    console.log("\nVetor:")
    console.table(vetor)
}