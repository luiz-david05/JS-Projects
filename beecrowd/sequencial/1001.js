import { input } from ".././beecrowd_input.js"

const lines = input('1001.txt').map(Number)

let i = 0
function main(){
    const a = lines[i++]
    const b = lines[i++]

    console.log(sum(a, b))
}

const sum = (a, b) =>{
    return `X = ${a + b}`
}

main()
    