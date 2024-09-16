
// Definir as constantes
const distanciaTotal = 125; // Distância entre Ribeirão Preto e Barretos em km
const velocidadeCarro = 90; // Velocidade do carro em km/h
const velocidadeCaminhao = 80; // Velocidade do caminhão em km/h
const tempoPedagios = 15 / 60; // Tempo adicional do carro devido aos pedágios em horas

// Calcular o tempo de encontro
const tempoEncontro = distanciaTotal / (velocidadeCarro + velocidadeCaminhao);

// Calcular a distância percorrida por cada veículo
const distanciaCarro = velocidadeCarro * (tempoEncontro + tempoPedagios);
const distanciaCaminhao = velocidadeCaminhao * tempoEncontro;

// Calcular a posição dos veículos quando se cruzam
const distanciaCarroDeRibeiraoPreto = distanciaCarro;
const distanciaCaminhaoDeRibeiraoPreto = distanciaTotal - distanciaCarro;

console.log(`Distância do carro até Ribeirão Preto: ${distanciaCarro.toFixed(2)} km`);
console.log(`Distância do caminhão até Ribeirão Preto: ${distanciaCaminhaoDeRibeiraoPreto.toFixed(2)} km`);

// Determinar qual veículo está mais próximo de Ribeirão Preto
if (distanciaCarroDeRibeiraoPreto < distanciaCaminhaoDeRibeiraoPreto) {
  console.log("Quando eles se cruzarem, o carro estará mais próximo de Ribeirão Preto.");
} else {
  console.log("Quando eles se cruzarem, o caminhão estará mais próximo de Ribeirão Preto.");
}

