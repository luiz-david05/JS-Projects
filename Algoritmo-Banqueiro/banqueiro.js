import { Banqueiro } from "./logica.js";


function main() {
    const banqueiro = new Banqueiro(3);  // Número de recursos disponíveis
    
    // Adicionar processos
    banqueiro.adicionar_processo(0, [0, 1, 0], [7, 5, 3]);
    banqueiro.adicionar_processo(1, [2, 0, 0], [3, 2, 2]);
    banqueiro.adicionar_processo(2, [3, 0, 2], [9, 0, 2]);
    banqueiro.adicionar_processo(3, [2, 1, 1], [2, 2, 2]);
    banqueiro.adicionar_processo(4, [0, 0, 2], [4, 3, 3]);
    
    const sequencia_execucao = banqueiro.encontrar_processo_seguro();
    
    if (sequencia_execucao !== null) {
      console.log(`Sequência de execução segura: ${sequencia_execucao}`);
    } else {
      console.log("Não foi encontrada uma sequência de execução segura.");
    }
}


main()