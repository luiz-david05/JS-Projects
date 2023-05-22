import { input } from ".././beecrowd_input.js"

const lines = input('1009.txt').map(Number)


let i = 0
function main(){
    const nome = lines[i++]
    const salario_fixo = lines[i++]
    const total_vendas = lines[i++]

    const salario = calcular_salario(salario_fixo, total_vendas)
    console.log(`TOTAL = R$ ${salario.toFixed(2)}`)
}


const calcular_salario = (salario_fixo, total_vendas) => (salario_fixo + total_vendas * 0.15)


main()