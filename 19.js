let numeros = [50, 10, 100, 5, 25, 1];
numeros.sort();

console.log(numeros); 
// Resultado obtido: [1, 5, 10, 25, 50, 100]

//resposta do desafio: no padrão. o método sort() ordena os elementos de um array em ordem crescente, mas ele converte os elementos em strings e compara suas sequências de valores UTF-16. Por isso, quando aplicado a números, ele pode não produzir a ordem numérica esperada. Para ordenar corretamente números, é necessário fornecer uma função de comparação ao método sort().