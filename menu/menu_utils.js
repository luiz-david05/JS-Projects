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


export const mostrar_vetor = (vetor, texto) => {
    console.log("\n", texto)
    console.table(vetor)
}


export const mapear_vetor = (vetor, funcao) => {
    const vetor_mapeado = new Array(vetor.length)

    for (let i = 0; i < vetor.length; i++) {
        vetor_mapeado[i] = funcao(vetor[i])
    }

    return vetor_mapeado
}


export const elevar_elementos_a_n = (n) => {
    return (elemento) => {
        return elemento ** n
    }
}


const adicionar_elemento = (vetor, elemento) => {   
    vetor[vetor.length] = elemento

    return vetor
}


export const filtrar_vetor = (vetor, funcao) => {
    const vetor_filtrado = []

    for (const elemento in vetor) {
        if (funcao(vetor[elemento])) {
            adicionar_elemento(vetor_filtrado, vetor[elemento])
        }
    }
    return vetor_filtrado
}


export const eh_positivo = (n) => n > 0
export const eh_negativo = (n) => n < 0
export const eh_nulo = (n) => n === 0
const eh_par = (n) => n % 2 === 0


export const reduzir_vetor = (vetor, funcao) => {
    let valor_reduzido = 0

    for (let i = 0; i < vetor.length; i++) {
        valor_reduzido = funcao(valor_reduzido, vetor[i])
    }

    return valor_reduzido
}


export const somatorio = (soma, elemento) => soma + elemento


export const media_vetor = (vetor) => {
    const somatorio_vetor = reduzir_vetor(vetor, somatorio)

    return somatorio_vetor / vetor.length
}


export const ordenar_vetor = (vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                const aux = vetor[j]
                vetor[j] = vetor[j + 1]
                vetor[j + 1] = aux
            }
        }
    }

    return vetor
}


export const mediana_vetor = (vetor) => {
    const vetor_ordenado = ordenar_vetor(vetor)
    let mediana

    if (eh_par(vetor_ordenado.length)) {
        const indice_meio = vetor_ordenado.length / 2

        mediana = (vetor_ordenado[indice_meio - 1] + vetor_ordenado[indice_meio]) / 2
    } else {
        const indice_meio = Math.floor(vetor_ordenado.length / 2)

        mediana = vetor_ordenado[indice_meio]
    }

    return mediana
}


export const sortear_elemento = (vetor) => {
    const indice_sorteado = Math.floor(Math.random() * vetor.length)

    return vetor[indice_sorteado]
}


export function gerar_n_grupos(vetor, n, t) {
    const grupos = []

    for (let i = 0; i < n; i++) {
        const grupo = []

        while (grupo.length < t) {
            const elemento = sortear_elemento(vetor)

            if (!inclue(grupo, elemento)) {
                adicionar_elemento(grupo, elemento)
            }
        }

        adicionar_elemento(grupos, grupo)
    }

    return grupos
}


export const inclue = (vetor, elemento) => {
    for (const elemento_vetor of vetor) {
        if (elemento_vetor === elemento) {
            return true
        }
    }
}


export const verificar_se_vetor_esta_contido_em_outro = (vetor, outro_vetor) => {
    for (const elemento of vetor) {
        if (!inclue(outro_vetor, elemento)) {
            return false
        }
    }

    return true
}


export const verificar_se_elementos_estao_na_mesma_ordem = (vetor, outro_vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] !== outro_vetor[i]) {
            return false
        }
    }

    return true
}


export const top_n_maiores_elementos = (vetor, n) => {
    const vetor_ordenado = ordenar_vetor(vetor)
    const vetor_top_n = []

    for (let i = 0; i < n; i++) {
        adicionar_elemento(vetor_top_n, vetor_ordenado[vetor_ordenado.length - 1 - i])
    }

    return vetor_top_n
}


export const top_n_menores_elementos = (vetor, n) => {
    const vetor_ordenado = ordenar_vetor(vetor)
    const vetor_top_n = []

    for (let i = 0; i < n; i++) {
        adicionar_elemento(vetor_top_n, vetor_ordenado[i])
    }

    return vetor_top_n
}


// const teste = () => {
//     const vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     const n = get_positive_number("Digite um número positivo: ")

//     console.log(`Top ${n} maiores elementos do vetor: [${top_n_maiores_elementos(vetor, n)}]`)
//     console.log(`Top ${n} menores elementos do vetor: [${top_n_menores_elementos(vetor, n)}]`)
// }


// teste()