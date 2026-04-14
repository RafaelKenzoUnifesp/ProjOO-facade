import { TV } from "../devices/TV";
import { Projetor } from "../devices/Projetor";
import { Receiver } from "../devices/Receiver";
import { PlayerMidia } from "../devices/PlayerMidia";
import { SistemaSom } from "../devices/SistemaSom";
import { LuzAmbiente } from "../devices/LuzAmbiente";

export class HomeTheaterFacade {
  constructor(
    private tv: TV,
    private projetor: Projetor,
    private receiver: Receiver,
    private playerMidia: PlayerMidia,
    private sistemaSom: SistemaSom,
    private luzAmbiente: LuzAmbiente
  ) {}

  assistirFilme(nomeFilme: string): string[] {
    return [
      "--- Preparando home theater para assistir filme ---",
      this.luzAmbiente.diminuirIntensidade(),
      this.tv.ligar(),
      this.tv.setEntrada("HDMI 1"),
      this.projetor.ligar(),
      this.projetor.modoCinema(),
      this.receiver.ligar(),
      this.receiver.setEntrada("Player de midia"),
      this.sistemaSom.ligar(),
      this.sistemaSom.modoSurround(),
      this.sistemaSom.ajustarVolume(25),
      this.playerMidia.ligar(),
      this.playerMidia.reproduzirFilme(nomeFilme)
    ];
  }

  ouvirMusica(nomeMusica: string): string[] {
    return [
      "--- Preparando home theater para ouvir musica ---",
      this.luzAmbiente.aumentarIntensidade(),
      this.receiver.ligar(),
      this.receiver.setEntrada("Player de midia"),
      this.sistemaSom.ligar(),
      this.sistemaSom.modoStereo(),
      this.sistemaSom.ajustarVolume(18),
      this.playerMidia.ligar(),
      this.playerMidia.reproduzirMusica(nomeMusica)
    ];
  }

  desligarSistema(): string[] {
    return [
      "--- Desligando home theater ---",
      this.playerMidia.parar(),
      this.playerMidia.desligar(),
      this.sistemaSom.desligar(),
      this.receiver.desligar(),
      this.projetor.desligar(),
      this.tv.desligar(),
      this.luzAmbiente.ligar()
    ];
  }
}