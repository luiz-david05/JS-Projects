export const criarVetor = (tamanho) => {
    let vetor = []

    for (let i = 0; i < tamanho; i++) {
        vetor.push(0)
    }
    return vetor
}


export const preencherVetorAutomaticamente = (vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = Math.floor(Math.random() * 100)
    }
    return vetor
}


export const ordenarVetor = (vetor) => vetor.sort((a, b) => a - b)


export const termosFibo = (n) => {
    let vetor = criarVetor(n)

    for (let i = 0; i < vetor.length; i++) {
        if (i < 2) {
            vetor[i] = i
        } else {
            vetor[i] = vetor[i - 1] + vetor[i - 2]
        }
    }
    return vetor
}