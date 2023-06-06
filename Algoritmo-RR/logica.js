export class Processo {
    constructor(nome, tempo_execucao) {
      this.nome = nome;
      this.tempo_execucao = tempo_execucao;
    }
  }
  
   export function round_robin(processos, quantum, tempo_troca_contexto) {
    let fila = [...processos];  // Fila de processos usando spread operator
    let tempo_total = 0;  // Tempo total de execução
    let indice_atual = 0;  // Índice do processo atual na fila
  
    while (fila.length > 0) {
      let processo_atual = fila[indice_atual];
      if (processo_atual.tempo_execucao <= quantum) {
        // O processo é concluído
        tempo_total += processo_atual.tempo_execucao;
        console.log(`\nProcesso ${processo_atual.nome} concluído. Tempo total: ${tempo_total} unidades de tempo.`);
        fila.splice(indice_atual, 1);
        tempo_total += tempo_troca_contexto;
      } else {
        // O processo precisa ser executado novamente
        tempo_total += quantum;
        console.log(`\nExecutando ${processo_atual.nome} por ${quantum} unidades de tempo.`);
        processo_atual.tempo_execucao -= quantum;
        tempo_total += tempo_troca_contexto;
  
        // Move o processo para o final da fila
        fila.push(fila.splice(indice_atual, 1)[0]);
      }
  
      // Atualiza o índice do próximo processo a ser executado
      indice_atual = (indice_atual + 1) % fila.length;
    }
  }