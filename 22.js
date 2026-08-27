let playlist = [
    "Meddle About",
    "Okay",
    "The Walls",
    "Rigth Here",
    "Church",
    "Into it",
    "Monlight",
    "Swim"
];

let musicaProcurada = "Right Here";

// 1. Verificar se uma música está na playlist usando includes()
console.log(`"${musicaProcurada}" está na playlist?`, playlist.includes(musicaProcurada));

// 2. Descobrir a posição usando indexOf()
let posicao = playlist.indexOf(musicaProcurada);
console.log(`Posição de "${musicaProcurada}":`, posicao);

// 3. Criar uma seleção de músicas usando slice() (3 primeiras)
let selecao = playlist.slice(0, 3);
console.log("Seleção (Slice):", selecao);

// 4. Remover uma música usando splice() ("Church")
let posRemover = playlist.indexOf("Church");
if (posRemover !== -1) {
    playlist.splice(posRemover, 1);
}

// 5. Ordenar a playlist com sort()
playlist.sort();

// 6. Inverter a playlist com reverse()
playlist.reverse();

// 7. Exibir a playlist final usando join()
console.log("--- PLAYLIST FINAL ---");
console.log(playlist.join("\n"));