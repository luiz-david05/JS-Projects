import fs from 'fs'

export const input = arquivo =>{
    const lines = fs.readFileSync(arquivo, 'utf8').split('\n')

    return lines
}