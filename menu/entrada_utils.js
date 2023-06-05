import { question } from "readline-sync";


export const input = (questionText) => {
  return question(questionText)
}


export const get_number = (questionText) => {
    let number = Number(input(questionText))

    if (isNaN(number)) {
        console.log("Valor inválido, tente novamente.")
        number = get_number(questionText)
    }

    return number
}


export const get_positive_number = (questionText) => {
    let number = get_number(questionText)
    
    if (number < 0) {
        console.log("Valor inválido, tente novamente.")
        number = get_positive_number(questionText)
    }

    return number
}