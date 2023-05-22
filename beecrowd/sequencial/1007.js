import { input } from ".././beecrowd_input.js"

const lines = input('1007.txt').map(Number)


let i = 0
function main(){
    const a = lines[i++]
    const b = lines[i++]
    const c = lines[i++]
    const d = lines[i++]

    const diferenca = calcular_diferenca(a, b, c, d)
    console.log(`DIFERENCA = ${diferenca}`)
}

const calcular_diferenca = (a, b, c, d) => (a * b - c * d)


main()