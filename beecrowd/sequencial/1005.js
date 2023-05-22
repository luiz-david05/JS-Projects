import { input } from ".././beecrowd_input.js"

const lines = input('1005.txt').map(Number)


let i = 0
function main(){
    const a = lines[i++]
    const b = lines[i++]

    const media = calcular_media(a, b)
    console.log(`MEDIA = ${media.toFixed(5)}`)

}
const calcular_media = (a, b) => (a * 3.5 + b * 7.5) / 11


main()