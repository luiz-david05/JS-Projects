import {
    getNumber,
    input 
    } from "../../entrada_utils.js";

import {
    q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12,
    q13, q14, q15, q16, q17, q18, q19, q20, q21, q22,
    q23
    } from "./questoes.js";


function main() {
    console.log();   
    menu();
    let opcao = opcaoMenu();
    console.log();

    while (opcao !== 0) {
        if (opcao === 1) {
            q1();
            
            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 2) {
            q2();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 3) {
            q3();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 4) {
            q4();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 5) {
            q5();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 6) {
            q6();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 7) {
            q7();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 8) {
            q8();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 9) {
            q9();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 10) {
            q10();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 11) {
            q11();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 12) {
            q12();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 13) {
            q13();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 14) {
            q14();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 15) {
            q15();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 16) {
            q16();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 17) {
            q17();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 18) {
            q18();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 19) {
            q19();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 20) {
            q20();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 21) {
            q21();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 22) {
            q22();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
        else if (opcao === 23) {
            q23();

            continuar();
            menu();
            opcao = opcaoMenu();
        }
    }
    tchau();
}


function menu() {
    console.log();
    console.log('\x1b[36m%s\x1b[0m',"\tLista 01 Estrutura Sequencial - Professor Fábio Gomes")
    console.log("\n0 - Sair");
    console.log("\n1 - Converte de metros/s para km/h");
    console.log("2 - Converte de horas/minutos para minutos");
    console.log("3 - Converte de minutos para horas/minutos");
    console.log("4 - Converte de reais para dólares");
    console.log("5 - Somar elementos de um número");
    console.log("6 - Converte de km/h para metros/s");
    console.log("7 - A soma dos 2 primeiros números e a diferença dos 2 últimos números");
    console.log("8 - A divisão da soma pela subtração de 2 números");
    console.log("9 - Escreve números na ordem inversa");
    console.log("10 - Escreve quotiente e resto da divisão de 2 números");
    console.log("11 - Inverte a ordem dos elementos de um número");
    console.log("12 - Calcula um aumento salarial de 25%");
    console.log("13 - Calcula 70% de um número")
    console.log("14 - Calcula a média ponderada de 3 notas");

    let pergunta = input("\nDeseja ver mais opções do menu? (s/n) ");

    while (pergunta !== "s" && pergunta !== "n") {
        console.log("\nOpção inválida!");
        pergunta = input("\nDeseja ver mais opções do menu? (s/n) ");
    }

    if (pergunta === "s") {
        console.log("15 - Calcula a área de um triângulo");
        console.log("16 - Calcula a área de um quadrado");
        console.log("17 - Calcula a área de um retângulo");
        console.log("18 - Calcula o comprimento de uma circunferência");
        console.log("19 - Calcula o volume de uma esfera");
        console.log("20 - Converte de graus Celsius para Fahrenheit");
        console.log("21 - Converte de graus Fahrenheit para Celsius");
        console.log("22 - Converte uma distância em km para metros");
        console.log("23 - Converte um peso em kg para gramas");
    }
}


function opcaoMenu() {
    let opcao = getNumber("\nDigite a opção desejada: ");

    while (opcao < 0 || opcao > 23) {
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
    }
    else{
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
}


const tchau = () => {
    const tchaus = [
        "Tchau!", 
        "Até mais!", 
        "Até logo!", 
        "Até amanhã!", 
        "Até breve!"
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
        "A felicidade não depende das circunstâncias externas, \nmas da forma como escolhemos reagir a elas."
    ];

    const cores = [
        "\x1b[31m%s\x1b[0m",
        "\x1b[32m%s\x1b[0m",
        "\x1b[33m%s\x1b[0m",
        "\x1b[37m%s\x1b[0m"
    ]

    const tchauAleatorio = tchaus[Math.floor(Math.random() * tchaus.length)];
    const mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

    console.log(`\n${corAleatoria}`, `${tchauAleatorio} \n"${mensagemAleatoria}"`);
}

main();