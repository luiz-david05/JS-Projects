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
    eh_positivo, eh_negativo, eh_nulo, eh_par, eh_impar,
    reduzir_vetor,
    somatorio,
    media_vetor, mediana_vetor,
    sortear_elemento,
    gerar_n_grupos,
    verificar_se_vetor_esta_contido_em_outro,
    verificar_se_elementos_estao_na_mesma_ordem,
    top_n_maiores_elementos,
    top_n_menores_elementos,
    valor_medio_no_vetor,
    eh_maior_que_a_media, eh_menor_que_a_media,
    produto, dividir_pela_metade,
    eh_multiplo,
    ordenar_vetor,
    ordenar_vetor_decrescente,
    eliminar_multiplos_de_n_m} from './menu_utils.js'


function main() {
    console.log("\nAntes de começar, você precisa criar um vetor.")
    console.log("Após criar o vetor, você pode realizar diversas operações com ele.")

    let vetor = criar_vetor_vazio()

    console.log("\nVetor criado com sucesso!")
    console.log("\nAgora você pode realizar diversas operações com ele.")

    continuar()

    menu()
    let opcao = opcao_valida()

    while (opcao !== 0) {
        if (opcao === 1) {
            vetor = preencher_vetor_com_valor_padrao(vetor)

            console.log("\nVetor preenchido com sucesso!")
            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 2) {
            vetor = preencher_vetor_manualmente(vetor)

            console.log("\nVetor preenchido com sucesso!")
            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 3) {
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
        else if (opcao === 15) {
            const valor_medio = valor_medio_no_vetor(vetor)
            const media = media_vetor(vetor)
            const maiores_que_a_media = filtrar_vetor(vetor, eh_maior_que_a_media(media))
            const menores_que_a_media = filtrar_vetor(vetor, eh_menor_que_a_media(media))

            console.log(`\nValor médio: ${valor_medio}`)
            console.log(`\nValor da média: ${media}`)
            console.log(`\nValores maiores que a média: [${maiores_que_a_media}]`)
            console.log(`Valores menores que a média: [${menores_que_a_media}]`)
            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 16) {
            let positivos = filtrar_vetor(vetor, eh_positivo)
            positivos = filtrar_vetor(positivos, eh_par)
            console.log(`\npositivos múltiplos de 2: [${positivos}]`)
            const media = media_vetor(positivos)
            console.log(`\nmedia dos positivos múltiplos de 2 = ${media}`)

            let negativos = filtrar_vetor(vetor, eh_negativo)
            negativos = filtrar_vetor(negativos, eh_par)
            console.log(`\nnegativos múltiplos de 2: [${negativos}]`)
            negativos = mapear_vetor(negativos, dividir_pela_metade)
            console.log(`\nnegativos múltiplos de 2 divididos pela metade: [${negativos}]`)
            const produto_negativos = reduzir_vetor(negativos, produto)
            console.log(`\nproduto acumulado dos negativos múltiplos de 2 divididos pela metade: ${produto_negativos}`)

            const somatorio_da_media = media + produto_negativos
            console.log(`\nsomatório: ${somatorio_da_media}`)

            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 17) {
            let vetor_ordenado

            menu_ordenar()
            const opcao_ordenar = opcao_valida_ordenar("Digite a opção: ")
        
            if (opcao_ordenar === 1) {
                vetor_ordenado = ordenar_vetor(vetor)
            }
            else if (opcao_ordenar === 2) {
                const vetor_pares = filtrar_vetor(vetor, eh_par)
                vetor_ordenado = ordenar_vetor(vetor_pares)
            }
            else if (opcao_ordenar === 3) {
                const vetor_impares = filtrar_vetor(vetor, eh_impar)
                vetor_ordenado = ordenar_vetor(vetor_impares)
            }
            else if (opcao_ordenar === 4) {
                const vetor_positivos = filtrar_vetor(vetor, eh_positivo)
                vetor_ordenado = ordenar_vetor(vetor_positivos)
            }
            else if (opcao_ordenar === 5) {
                const vetor_negativos = filtrar_vetor(vetor, eh_negativo)
                vetor_ordenado = ordenar_vetor(vetor_negativos)
            }
            else if (opcao_ordenar === 6) {
                const n = get_positive_number("\nDigite o valor de N: ")
                const vetor_multiplos = filtrar_vetor(vetor, eh_multiplo(n))
                vetor_ordenado = ordenar_vetor(vetor_multiplos)
            }
        
            console.log("\nVetor ordenado com sucesso!")

            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opcao === 18) {
            let vetor_ordenado

            menu_ordenar()
            const opcao_ordenar = opcao_valida_ordenar("Digite a opção: ")

            if (opcao_ordenar === 1) {
                vetor_ordenado = ordenar_vetor_decrescente(vetor)
            }
            else if (opcao_ordenar === 2) {
                const vetor_pares = filtrar_vetor(vetor, eh_par)
                vetor_ordenado = ordenar_vetor_decrescente(vetor_pares)
            }
            else if (opcao_ordenar === 3) {
                const vetor_impares = filtrar_vetor(vetor, eh_impar)
                vetor_ordenado = ordenar_vetor_decrescente(vetor_impares)
            }
            else if (opcao_ordenar === 4) {
                const vetor_positivos = filtrar_vetor(vetor, eh_positivo)
                vetor_ordenado = ordenar_vetor_decrescente(vetor_positivos)
            }
            else if (opcao_ordenar === 5) {
                const vetor_negativos = filtrar_vetor(vetor, eh_negativo)
                vetor_ordenado = ordenar_vetor_decrescente(vetor_negativos)
            }
            else if (opcao_ordenar === 6) {
                const n = get_positive_number("Digite o valor de N: ")
                const vetor_multiplos = filtrar_vetor(vetor, eh_multiplo(n))
                vetor_ordenado = ordenar_vetor_decrescente(vetor_multiplos)
            }

            console.log("\nVetor ordenado com sucesso!")

            continuar()
            menu()
            opcao = opcao_valida()
        }
        else if (opc === 19) {
            const n = get_number("Digite o valor de N: ")
            const m = get_number("Digite o valor de M: ")

            vetor = eliminar_multiplos_de_n_m(vetor, n, m)
            console.log("\nVetor atualizado com sucesso!")

            continuar()
            menu()
            opcao = opcao_valida()
        }
    }
    tchau()
}


function menu() {
    console.log("\n1 - Preencher com valor padrão")
    console.log("2 - Preencher manualmente item a item")
    console.log("3 - Preencher automaticamente")
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
    console.log("15 - Listar valor médio, e listar números maiores que a média e menores que a média")
    console.log("16 - Somatório da média dos números positivos múltiplos de 2 com o produto acumulado dos números negativos pares reduzidos pela metade")
    console.log("17 - Ordenar vetor em ordem crescente")
    console.log("18 - Ordenar vetor em ordem decrescente")
    console.log("19 - Eliminar elementos múltiplos de N e M (simultaneamente) do vetor")
    console.log("0 - sair")
}


function opcao_valida() {
    let opcao = get_number("\nDigite uma opção: ")

    if (opcao < 0 || opcao > 18) {
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
        "Hasta la vista, baby", 
        "See you later, space cowboy",
        "I'll be back", 
        "Acabou!", 
        "Até logo, crocodilo",
        "Au revoir!",
        "Auf Wiedersehen!",
        "Arrivederci!",
        "Adiós!",
        "I am the bone of my sword",
        "Steel is my body and fire is my blood",
        "Unknown to Death, Nor known to Life",
        "The only time you lose is when you give in",
        "I have no regrets. This is the only path",
    ]

    const tchau = tchaus[Math.floor(Math.random() * tchaus.length)]

    console.log()
    console.log(tchau)
}


const menu_ordenar = () => {
    console.log("Ordenar: todos, ou apenas pares, ou impares, ou positivos ou negativos, \nou ainda apenas os múltiplos (positivos ou negativos) de N ?")
    console.log("1 - Todos")
    console.log("2 - Pares")
    console.log("3 - Impares")
    console.log("4 - Positivos")
    console.log("5 - Negativos")
    console.log("6 - Multiplos de N")
}


const opcao_valida_ordenar = (texto) => {
    let opcao = get_positive_number(texto)

    if (opcao < 1 && opcao > 6) {
        console.log("Opção inválida!")
        opcao = opcao_valida_ordenar(texto)
    }

    return opcao
}


main()