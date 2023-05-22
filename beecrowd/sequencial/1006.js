import { input } from ".././beecrowd_input.js"

const lines = input('1006.txt').map(Number)


let i = 0
function main(){
    const a = lines[i++]
    const b = lines[i++]
    const c = lines[i++]

    const media = calcular_media(a, b, c)
    console.log(`MEDIA = ${media.toFixed(1)}`)
}

const calcular_media = (a, b, c) => (a * 2 + b * 3 + c * 5) / 10


main()