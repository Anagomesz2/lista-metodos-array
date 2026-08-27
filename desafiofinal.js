const readline = require("readline/promises");
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let alunos = ["Kimi", "Max", "Charles", "Lewis", "Olive", "Fernando", "Gabriel", "Ayrton", "Carlos", "Franco"];

let opcao;
do {
  console.log(`
1-Existe 2-Posição 3-Fatiar 4-Remover 5-Inserir 6-Ordenar 7-Inverter 8-Texto 0-Sair`);
  opcao = await rl.question("Opção: ");

  if (opcao === "1") console.log(alunos.includes(await rl.question("Nome: ")));
  if (opcao === "2") console.log(alunos.indexOf(await rl.question("Nome: ")));
  if (opcao === "3") console.log(alunos.slice(Number(await rl.question("Início: ")), Number(await rl.question("Fim: "))));
  if (opcao === "4") alunos.splice(alunos.indexOf(await rl.question("Nome a remover: ")), 1);
  if (opcao === "5") alunos.splice(Number(await rl.question("Posição: ")), 0, await rl.question("Nome: "));
  if (opcao === "6") alunos.sort();
  if (opcao === "7") alunos.reverse();
  if (opcao === "8") console.log(alunos.join(", "));

  console.log(alunos);
} while (opcao !== "0");

rl.close();