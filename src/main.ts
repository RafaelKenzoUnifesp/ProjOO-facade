import readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { HomeTheaterFacade } from "./facade/HomeTheaterFacade";

async function main(): Promise<void> {
  const rl = readline.createInterface({ input, output });
  const homeTheater = new HomeTheaterFacade();

  while (true) {
    console.log("\n=== Home Theater ===");
    console.log("1 - Assistir filme");
    console.log("2 - Ouvir musica");
    console.log("3 - Desligar sistema");
    console.log("0 - Sair");

    const opcao = (await rl.question("Escolha uma opcao: ")).trim();

    if (opcao === "0") {
      break;
    }

    if (opcao === "1") {
      const nomeFilme = await rl.question("Digite o nome do filme: ");
      const resultado = homeTheater.assistirFilme(nomeFilme.trim());
      for (const mensagem of resultado) {
        console.log(mensagem);
      }
      continue;
    }

    if (opcao === "2") {
      const nomeMusica = await rl.question("Digite o nome da musica: ");
      const resultado = homeTheater.ouvirMusica(nomeMusica.trim());
      for (const mensagem of resultado) {
        console.log(mensagem);
      }
      continue;
    }

    if (opcao === "3") {
      const resultado = homeTheater.desligarSistema();
      for (const mensagem of resultado) {
        console.log(mensagem);
      }
      continue;
    }

    console.log("Opcao invalida.");
  }

  rl.close();
}

main();