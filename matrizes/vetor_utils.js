export const criar_vetor = (tamanho) => {
    let vetor = []

    for (let i = 0; i < tamanho; i++) {
        vetor.push(0)
    }
    return vetor
}


export const preencher_vetor_automaticamente = (vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = Math.floor(Math.random() * 100)
    }
    return vetor
}


export const ordenar_vetor = (vetor) => vetor.sort((a, b) => a - b)


export const termos_fibo = (n) => {
    let vetor = criar_vetor(n)

    for (let i = 0; i < vetor.length; i++) {
        if (i < 2) {
            vetor[i] = i
        } else {
            vetor[i] = vetor[i - 1] + vetor[i - 2]
        }
    }
    return vetor
}


// const teste = () => {
//     let vetor = criar_vetor(10)
//     vetor = preencher_vetor_automaticamente(vetor)
//     console.log(vetor)
//     console.log(ordenar_vetor(vetor))
// }


// teste()