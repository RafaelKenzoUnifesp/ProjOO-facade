export class SistemaSom {
  ligar(): string {
    return "Sistema de som ligado";
  }

  desligar(): string {
    return "Sistema de som desligado";
  }

  ajustarVolume(volume: number): string {
    return `Volume ajustado para ${volume}`;
  }

  modoSurround(): string {
    return "Sistema de som em modo surround";
  }

  modoStereo(): string {
    return "Sistema de som em modo stereo";
  }
}