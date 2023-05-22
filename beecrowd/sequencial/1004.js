import { input } from ".././beecrowd_input.js"

const lines = input('1004.txt').map(Number)


let i = 0
function main(){
    const a = lines[i++]
    const b = lines[i++]

    console.log(prod(a, b))
}


const prod = (a, b) =>{
    return `PROD = ${a * b}`
}


main()