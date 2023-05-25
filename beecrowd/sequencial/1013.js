import { input } from "../beecrowd_input.js"

const lines = input('1013.txt')


function main() {
    const [a, b, c] = lines[0].split(" ").map(Number)

    const maior_ab = (a + b + Math.abs(a - b)) / 2
    const maior_ab_c = (c + maior_ab + Math.abs(maior_ab - c)) / 2

    console.log(maior_ab_c, "eh o maior")
}


main()