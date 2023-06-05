import { 
    get_number,
    get_positive_number, 
    input} from "./entrada_utils.js";
import {
     criar_vetor_vazio,
     mostrar_vetor, 
     preencher_vetor_automaticamente, 
     preencher_vetor_com_valor_padrao, 
     preencher_vetor_manualmente} from './menu_utils.js'


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
            mostrar_vetor(vetor)
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
    console.log("0 - sair")
}


function opcao_valida() {
    let opcao = get_number("\nDigite uma opção: ")

    if (opcao < 0 || opcao > 4) {
        console.log("Opção inválida, tente novamente.")
        opcao = opcao_valida()
    }

    return opcao
}


const continuar = () => {
    const continuar = input("\nAperte ENTER para continuar...")
}


const tchau = () => {
    const tchaus = ["Hasta la vista, baby", "See you later, space cowboy", "I'll be back", "Que a força esteja com você", "Acabou!", ]

    const tchau = tchaus[Math.floor(Math.random() * tchaus.length)]

    console.log()
    console.log(tchau)
}


main()