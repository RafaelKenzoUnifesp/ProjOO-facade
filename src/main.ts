import { TV } from "./devices/TV";
import { Projetor } from "./devices/Projetor";
import { Receiver } from "./devices/Receiver";
import { PlayerMidia } from "./devices/PlayerMidia";
import { SistemaSom } from "./devices/SistemaSom";
import { LuzAmbiente } from "./devices/LuzAmbiente";
import { HomeTheaterFacade } from "./facade/HomeTheaterFacade";

const tv = new TV();
const projetor = new Projetor();
const receiver = new Receiver();
const playerMidia = new PlayerMidia();
const sistemaSom = new SistemaSom();
const luzAmbiente = new LuzAmbiente();

const homeTheater = new HomeTheaterFacade(
  tv,
  projetor,
  receiver,
  playerMidia,
  sistemaSom,
  luzAmbiente
);

for (const mensagem of homeTheater.assistirFilme("")) {
  console.log(mensagem);
}

for (const mensagem of homeTheater.desligarSistema()) {
  console.log(mensagem);
}

for (const mensagem of homeTheater.ouvirMusica("")) {
  console.log(mensagem);
}

for (const mensagem of homeTheater.desligarSistema()) {
  console.log(mensagem);
}