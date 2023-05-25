import { input } from "../beecrowd_input.js"

const lines = input('1012.txt')


function main() {
    const [a, b, c] = lines[0].split(' ').map(Number)

    const [triangulo, circulo, trapezio, quadrado, retangulo] = calcular_areas(a, b, c)

    console.log(`TRIANGULO: ${triangulo.toFixed(3)}`)
    console.log(`CIRCULO: ${circulo.toFixed(3)}`)
    console.log(`TRAPEZIO: ${trapezio.toFixed(3)}`)
    console.log(`QUADRADO: ${quadrado.toFixed(3)}`)
    console.log(`RETANGULO: ${retangulo.toFixed(3)}`)

}


const calcular_areas = (a, b, c) => {
    const triangulo = (a * c) / 2
    const circulo = 3.14159 * Math.pow(c, 2)
    const trapezio = ((a + b) * c) / 2
    const quadrado = Math.pow(b, 2)
    const retangulo = a * b

    return [triangulo, circulo, trapezio, quadrado, retangulo]
}


main()