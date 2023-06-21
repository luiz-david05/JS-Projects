import { get_positive_number, input } from "../../entrada_utils.js";

export const q1 = () => {
    const metros = get_positive_number("Digite a velocidade em metros/s: ");
    const km = metros * 3.6;

    console.log(`\n${metros} metros/s equivale a ${km.toFixed(1)} km/h`);
}


export const q2 = () => {
    const [horas, minutos] = input("Digite as horas e minutos (ex: 10:30): ").split(":").map(Number);
    const totalMinutos = horas * 60 + minutos;

    console.log(`\n${horas} hora(s) e ${minutos} minuto(s) equivale a ${totalMinutos} minuto(s)`);
}


export const q3 = () => {
    const minutos = get_positive_number("Digite a quantidade de minutos: ");
    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;

    console.log(`\n${minutos} minutos equivale a ${horas} horas e ${minutosRestantes} minutos`);
}


export const q4 = () => {
    const reais = get_positive_number("Digite o valor em reais: ");
    const cotacao = get_positive_number("Digite a cotação do dólar: ");
    const dolares = reais / cotacao;

    console.log(`\n${reais} reais equivale a ${dolares.toFixed(2)} dólares`);
}


export const q5 = () => {
    const numero = get_positive_number("Digite um número: ");
    const soma = [...String(numero)].reduce((acc, cur) => acc + Number(cur), 0);

    console.log(`\nA soma dos elementos de ${numero} é ${soma}`);
}


export const q6 = () => {
    const km = get_positive_number("Digite a velocidade em km/h: ");
    const metros = km / 3.6;

    console.log(`\n${km} km/h equivale a ${metros.toFixed(1)} metros/s`);
}


export const q7 = () => {
    const n1 = get_positive_number("Digite o primeiro número: ");
    const n2 = get_positive_number("Digite o segundo número: ");
    const n3 = get_positive_number("Digite o terceiro número: ");

    const soma = n1 + n2;
    const diferenca = n2 - n3;

    console.log(`\nA soma dos 2 primeiros números é ${soma} e a diferença dos 2 últimos números é ${diferenca}`);
}


export const q8 = () => {
    const n1 = get_positive_number("Digite o primeiro número: ");
    const n2 = get_positive_number("Digite o segundo número: ");
    
    const soma = n1 + n2;
    const diferenca = n1 - n2;
    const divisão = 0 ? diferenca == 0 : soma / diferenca;

    console.log(`\nA divisão da soma ${soma} pela subtração ${diferenca} é ${divisão}`)
}


export const q9 = () => {
    const n1 = get_positive_number("Digite o primeiro número: ");
    const n2 = get_positive_number("Digite o segundo número: ");

    console.log(`\nNúmeros na ordem inversa: ${n2} ${n1}`);
}