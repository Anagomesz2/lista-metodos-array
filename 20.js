let produtos = [
    "Arroz",
    "Feijão",
    "Macarrão",
    "Leite",
    "Café",
    "Açúcar"
];

// Verificar se "Café" existe
let existeCafe = produtos.includes("Café");
console.log("Café existe?", existeCafe);

// Descobrir a posição do "Café"
let posicaoCafe = produtos.indexOf("Café");
console.log("Posição do Café:", posicaoCafe);

// Criar uma cópia parcial
let copiaParcial = produtos.slice(1, 4);
console.log("Cópia parcial:", copiaParcial);

// Remover "Leite"
produtos.splice(3, 1);
console.log("Lista sem Leite:", produtos);

// Transformar a lista em texto
let listaTexto = produtos.join(", ");
console.log("Lista em texto:", listaTexto);