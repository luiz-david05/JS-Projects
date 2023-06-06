import { Processo, round_robin } from "./logica.js";

function main() {
    let processos = [
        new Processo("p1", 10),
        new Processo("p2", 5),
        new Processo("p3", 3),
        new Processo("p4", 2),
        new Processo("p5", 8),
    ];
    
    const quantum = 3;
    const tempo_troca_contexto = 1;
    round_robin(processos, quantum, tempo_troca_contexto);
}

main()