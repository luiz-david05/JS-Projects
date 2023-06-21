import { getPositiveNumber, input } from "../../entrada_utils.js";

export const q1 = () => {
    const metros = getPositiveNumber("Digite a velocidade em metros/s: ");

    const km = metros * 3.6;

    console.log(`\n${metros} metros/s equivale a ${km.toFixed(1)} km/h`);
}


export const q2 = () => {
    const [horas, minutos] = input("Digite as horas e minutos (ex: 10:30): ").split(":").map(Number);

    const totalMinutos = horas * 60 + minutos;

    console.log(`\n${horas} hora(s) e ${minutos} minuto(s) equivale a ${totalMinutos} minuto(s)`);
}


export const q3 = () => {
    const minutos = getPositiveNumber("Digite a quantidade de minutos: ");

    const horas = Math.floor(minutos / 60);
    const minutosRestantes = minutos % 60;

    console.log(`\n${minutos} minutos equivale a ${horas} horas e ${minutosRestantes} minutos`);
}


export const q4 = () => {
    const reais = getPositiveNumber("Digite o valor em reais: ");
    const cotacao = getPositiveNumber("Digite a cotação do dólar: ");

    const dolares = reais / cotacao;

    console.log(`\n${reais} reais equivale a ${dolares.toFixed(2)} dólares`);
}


export const q5 = () => {
    const numero = getPositiveNumber("Digite um número: ");

    const soma = [...String(numero)].reduce((acc, cur) => acc + Number(cur), 0);

    console.log(`\nA soma dos elementos de ${numero} é ${soma}`);
}


export const q6 = () => {
    const km = getPositiveNumber("Digite a velocidade em km/h: ");

    const metros = km / 3.6;

    console.log(`\n${km} km/h equivale a ${metros.toFixed(1)} metros/s`);
}


export const q7 = () => {
    const n1 = getPositiveNumber("Digite o primeiro número: ");
    const n2 = getPositiveNumber("Digite o segundo número: ");
    const n3 = getPositiveNumber("Digite o terceiro número: ");

    const soma = n1 + n2;
    const diferenca = n2 - n3;

    console.log(`\nA soma dos 2 primeiros números é ${soma} e a diferença dos 2 últimos números é ${diferenca}`);
}


export const q8 = () => {
    const n1 = getPositiveNumber("Digite o primeiro número: ");
    const n2 = getPositiveNumber("Digite o segundo número: ");
    
    const soma = n1 + n2;
    const diferenca = n1 - n2;
    const divisão = 0 ? diferenca == 0 : soma / diferenca;

    console.log(`\nA divisão da soma ${soma} pela subtração ${diferenca} é ${divisão}`)
}


export const q9 = () => {
    const n1 = getPositiveNumber("Digite o primeiro número: ");
    const n2 = getPositiveNumber("Digite o segundo número: ");

    console.log(`\nNúmeros na ordem inversa: ${n2} ${n1}`);
}


export const q10 = () => {
    const n1 = getPositiveNumber("Digite o primeiro número: ");
    const n2 = getPositiveNumber("Digite o segundo número: ");

    const quociente = 0 ? n2 == 0 : Math.floor(n1 / n2);
    const resto = n1 % n2;

    console.log(`\nQuociente: ${quociente}`);
    console.log(`Resto: ${resto}`);
}


export const q11 = () => {
    const n = getPositiveNumber("Digite um número: ");

    const nInvertido = [...String(n)].reverse().join("");

    console.log(`\nNúmero invertido: ${nInvertido}`);
}


export const q12 = () => {
    const salario = getPositiveNumber("Digite o salário: ");

    const aumento = 0.25 * salario;
    const novoSalario = salario + aumento;

    console.log(`\nAumento: ${aumento}`);
    console.log(`Novo salário: ${novoSalario}`);
}


export const q13 = () => {
    const n = getPositiveNumber("Digite um número: ");

    const setentaPorcento = 0.7 * n;

    console.log(`\n70% de ${n} é ${setentaPorcento.toFixed(1)}`);
}


export const q14 = () => {
    const notas = input("Digite as notas (ex: 10 9 8): ").split(" ").map(Number);

    const pesos = input("Digite os pesos (ex: 1 2 3): ").split(" ").map(Number);

    const mediaPonderada = notas.reduce((acc, cur, i) => acc + cur * pesos[i], 0) / pesos.reduce((acc, cur) => acc + cur, 0);

    console.log(`\nMédia ponderada: ${mediaPonderada.toFixed(1)}`);
}


export const q15 = () => {
    const base = getPositiveNumber("Digite a base do triângulo: ");
    const altura = getPositiveNumber("Digite a altura do triângulo: ");

    const area = base * altura / 2;

    console.log(`\nÁrea do triângulo: ${area.toFixed(1)}`);
}


export const q16 = () => {
    const lado = getPositiveNumber("Digite o lado do quadrado: ");

    const area = lado ** 2;

    console.log(`\nÁrea do quadrado: ${area.toFixed(1)}`);
}


export const q17 = () => {
    const base = getPositiveNumber("Digite a base do retângulo: ");
    const altura = getPositiveNumber("Digite a altura do retângulo: ");

    const area = base * altura;

    console.log(`\nÁrea do retângulo: ${area.toFixed(1)}`);
}


export const q18 = () => {
    const raio = getPositiveNumber("Digite o raio do círculo: ");

    const area = Math.PI * raio ** 2;

    console.log(`\nÁrea do círculo: ${area.toFixed(1)}`);
}


export const q19 = () => {
    const raio = getPositiveNumber("Digite o raio da esfera: ");

    const volume = 4 / 3 * Math.PI * raio ** 3;

    console.log(`\nVolume da esfera: ${volume.toFixed(1)}`);
}


export const q20 = () => {
    const temperaturaCelsius = getPositiveNumber("Digite a temperatura em Celsius: ");

    const temperaturaFahrenheit = temperaturaCelsius * 9 / 5 + 32;

    console.log(`\nTemperatura em Fahrenheit: ${temperaturaFahrenheit.toFixed(1)}`);
}


export const q21 = () => {
    const temperaturaFahrenheit = getPositiveNumber("Digite a temperatura em Fahrenheit: ");

    const temperaturaCelsius = (temperaturaFahrenheit - 32) * 5 / 9;

    console.log(`\nTemperatura em Celsius: ${temperaturaCelsius.toFixed(1)}`);
}


export const q22 = () => {
    const distanciaKm = getPositiveNumber("Digite a distância em km: ");

    const distanciaMetros = distanciaKm * 1000;

    console.log(`\nDistância em metros: ${distanciaMetros.toFixed(1)}`);
}


export const q23 = () => {
    const pesoKg = getPositiveNumber("Digite o peso em kg: ");

    const pesoGramas = pesoKg * 1000;

    console.log(`\nPeso em gramas: ${pesoGramas.toFixed(1)}`);
}