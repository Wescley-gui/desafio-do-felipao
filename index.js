function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;

    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoVitorias, nivel };
}

for (let i = 0; i < 3; i++) {
    let vitorias = Math.floor(Math.random() * 150);
    let derrotas = Math.floor(Math.random() * 50);

    let resultado = calcularRank(vitorias, derrotas);

    console.log(`O Herói tem um saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}.`);
}
