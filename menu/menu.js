import { 
    get_number,
    get_positive_number, 
    input} from "./entrada_utils.js";
import {
    criar_vetor_vazio,
    elevar_elementos_a_n,
    mapear_vetor,
    mostrar_vetor, 
    preencher_vetor_automaticamente, 
    preencher_vetor_com_valor_padrao, 
    preencher_vetor_manualmente,
    filtrar_vetor,
    eh_positivo, eh_negativo, eh_nulo,
    reduzir_vetor,
    somatorio,
    media_vetor, mediana_vetor,
    sortear_elemento,
    gerar_n_grupos,
    verificar_se_vetor_esta_contido_em_outro,
    verificar_se_elementos_estao_na_mesma_ordem,
    top_n_maiores_elementos,
    top_n_menores_elementos} from './menu_utils.js'


function main() {
    menu()
    let opcao = opcao_valida()

    let vetor
    while (opcao !== 0) {
        if (opcao === 1) {
            vetor = criar_vetor_vazio()
            vetor = preencher_vetor_com_valor_padrao(vetor)

            console.log("\nVetor criado com sucesso!")
            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 2) {
            vetor = criar_vetor_vazio()
            vetor = preencher_vetor_manualmente(vetor)

            console.log("\nVetor preenchido com sucesso!")
            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 3) {
            vetor = criar_vetor_vazio()
            vetor = preencher_vetor_automaticamente(vetor)

            console.log("\nVetor preenchido com sucesso!")
            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 4) {
            mostrar_vetor(vetor, "Vetor: ")
            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 5) {
            const n = get_number("valor de n: ")
            vetor = mapear_vetor(vetor, elevar_elementos_a_n(n))

            console.log("\nVetor transformado com sucesso!")
            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 6) {
            const positivos = filtrar_vetor(vetor, eh_positivo)
            const negativos = filtrar_vetor(vetor, eh_negativo)
            const nulos = filtrar_vetor(vetor, eh_nulo)
            
            console.log(`\nQuantidade de elementos positivos: ${positivos.length}`)
            console.log(`Quantidade de elementos negativos: ${negativos.length}`)
            console.log(`Quantidade de elementos nulos: ${nulos.length}`)
            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 7) {
            const positivos = filtrar_vetor(vetor, eh_positivo)
            const negativos = filtrar_vetor(vetor, eh_negativo)
            
            const somatorio_vetor = reduzir_vetor(vetor, somatorio)
            const somatorio_positivos = reduzir_vetor(positivos, somatorio)
            const somatorio_negativos = reduzir_vetor(negativos, somatorio)

            console.log(`\nSomatório de todos os elementos do vetor: ${somatorio_vetor}`)
            console.log(`Somatório de todos os elementos positivos do vetor: ${somatorio_positivos}`)
            console.log(`Somatório de todos os elementos negativos do vetor: ${somatorio_negativos}`)
            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 8) {
            const positivos = filtrar_vetor(vetor, eh_positivo)
            const negativos = filtrar_vetor(vetor, eh_negativo)

            const media = media_vetor(vetor)
            const mediana = mediana_vetor(vetor)
            const media_positivos = media_vetor(positivos)
            const mediana_positivos = mediana_vetor(positivos)
            const media_negativos = media_vetor(negativos)
            const mediana_negativos = mediana_vetor(negativos)

            console.log(`\nMédia de todos os elementos do vetor: ${media}`)
            console.log(`Mediana de todos os elementos do vetor: ${mediana}`)
            console.log(`Média de todos os elementos positivos do vetor: ${media_positivos}`)
            console.log(`Mediana de todos os elementos positivos do vetor: ${mediana_positivos}`)
            console.log(`Média de todos os elementos negativos do vetor: ${media_negativos}`)
            console.log(`Mediana de todos os elementos negativos do vetor: ${mediana_negativos}`)
            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 9) {
            const maior = Math.max(...vetor)
            const menor = Math.min(...vetor)

            console.log(`\nMaior elemento do vetor: ${maior}`)
            console.log(`Menor elemento do vetor: ${menor}`)
            continuar() 
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 10 ) {
            const positivos = filtrar_vetor(vetor, eh_positivo)
            const negativos = filtrar_vetor(vetor, eh_negativo)

            const elemento_positivo = sortear_elemento(positivos)
            const elemento_negativo = sortear_elemento(negativos)

            console.log(`\nElemento positivo sorteado: ${elemento_positivo}`)
            console.log(`Elemento negativo sorteado: ${elemento_negativo}`)
            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 11) {
            const n = get_number("valor de n: ")
            const tamanho = get_number("tamanho dos grupos: ")
            const grupos = gerar_n_grupos(vetor, n, tamanho)

            console.log("\nGrupos gerados com sucesso!")
            console.log(grupos)
            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 12) {
            let novo_vetor = criar_vetor_vazio()
            novo_vetor = preencher_vetor_automaticamente(novo_vetor)

            mostrar_vetor(vetor, "Vetor original: ")
            mostrar_vetor(novo_vetor, "Vetor novo: ")

            if (verificar_se_vetor_esta_contido_em_outro(vetor, novo_vetor) && verificar_se_elementos_estao_na_mesma_ordem(vetor, novo_vetor)) {
                console.log("\nEstá contido 100% e estão na mesma ordem")
            }
            else {
                console.log("\nNão está contido 100% ou não estão na mesma ordem")
            }

            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 13) {
            const n = get_positive_number("valor de n: ")

            console.log(`Top ${n} maiores elementos do vetor: [${top_n_maiores_elementos(vetor, n)}]`)
            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 14) {
            const n = get_positive_number("valor de n: ")

            console.log(`Top ${n} menores elementos do vetor: [${top_n_menores_elementos(vetor, n)}]`)
            continuar()
            menu()
            opcao = opcao_valida()
        }
    }
    tchau()
}


function menu() {
    console.log("\n1 - Criar vetor e preencher com valor padrão")
    console.log("2 - Criar vetor e preencher manualmente item a item")
    console.log("3 - Criar vetor e preencher automaticamente")
    console.log("4 - Mostrar vetor")
    console.log("5 - Transformar vetor: elevar elementos a potência n")
    console.log("6 - Contar elementos positivos, negativos e nulos")
    console.log("7 - Somar todos os elementos do vetor, apenas os positivos e \napenas os negativos (separadamente)")
    console.log("8 - Exibir média e mediana de: todos os elementos do vetor, apenas os positivos e \napenas os negativos (separadamente)")
    console.log("9 - Exibir maior e menor elemento do vetor")
    console.log("10 - Sortear dois valores do vetor: um positivo e outro negativo")
    console.log("11 - Gerar N grupos de T tamanho (sem valores repetidos) a partir do vetor")
    console.log("12 - Gerar novo vetor e verificar se o novo está 100% presente no original (e na mesma ordem)")
    console.log("13 - Top N maiores elementos no vetor")
    console.log("14 - Top N menores elementos no vetor")
    console.log("0 - sair")
}


function opcao_valida() {
    let opcao = get_number("\nDigite uma opção: ")

    if (opcao < 0 || opcao > 14) {
        console.log("Opção inválida, tente novamente.")
        opcao = opcao_valida()
    }

    return opcao
}


const continuar = () => {
    const continuar = input("\nAperte ENTER para continuar...")
}


const tchau = () => {
    const tchaus = [
        "Hasta la vista, baby", "See you later, space cowboy",
        "I'll be back", "Que a força esteja com você", "Acabou!", ]

    const tchau = tchaus[Math.floor(Math.random() * tchaus.length)]

    console.log()
    console.log(tchau)
}


main()