import { input } from ".././beecrowd_input.js"

const lines = input('1002.txt').map(Number)

let i = 0
function main(){
    const raio = lines[i++]

    console.log(area(raio))
}

const area = (raio) =>{
    return `A=${(3.14159 * Math.pow(raio, 2)).toFixed(4)}`
}

main()