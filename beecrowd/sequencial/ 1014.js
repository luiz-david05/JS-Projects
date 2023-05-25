import { input } from "../beecrowd_input.js"

const lines = input('1014.txt')

let i = 0
function main() {
    const distancia = Number(lines[i++])
    const qtd_combustivel = Number(lines[i++])

    console.log((distancia / qtd_combustivel).toFixed(3), "km/l")
}

main()