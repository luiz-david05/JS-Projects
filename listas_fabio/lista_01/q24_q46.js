import { getPositiveNumber } from "../../entrada_utils.js";

export const q24 = () => {
    const metros = getPositiveNumber("Digite a altura em metros: ");

    const centimetros = metros * 100;

    console.log(`\n${metros} metro(s) equivale a ${centimetros} centímetro(s)`);
};

export const q25 = () => {
    const metros = getPositiveNumber("Digite a altura em metros: ");

    const km = metros / 1000;

    console.log(`\n${metros} metro(s) equivale a ${km} quilômetro(s)`);
};

export const q26 = () => {
    const dias = getPositiveNumber("Digite a quantidade de dias: ");

    const semanas = Math.floor(dias / 7);
    const resto = dias % 7;

    console.log(
        `\n${dias} dia(s) equivale a ${semanas} semana(s) e ${resto} dias`
    );
};

export const q27 = () => {
    const segundos = getPositiveNumber("Digite os segundos: ")

    const horas = Math.floor(segundos / 3600)
    const minutos = Math.floor((segundos % 3600) / 60)
    const segundos_restantes = (segundos % 3600) % 60

    console.log(`\n${segundos} segundo(s) equivale a ${horas} hora(s), ${minutos} minuto(s) e ${segundos_restantes} segundo(s)`)
}