import { getNumber, getPositiveNumber, input } from "../entrada_utils.js";

import {
    criarVetorVazio,
    elevarElementos,
    mapearVetor,
    mostrarVetor,
    preencherVetorAutomaticamente,
    preencherVetorComValorPadrao,
    preencherVetorManualmente,
    filtrarVetor,
    ehPositivo,
    ehNegativo,
    ehNulo,
    ehPar,
    ehImpar,
    reduzirVetor,
    somatorio,
    mediaVetor,
    medianaVetor,
    sortearElemento,
    gerarN_Grupos,
    verificarSeVetorEstaContidoEmOutro,
    verificarSeElementosEstaoNaMesmaOrdem,
    top_N_Maiores_Elementos,
    top_N_Menores_Elementos,
    valorMedioNoVetor,
    eh_MaiorQue_A_Media,
    eh_Menor_Que_A_Media,
    produto,
    dividir_Pela_Metade,
    ehMultiplo,
    ordenarVetor,
    ordenar_Vetor_Decrescente,
    eliminar_Multiplos_De_N_M,
} from "./menu_utils.js";

function main() {
    console.log("\nAntes de começar, você precisa criar um vetor.");
    console.log(
        "Após criar o vetor, você pode realizar diversas operações com ele."
    );

    let vetor = criarVetorVazio();

    console.log("\nVetor criado com sucesso!");

    continuar();
    menu();
    let opcao = opcao_valida();

    while (opcao !== 0) {
        if (opcao === 1) {
            vetor = preencherVetorComValorPadrao(vetor);

            console.log("\nVetor preenchido com sucesso!");
            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 2) {
            vetor = preencherVetorManualmente(vetor);

            console.log("\nVetor preenchido com sucesso!");
            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 3) {
            vetor = preencherVetorAutomaticamente(vetor);

            console.log("\nVetor preenchido com sucesso!");
            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 4) {
            mostrarVetor(vetor, "Vetor: ");
            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 5) {
            const n = getNumber("valor de n: ");
            vetor = mapearVetor(vetor, elevarElementos(n));

            console.log("\nVetor transformado com sucesso!");
            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 6) {
            const positivos = filtrarVetor(vetor, ehPositivo);
            const negativos = filtrarVetor(vetor, ehNegativo);
            const nulos = filtrarVetor(vetor, ehNulo);

            console.log(
                `\nQuantidade de elementos positivos: ${positivos.length}`
            );
            console.log(
                `Quantidade de elementos negativos: ${negativos.length}`
            );
            console.log(`Quantidade de elementos nulos: ${nulos.length}`);
            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 7) {
            const positivos = filtrarVetor(vetor, ehPositivo);
            const negativos = filtrarVetor(vetor, ehNegativo);

            const somatorio_vetor = reduzirVetor(vetor, somatorio);
            const somatorio_positivos = reduzirVetor(positivos, somatorio);
            const somatorio_negativos = reduzirVetor(negativos, somatorio);

            console.log(
                `\nSomatório de todos os elementos do vetor: ${somatorio_vetor}`
            );
            console.log(
                `Somatório de todos os elementos positivos do vetor: ${somatorio_positivos}`
            );
            console.log(
                `Somatório de todos os elementos negativos do vetor: ${somatorio_negativos}`
            );
            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 8) {
            const positivos = filtrarVetor(vetor, ehPositivo);
            const negativos = filtrarVetor(vetor, ehNegativo);

            const media = mediaVetor(vetor);
            const mediana = medianaVetor(vetor);
            const media_positivos = mediaVetor(positivos);
            const mediana_positivos = medianaVetor(positivos);
            const media_negativos = mediaVetor(negativos);
            const mediana_negativos = medianaVetor(negativos);

            console.log(`\nMédia de todos os elementos do vetor: ${media}`);
            console.log(`Mediana de todos os elementos do vetor: ${mediana}`);
            console.log(
                `Média de todos os elementos positivos do vetor: ${media_positivos}`
            );
            console.log(
                `Mediana de todos os elementos positivos do vetor: ${mediana_positivos}`
            );
            console.log(
                `Média de todos os elementos negativos do vetor: ${media_negativos}`
            );
            console.log(
                `Mediana de todos os elementos negativos do vetor: ${mediana_negativos}`
            );
            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 9) {
            const maior = Math.max(...vetor);
            const menor = Math.min(...vetor);

            console.log(`\nMaior elemento do vetor: ${maior}`);
            console.log(`Menor elemento do vetor: ${menor}`);
            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 10) {
            const positivos = filtrarVetor(vetor, ehPositivo);
            const negativos = filtrarVetor(vetor, ehNegativo);

            const elemento_positivo = sortearElemento(positivos);
            const elemento_negativo = sortearElemento(negativos);

            console.log(`\nElemento positivo sorteado: ${elemento_positivo}`);
            console.log(`Elemento negativo sorteado: ${elemento_negativo}`);
            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 11) {
            const n = getNumber("valor de n: ");
            const tamanho = getNumber("tamanho dos grupos: ");
            const grupos = gerarN_Grupos(vetor, n, tamanho);

            console.log("\nGrupos gerados com sucesso!");
            console.log(grupos);
            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 12) {
            let novo_vetor = criarVetorVazio();
            novo_vetor = preencherVetorAutomaticamente(novo_vetor);

            mostrarVetor(vetor, "Vetor original: ");
            mostrarVetor(novo_vetor, "Vetor novo: ");

            if (
                verificarSeVetorEstaContidoEmOutro(vetor, novo_vetor) &&
                verificarSeElementosEstaoNaMesmaOrdem(vetor, novo_vetor)
            ) {
                console.log("\nEstá contido 100% e estão na mesma ordem");
            } else {
                console.log(
                    "\nNão está contido 100% ou não estão na mesma ordem"
                );
            }

            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 13) {
            const n = getPositiveNumber("valor de n: ");

            console.log(
                `Top ${n} maiores elementos do vetor: [${top_N_Maiores_Elementos(
                    vetor,
                    n
                )}]`
            );
            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 14) {
            const n = getPositiveNumber("valor de n: ");

            console.log(
                `Top ${n} menores elementos do vetor: [${top_N_Menores_Elementos(
                    vetor,
                    n
                )}]`
            );
            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 15) {
            const valor_medio = valorMedioNoVetor(vetor);
            const media = mediaVetor(vetor);
            const maiores_que_a_media = filtrarVetor(
                vetor,
                eh_MaiorQue_A_Media(media)
            );
            const menores_que_a_media = filtrarVetor(
                vetor,
                eh_Menor_Que_A_Media(media)
            );

            console.log(`\nValor médio: ${valor_medio}`);
            console.log(`\nValor da média: ${media}`);
            console.log(
                `\nValores maiores que a média: [${maiores_que_a_media}]`
            );
            console.log(
                `Valores menores que a média: [${menores_que_a_media}]`
            );
            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 16) {
            let positivos = filtrarVetor(vetor, ehPositivo);
            positivos = filtrarVetor(positivos, ehPar);
            console.log(`\npositivos múltiplos de 2: [${positivos}]`);
            const media = mediaVetor(positivos);
            console.log(`\nmedia dos positivos múltiplos de 2 = ${media}`);

            let negativos = filtrarVetor(vetor, ehNegativo);
            negativos = filtrarVetor(negativos, ehPar);
            console.log(`\nnegativos múltiplos de 2: [${negativos}]`);
            negativos = mapearVetor(negativos, dividir_Pela_Metade);
            console.log(
                `\nnegativos múltiplos de 2 divididos pela metade: [${negativos}]`
            );
            const produto_negativos = reduzirVetor(negativos, produto);
            console.log(
                `\nproduto acumulado dos negativos múltiplos de 2 divididos pela metade: ${produto_negativos}`
            );

            const somatorio_da_media = media + produto_negativos;
            console.log(`\nsomatório: ${somatorio_da_media}`);

            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 17) {
            let vetor_ordenado;

            menu_ordenar();
            const opcao_ordenar = opcao_valida_ordenar("Digite a opção: ");

            if (opcao_ordenar === 1) {
                vetor_ordenado = ordenarVetor(vetor);
                mostrarVetor(
                    vetor_ordenado,
                    "Vetor ordenado em ordem crescente: "
                );
            } else if (opcao_ordenar === 2) {
                const vetor_pares = filtrarVetor(vetor, ehPar);
                mostrarVetor(vetor_pares, "Vetor de pares: ");
                vetor_ordenado = ordenarVetor(vetor_pares);
                mostrarVetor(
                    vetor_ordenado,
                    "Vetor de pares ordenado em ordem crescente: "
                );
            } else if (opcao_ordenar === 3) {
                const vetor_impares = filtrarVetor(vetor, ehImpar);
                mostrarVetor(vetor_impares, "Vetor de ímpares: ");
                vetor_ordenado = ordenarVetor(vetor_impares);
                mostrarVetor(
                    vetor_ordenado,
                    "Vetor de ímpares ordenado em ordem crescente: "
                );
            } else if (opcao_ordenar === 4) {
                const vetor_positivos = filtrarVetor(vetor, ehPositivo);
                mostrarVetor(vetor_positivos, "Vetor de positivos: ");
                vetor_ordenado = ordenarVetor(vetor_positivos);
                mostrarVetor(
                    vetor_ordenado,
                    "Vetor de positivos ordenado em ordem crescente: "
                );
            } else if (opcao_ordenar === 5) {
                const vetor_negativos = filtrarVetor(vetor, ehNegativo);
                mostrarVetor(vetor_negativos, "Vetor de negativos: ");
                vetor_ordenado = ordenarVetor(vetor_negativos);
                mostrarVetor(
                    vetor_ordenado,
                    "Vetor de negativos ordenado em ordem crescente: "
                );
            } else if (opcao_ordenar === 6) {
                const n = getPositiveNumber("\nDigite o valor de N: ");
                const vetor_multiplos = filtrarVetor(vetor, ehMultiplo(n));
                mostrarVetor(vetor_multiplos, `Vetor de múltiplos de ${n}: `);
                vetor_ordenado = ordenarVetor(vetor_multiplos);
                mostrarVetor(
                    vetor_ordenado,
                    `Vetor de múltiplos de ${n} ordenado em ordem crescente: `
                );
            }

            console.log("\nVetor ordenado com sucesso!");

            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 18) {
            let vetor_ordenado;

            menu_ordenar();
            const opcao_ordenar = opcao_valida_ordenar("Digite a opção: ");

            if (opcao_ordenar === 1) {
                vetor_ordenado = ordenar_Vetor_Decrescente(vetor);
            } else if (opcao_ordenar === 2) {
                const vetor_pares = filtrarVetor(vetor, ehPar);
                mostrarVetor(vetor_pares, "Vetor de pares: ");
                vetor_ordenado = ordenar_Vetor_Decrescente(vetor_pares);
                mostrarVetor(
                    vetor_ordenado,
                    "Vetor de pares ordenado em ordem decrescente: "
                );
            } else if (opcao_ordenar === 3) {
                const vetor_impares = filtrarVetor(vetor, ehImpar);
                mostrarVetor(vetor_impares, "Vetor de ímpares: ");
                vetor_ordenado = ordenar_Vetor_Decrescente(vetor_impares);
                mostrarVetor(
                    vetor_ordenado,
                    "Vetor de ímpares ordenado em ordem decrescente: "
                );
            } else if (opcao_ordenar === 4) {
                const vetor_positivos = filtrarVetor(vetor, ehPositivo);
                mostrarVetor(vetor_positivos, "Vetor de positivos: ");
                vetor_ordenado = ordenar_Vetor_Decrescente(vetor_positivos);
                mostrarVetor(
                    vetor_ordenado,
                    "Vetor de positivos ordenado em ordem decrescente: "
                );
            } else if (opcao_ordenar === 5) {
                const vetor_negativos = filtrarVetor(vetor, ehNegativo);
                mostrarVetor(vetor_negativos, "Vetor de negativos: ");
                vetor_ordenado = ordenar_Vetor_Decrescente(vetor_negativos);
                mostrarVetor(
                    vetor_ordenado,
                    "Vetor de negativos ordenado em ordem decrescente: "
                );
            } else if (opcao_ordenar === 6) {
                const n = getPositiveNumber("Digite o valor de N: ");
                const vetor_multiplos = filtrarVetor(vetor, ehMultiplo(n));
                mostrarVetor(vetor_multiplos, `Vetor de múltiplos de ${n}: `);
                vetor_ordenado = ordenar_Vetor_Decrescente(vetor_multiplos);
                mostrarVetor(
                    vetor_ordenado,
                    `Vetor de múltiplos de ${n} ordenado em ordem decrescente: `
                );
            }

            console.log("\nVetor ordenado com sucesso!");

            continuar();
            menu();
            opcao = opcao_valida();
        } else if (opcao === 19) {
            const n = getNumber("Digite o valor de N: ");
            const m = getNumber("Digite o valor de M: ");

            vetor = eliminar_Multiplos_De_N_M(vetor, n, m);
            console.log("\nVetor atualizado com sucesso!");

            continuar();
            menu();
            opcao = opcao_valida();
        }
    }
    tchau();
}

