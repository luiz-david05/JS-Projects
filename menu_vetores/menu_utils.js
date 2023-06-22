import { getNumber, getPositiveNumber } from "../entrada_utils.js";

export const criarVetorVazio = () => {
    const tamanho = getPositiveNumber("Digite o tamanho do vetor: ");

    const vetor = new Array(tamanho);

    return vetor;
};

export const preencherVetorComValorPadrao = (vetor) => {
    const valorPadrao = getNumber("Digite o valor padrão: ");

    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = valorPadrao;
    }

    return vetor;
};

export const preencherVetorManualmente = (vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = getNumber(`Digite o valor do índice ${i}: `);
    }

    return vetor;
};

export const preencherVetorAutomaticamente = (vetor) => {
    const min = getNumber("Digite o valor mínimo: ");
    const max = getNumber("Digite o valor máximo: ");

    for (let i = 0; i < vetor.length; i++) {
        vetor[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }

    return vetor;
};

export const mostrarVetor = (vetor, texto) => {
    console.log(`\n${texto}`);
    console.table(vetor);
};

export const mapearVetor = (vetor, funcao) => {
    const vetorMapeado = new Array(vetor.length);

    for (let i = 0; i < vetor.length; i++) {
        vetorMapeado[i] = funcao(vetor[i]);
    }

    return vetorMapeado;
};

export const elevarElementos = (n) => (elemento) => n ** elemento;

const adicionarElemento = (vetor, elemento) => {
    vetor[vetor.length] = elemento;

    return vetor;
};

export const filtrarVetor = (vetor, funcao) => {
    const vetorFiltrado = [];

    for (const elemento in vetor) {
        if (funcao(vetor[elemento])) {
            adicionarElemento(vetorFiltrado, vetor[elemento]);
        }
    }
    return vetorFiltrado;
};

export const ehPositivo = (n) => n > 0;
export const ehNegativo = (n) => n < 0;
export const ehNulo = (n) => n === 0;
export const ehPar = (n) => n % 2 === 0;
export const ehImpar = (n) => n % 2 !== 0;

export const reduzirVetor = (vetor, funcao) => {
    let valorReduzido = vetor[0];

    for (let i = 1; i < vetor.length; i++) {
        valorReduzido = funcao(valorReduzido, vetor[i]);
    }

    return valorReduzido;
};

export const somatorio = (soma, elemento) => soma + elemento;

export const mediaVetor = (vetor) => {
    const somatorioVetor = reduzirVetor(vetor, somatorio);

    return somatorioVetor / vetor.length;
};

export const ordenarVetor = (vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length - 1; j++) {
            if (vetor[j] > vetor[j + 1]) {
                const aux = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = aux;
            }
        }
    }

    return vetor;
};

export const medianaVetor = (vetor) => {
    const vetor_Ordenado = ordenarVetor(vetor);
    let mediana, indiceMeio;

    if (ehPar(vetor_Ordenado.length)) {
        indiceMeio = vetor_Ordenado.length / 2;

        mediana =
            (vetor_Ordenado[indiceMeio - 1] + vetor_Ordenado[indiceMeio]) / 2;
    } else {
        indiceMeio = Math.floor(vetor_Ordenado.length / 2);

        mediana = vetor_Ordenado[indiceMeio];
    }

    return mediana;
};

export const sortearElemento = (vetor) => {
    const indiceSorteado = Math.floor(Math.random() * vetor.length);

    return vetor[indiceSorteado];
};

export function gerarN_Grupos(vetor, n, t) {
    const grupos = [];

    for (let i = 0; i < n; i++) {
        const grupo = [];

        while (grupo.length < t) {
            const elemento = sortearElemento(vetor);

            if (!inclue(grupo, elemento)) {
                adicionarElemento(grupo, elemento);
            }
        }

        adicionarElemento(grupos, grupo);
    }

    return grupos;
}

export const inclue = (vetor, elemento) => {
    for (const elemento_vetor of vetor) {
        if (elemento_vetor === elemento) {
            return true;
        }
    }

    return false;
};

export const verificarSeVetorEstaContidoEmOutro = (vetor, outro_vetor) => {
    for (const elemento of vetor) {
        if (!inclue(outro_vetor, elemento)) {
            return false;
        }
    }

    return true;
};

export const verificarSeElementosEstaoNaMesmaOrdem = (vetor, outro_vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] !== outro_vetor[i]) {
            return false;
        }
    }

    return true;
};

export const top_N_Maiores_Elementos = (vetor, n) => {
    const vetor_ordenado = ordenarVetor(vetor);
    const vetor_top_n = [];

    for (let i = 0; i < n; i++) {
        adicionarElemento(
            vetor_top_n,
            vetor_ordenado[vetor_ordenado.length - 1 - i]
        );
    }

    return vetor_top_n;
};

export const top_N_Menores_Elementos = (vetor, n) => {
    const vetorOrdenado = ordenarVetor(vetor);
    const vetor_Top_N = [];

    for (let i = 0; i < n; i++) {
        adicionarElemento(vetor_Top_N, vetorOrdenado[i]);
    }

    return vetor_Top_N;
};

export const valorMedioNoVetor = (vetor) => {
    const vetorOrdenado = ordenarVetor(vetor);

    return (vetorOrdenado[0] + vetorOrdenado[vetorOrdenado.length - 1]) / 2;
};

export const eh_MaiorQue_A_Media = (media) => (item) => item > media;
export const eh_Menor_Que_A_Media = (media) => (item) => item < media;

export const produto = (acumulado, elemento) => acumulado * elemento;
export const dividir_Pela_Metade = (item) => item / 2;

export const ehMultiplo = (n) => (item) => item % n === 0;

export const ordenar_Vetor_Decrescente = (vetor) => {
    for (let i = 0; i < vetor.length; i++) {
        for (let j = 0; j < vetor.length - 1; j++) {
            if (vetor[j] < vetor[j + 1]) {
                const aux = vetor[j];
                vetor[j] = vetor[j + 1];
                vetor[j + 1] = aux;
            }
        }
    }

    return vetor;
};

export const eliminar_Multiplos_De_N_M = (vetor, n, m) => {
    const vetorFiltrado = [];

    for (const item of vetor) {
        if (item % n !== 0 && item % m !== 0) {
            adicionarElemento(vetorFiltrado, item);
        }
    }

    return vetorFiltrado;
};
