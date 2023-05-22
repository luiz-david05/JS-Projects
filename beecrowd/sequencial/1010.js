import { input } from ".././beecrowd_input.js"

const lines = input('1010.txt')


let i = 0
function main(){
    const [codigo1, quantidade1, preco1] = lines[i++].split(' ').map(Number)
    const [codigo2, quantidade2, preco2] = lines[i++].split(' ').map(Number)

    const total = calcular_total(quantidade1, preco1, quantidade2, preco2)
    console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)
}


const calcular_total = (quantidade1, preco1, quantidade2, preco2) =>
 (quantidade1 * preco1 + quantidade2 * preco2)


main()