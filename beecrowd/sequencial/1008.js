import { input } from ".././beecrowd_input.js"

const lines = input('1008.txt').map(Number)


let i = 0
function main(){
    const numero = lines[i++]
    const horas = lines[i++]
    const valor = lines[i++]

    const salario = calcular_salario(horas, valor)
    console.log(`NUMBER = ${numero}`)
    console.log(`SALARY = U$ ${salario.toFixed(2)}`)
}


const calcular_salario = (horas, valor) => (horas * valor)


main()