function menu() {
    console.log();
    console.log("\x1b[36m%s\x1b[0m", "\tMenu de vetores");
    console.log("\n0 - sair");
    console.log("\n1 - Preencher com valor padrão");
    console.log("2 - Preencher manualmente item a item");
    console.log("3 - Preencher automaticamente");
    console.log("4 - Mostrar vetor");
    console.log("5 - Transformar vetor: elevar elementos a potência n");
    console.log("6 - Contar elementos positivos, negativos e nulos");
    console.log(
        "7 - Somar todos os elementos do vetor, apenas os positivos e \napenas os negativos (separadamente)"
    );
    console.log(
        "8 - Exibir média e mediana de: todos os elementos do vetor, apenas os positivos e \napenas os negativos (separadamente)"
    );
    console.log("9 - Exibir maior e menor elemento do vetor");
    console.log(
        "10 - Sortear dois valores do vetor: um positivo e outro negativo"
    );

    let pergunta = input("\nDeseja ver mais opções do menu? (s/n) ");

    while (pergunta !== "s" && pergunta !== "n") {
        console.log("\nOpção inválida!");
        pergunta = input("\nDeseja ver mais opções do menu? (s/n) ");
    }

    if (pergunta === "s") {
        console.log(
            "\n11 - Gerar N grupos de T tamanho (sem valores repetidos)\n a partir do vetor"
        );
        console.log(
            "12 - Gerar novo vetor e verificar se o novo está 100% presente no original (e na mesma ordem)"
        );
        console.log("13 - Top N maiores elementos no vetor");
        console.log("14 - Top N menores elementos no vetor");
        console.log(
            "15 - Listar valor médio, e listar números maiores que a média\n e menores que a média"
        );
        console.log(
            "16 - Somatório da média dos números positivos múltiplos de 2 com o \nproduto acumulado dos números negativos pares reduzidos pela metade"
        );
        console.log("17 - Ordenar vetor em ordem crescente");
        console.log("18 - Ordenar vetor em ordem decrescente");
        console.log(
            "19 - Eliminar elementos múltiplos de N e M (simultaneamente) do vetor"
        );
    }
}

