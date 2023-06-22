import { input, getNumber } from "../../entrada_utils.js";

import { q24, q25, q26, q27 } from "./q24_q46.js";

function main() {
    console.log();
    menu();
    let opcao = opcaoMenu();
    console.log();

    while (opcao !== 0) {
        if (opcao === 24) {
            q24();

            continuar();
            menu();
            opcao = opcaoMenu();
        } else if (opcao === 25) {
            q25();

            continuar();
            menu();
            opcao = opcaoMenu();
        } else if (opcao === 26) {
            q26();

            continuar();
            menu();
            opcao = opcaoMenu();
        } else if (opcao === 27) {
            q27();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
    }
}

function menu() {
    console.log();
    console.log(
        "\x1b[36m%s\x1b[0m",
        "\tLista 01 Estrutura Sequencial - Professor Fábio Gomes"
    );
    console.log("\n0 - Sair");
    console.log("\n24 - Converte de metros para centímetros");
    console.log("25 - Converte de metros para kilometros");
    console.log("26 - Converte de dias para semanas/dias");
    console.log("27 - Converte de segundos para horas/minutos e segundos");
    // console.log("5 - Somar elementos de um número");
    // console.log("6 - Converte de km/h para metros/s");
    // console.log(
    //     "7 - A soma dos 2 primeiros números e a diferença dos 2 últimos números"
    // );
    // console.log("8 - A divisão da soma pela subtração de 2 números");
    // console.log("9 - Escreve números na ordem inversa");
    // console.log("10 - Escreve quotiente e resto da divisão de 2 números");
    // console.log("11 - Inverte a ordem dos elementos de um número");
    // console.log("12 - Calcula um aumento salarial de 25%");
    // console.log("13 - Calcula 70% de um número");
    // console.log("14 - Calcula a média ponderada de 3 notas");

    // let pergunta = input("\nDeseja ver mais opções do menu? (s/n) ");

    // while (pergunta !== "s" && pergunta !== "n") {
    //     console.log("\nOpção inválida!");
    //     pergunta = input("\nDeseja ver mais opções do menu? (s/n) ");
    // }

    // if (pergunta === "s") {
    //     console.log("15 - Calcula a área de um triângulo");
    //     console.log("16 - Calcula a área de um quadrado");
    //     console.log("17 - Calcula a área de um retângulo");
    //     console.log("18 - Calcula o comprimento de uma circunferência");
    //     console.log("19 - Calcula o volume de uma esfera");
    //     console.log("20 - Converte de graus Celsius para Fahrenheit");
    //     console.log("21 - Converte de graus Fahrenheit para Celsius");
    //     console.log("22 - Converte uma distância em km para metros");
    //     console.log("23 - Converte um peso em kg para gramas");
    // }
}

function opcaoMenu() {
    let opcao = getNumber("\nDigite a opção desejada: ");

    while (opcao < 24 || opcao > 46) {
        if (opcao === 0) {
            tchau();
            process.exit(0);
        }
        console.log("\nOpção inválida!");
        opcao = getNumber("\nDigite a opção desejada: ");
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
        "O tempo é o bem mais valioso, pois é irreparável quando\n perdido e insubstituível quando desperdiçado.",
        "A vida é longa se você souber como usá-la.",
        "Não é o homem que tem muito que é rico, mas \nsim aquele que se contenta com pouco.",
        "A verdadeira felicidade está em desfrutar do \npresente, sem depender ansiosamente do futuro.",
        "Não é porque as coisas são difíceis que não ousamos;\n é porque não ousamos que elas são difíceis.",
        "A felicidade é alcançada quando o que você pensa,\n o que você diz e o que você faz estão em harmonia.",
        "Nada nos pertence, exceto o tempo que nos é dado\n e como o usamos.",
        "O sábio é autossuficiente e possui tudo em si mesmo.",
        "A felicidade é alcançada ao viver de acordo\n com a natureza e aceitar os acontecimentos como inevitáveis.",
        "Não é a carga que o derruba, mas sim como você a carrega.",
        "A verdadeira grandeza consiste em ser dono de si mesmo",
        "Aprenda a viver e verás que não há nada a temer na morte",
        "Aquele que não sabe para onde está navegando nunca encontrará um vento favorável",
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

main();
