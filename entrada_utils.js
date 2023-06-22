import { question } from "readline-sync";

export const input = (questionText) => {
    let answer = question(questionText);

    while (answer === "") {
        console.log("Digite alguma coisa, tente novamente.");
        answer = question(questionText);
    }

    return answer;
};

export const getNumber = (questionText) => {
    let number = Number(input(questionText));

    while (isNaN(number)) {
        console.log("Digite um número, tente novamente.");
        number = Number(input(questionText));
    }

    return number;
};

export const getPositiveNumber = (questionText) => {
    let number = getNumber(questionText);

    while (number <= 0) {
        console.log(
            "Digite um número positivo maior que zero, tente novamente."
        );
        number = getNumber(questionText);
    }

    return number;
};