function opcao_valida() {
    let opcao = getNumber("\nDigite uma opção: ");

    while (opcao < 0 || opcao > 19) {
        console.log("\nOpção inválida!");
        opcao = getNumber("\nDigite uma opção: ");
    }

    return opcao;
}

const continuar = () => {
    let pergunta = input("\nDeseja continuar? (s/n) ");

    while (pergunta !== "s" && pergunta !== "n") {
        console.log("\nOpção inválida!");
        pergunta = input("\nDeseja continuar? (s/n) ");
    }

    if (pergunta === "n") {
        tchau();
        process.exit(0);
    } else {
        let pergunta2 = input("\nDeseja limpar a tela? (s/n) ");

        while (pergunta2 !== "s" && pergunta2 !== "n") {
            pergunta2 = input("\nDeseja limpar a tela? (s/n) ");
            if (pergunta2 !== "s" && pergunta2 !== "n") {
                console.log("\nOpção inválida!");
            }
        }

        if (pergunta2 == "s") {
            console.clear();
        }
    }

    return pergunta;
};

const tchau = () => {
    const tchaus = [
        "Tchau!",
        "Até mais!",
        "Até logo!",
        "Até amanhã!",
        "Até breve!",
    ];

    const mensagens = [
        "Viver é o único dever que devemos aprender a cumprir.",
        "Não existe um caminho mais curto para a \nprópria felicidade do que fazer a felicidade dos outros.",
        "O único tempo que temos é o presente. O \npassado se foi, o futuro ainda não chegou. Portanto, concentre-se no agora.",
        "A verdadeira sabedoria está em reconhecer \na própria ignorância.",
        "A adversidade é um bom professor. Ela nos \nfaz questionar nossas crenças e descobrir nossa força interior.",
        "A felicidade não reside em possuir muito, \nmas em desejar pouco.",
        "Não busque a aprovação dos outros. Seja \nverdadeiro consigo mesmo e viva de acordo com seus princípios.",
        "A maior riqueza é ter paz de espírito e \ncontentamento com o que se tem.",
        "Aprenda a desapegar-se das coisas materiais, \npois a verdadeira riqueza está na sabedoria e virtude.",
        "A felicidade não depende das circunstâncias externas, \nmas da forma como escolhemos reagir a elas.",
    ];

    const cores = [
        "\x1b[31m%s\x1b[0m",
        "\x1b[32m%s\x1b[0m",
        "\x1b[33m%s\x1b[0m",
        "\x1b[37m%s\x1b[0m",
    ];

    const tchauAleatorio = tchaus[Math.floor(Math.random() * tchaus.length)];
    const mensagemAleatoria =
        mensagens[Math.floor(Math.random() * mensagens.length)];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

    console.log(
        `\n${corAleatoria}`,
        `${tchauAleatorio} \n"${mensagemAleatoria}"`
    );
};

const menu_ordenar = () => {
    console.log(
        "\nOrdenar: todos, ou apenas pares, ou impares, ou positivos ou negativos, \nou ainda apenas os múltiplos (positivos ou negativos) de N ?"
    );
    console.log("\n1 - Todos");
    console.log("2 - Pares");
    console.log("3 - Impares");
    console.log("4 - Positivos");
    console.log("5 - Negativos");
    console.log("6 - Multiplos de N");
};

const opcao_valida_ordenar = (texto) => {
    let opcao = getPositiveNumber(texto);

    while (opcao < 1 || opcao > 6) {
        console.log("Opção inválida, tente novamente.");
        opcao = getPositiveNumber(texto);
    }

    return opcao;
};

main();
