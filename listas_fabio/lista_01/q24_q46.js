import { getPositiveNumber, input } from "../../entrada_utils.js";


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


export const q28 = () => {
    const hora = getPositiveNumber("Digite a hora: ")

    let resto = hora
    const semanas = Math.floor(resto / 168)
    resto = resto % 168
    const dias = Math.floor(resto / 24)
    resto = resto % 24

    console.log(`\n${hora} hora(s) equivale a ${semanas} semana(s), ${dias} dia(s) e ${resto} hora(s)`)
}


export const q29 = () => {
    const meses = getPositiveNumber("Digite a quantidade de meses: ")

    const anos = Math.floor(meses / 12)
    const resto = meses % 12

    console.log(`\n${meses} mês(es) equivale a ${anos} ano(s) e ${resto} mês(es)`)
}


export const q30 = () => {
    const minutos = getPositiveNumber("Digite a quantidade de minutos: ")

    let resto = minutos
    const dias = Math.floor(resto / 1440)
    resto = resto % 1440
    const horas = Math.floor(resto / 60)
    resto = resto % 60

    console.log(`\n${minutos} minuto(s) equivale a ${dias} dia(s), ${horas} hora(s) e ${resto} minuto(s)`)
}


export const q31 = () => {
    const numeroBinario = getPositiveNumber("Digite um número binário: ")

    const numeroDecimal = parseInt(numeroBinario, 2)

    console.log(`\n${numeroBinario} equivale a ${numeroDecimal} em decimal`)
}


export const q32 = () => {
    const numero = getPositiveNumber("Digite um número: ")

    const inverso = [...String(numero)].reverse().join("")
    const diff = numero - inverso

    console.log(`\n${numero} - ${inverso} = ${diff}`)
}


export const q33 = () => {
    const numero = getPositiveNumber("Digite um número: ")

    const inverso = [...String(numero)].reverse().join("")
    const soma = numero + Number(inverso)

    console.log(`\n${numero} + ${inverso} = ${soma}`)
}


export const q34 = () => {
    const numeros = input("Digite três números (ex: 1 2 3): ").split(" ").map(Number)

    const media = (numeros[0] + numeros[1] + numeros[2]) / 3

    console.log(`\nMédia = ${media}`)
}


export const q35 = () => {
    const numero = getPositiveNumber("Digite um número: ")

    const elementos = [...String(numero)]
    const soma = elementos.reduce((acc, cur) => acc + Number(cur), 0)

    console.log(`\nA soma dos elementos de ${numero} é ${soma}`)
}


export const q36 = () => {
    const anos = getPositiveNumber("Digite a quantidade de anos: ")
    const meses = getPositiveNumber("Digite a quantidade de meses: ")
    const dias = getPositiveNumber("Digite a quantidade de dias: ")

    const idade = anos * 365.25 + meses * 30 + dias


    console.log(`\nIdade em dias(+-): ${idade}`)
}


export const q37 = () => {
    const dias = getPositiveNumber("Digite a quantidade de dias: ")

    let resto = dias
    const anos = Math.floor(resto / 365.25)
    resto = resto % 365.25
    const meses = Math.floor(resto / 30)
    resto = resto % 30

    console.log(`\n${dias} dia(s) equivale a ${anos} ano(s), ${meses} mês(es) e ${resto} dia(s)`)
}


export const q38 = () => {
    const [numerador1, denominador1] = input("Digite a primeira fração (ex: 1/2): ").split("/").map(Number)
    const [numerador2, denominador2] = input("Digite a segunda fração (ex: 1/2): ").split("/").map(Number)

    const denominador = denominador1 * denominador2
    const numerador = numerador1 * denominador2 + numerador2 * denominador1

    console.log(`\n${numerador1}/${denominador1} + ${numerador2}/${denominador2} = ${numerador}/${denominador}`)
}


export const q39 = () => {
    const [a, b, c] = input("Digite os coeficientes da equação (ex: 1 2 3): ").split(" ").map(Number)

    const r = (a + b) ** 2
    const s = (b + c) ** 2
    const d = (r + s) / 2

    console.log(`\nD = ${d}`)
}


export const q40 = () => {
    const qtdAnos = getPositiveNumber("Quantidade de anos: ")
    const qtdCigarros = getPositiveNumber("Quantidade de cigarros por dia: ")
    const valorCarteira = getPositiveNumber("Valor da carteira: ")

    const totalCigarros = qtdAnos * 365 * qtdCigarros
    const totalGasto = totalCigarros * valorCarteira

    console.log(`\nTotal de cigarros: ${totalCigarros}`)
    console.log(`\nValor gasto: R$ ${totalGasto.toFixed(2)}`)
}


export const q41 = () => {
    const custoFabricacao = getPositiveNumber("Custo de fabricação do carro: ")
    const taxaDistribuidor = custoFabricacao * 0.28
    const impostos = custoFabricacao * 0.45
    const custoFinal = taxaDistribuidor + impostos + custoFabricacao

    console.log(`\nCusto final: R$ ${custoFinal.toFixed(2)}`)
}


export const q42 = () => {
    const p1 = input("Ponto x1 e y1: ").split(" ").map(Number)
    const p2 = input("Ponto x2 e y2: ").split(" ").map(Number)

    const distancia = Math.sqrt((p2[0] - p1[0]) ** 2 + (p2[1] - p1[1]) ** 2)

    console.log(`\nDistância entre os pontos: ≈ ${distancia.toFixed(2)}`)
}


export const q43 = () => {
    const [a, b, c, d, e, f] = input("Digite os coeficientes da equação (ex: 1 2 3 4 5 6): ").split(" ").map(Number)

    const x = (c * e - b * f) / (a * e - b * d)
    const y = (a * f - c * d) / (a * e - b * d)

    console.log(`\nX = ${x}`)
    console.log(`\nY = ${y}`)
}