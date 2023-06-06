export class Banqueiro {
    constructor(num_recursos) {
      this.num_recursos = num_recursos;
      this.recursos_disponiveis = new Array(num_recursos).fill(0);
      this.alocacao = {};
      this.maximo = {};
      this.necessario = {};
    }
  
    adicionar_processo(processo_id, recursos_alocados, recursos_maximos) {
      this.alocacao[processo_id] = recursos_alocados.slice();
      this.maximo[processo_id] = recursos_maximos.slice();
      this.necessario[processo_id] = recursos_maximos.map((max, i) => max - recursos_alocados[i]);
      this.recursos_disponiveis = this.recursos_disponiveis.map((disponivel, i) => disponivel - recursos_alocados[i]);
    }
  
    encontrar_processo_seguro() {
      const processos = Object.keys(this.alocacao);
      let recursos_disponiveis = this.recursos_disponiveis.slice();
      const alocacao = { ...this.alocacao };
      const maximo = { ...this.maximo };
      const necessario = { ...this.necessario };
  
      const sequencia_execucao = [];
  
      while (processos.length > 0) {
        let processo_encontrado = false;
        for (const processo_id of processos) {
          const recursos_necessarios = necessario[processo_id];
          if (recursos_necessarios.every((need, i) => need <= recursos_disponiveis[i])) {
            recursos_disponiveis = recursos_disponiveis.map((disponivel, i) => disponivel + alocacao[processo_id][i]);
            sequencia_execucao.push(processo_id);
            processos.splice(processos.indexOf(processo_id), 1);
            processo_encontrado = true;
            break;
          }
        }
  
        if (!processo_encontrado) {
          return null;  // Não foi encontrado um processo seguro
        }
      }
  
      return sequencia_execucao;
    }
  }