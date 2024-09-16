const faturamentoDiario = [
  1000, 2000, 3000, 0, 1500, 0, 0,
  4000, 3500, 5000, 0, 0, 2000, 0, 
  0, 2500, 3000, 4500, 0, 0, 0,    
  500, 600, 0, 7000, 1000, 0, 0,  
  200, 1500, 2500, 0, 0, 0, 0      
];


// Função para calcular os valores solicitados
function calcularFaturamento(faturamento) {
    // Filtra os dias com faturamento maior que 0
    const diasComFaturamento = faturamento.filter(valor => valor > 0);

    // Calcula o menor e maior valor de faturamento
    const menorFaturamento = Math.min(...diasComFaturamento);
    const maiorFaturamento = Math.max(...diasComFaturamento);

    // Calcula a média de faturamento (excluindo dias com 0)
    const somaFaturamento = diasComFaturamento.reduce((acc, valor) => acc + valor, 0);
    const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

    // Conta o número de dias com faturamento acima da média
    const diasAcimaDaMedia = diasComFaturamento.filter(valor => valor > mediaFaturamento).length;

    return {
        menorFaturamento,
        maiorFaturamento,
        diasAcimaDaMedia
    };
}

// Exemplo de uso:
const resultado = calcularFaturamento(faturamentoDiario);
console.log("Menor faturamento:", resultado.menorFaturamento);
console.log("Maior faturamento:", resultado.maiorFaturamento);
console.log("Dias com faturamento acima da média:", resultado.diasAcimaDaMedia);
