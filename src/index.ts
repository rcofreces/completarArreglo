let arregloAzar: number[] = new Array(10);
let índice: number;

for (índice = 0; índice < 10; índice++) {
  arregloAzar[índice] = azar(100);
}
for (índice = 0; índice < 10; índice++) {
  console.log(`El número en la posición ${índice} es: ${arregloAzar[índice]}`);
}

function azar(tope: number): number {
  return Math.floor(Math.random() * tope);
}
