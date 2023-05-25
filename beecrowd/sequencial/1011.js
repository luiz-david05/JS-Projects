import { input } from "../beecrowd_input.js"

const lines = input('1011.txt')


function main() {
    const raio = Number(lines[0])
    const volume = calcular_volume(raio)
    console.log(`VOLUME = ${volume.toFixed(3)}`)
}

const calcular_volume = (raio) => (4 / 3) * 3.14159 * Math.pow(raio, 3)


main()