export class Receiver {
  ligar(): string {
    return "Receiver ligado";
  }

  desligar(): string {
    return "Receiver desligado";
  }

  setEntrada(entrada: string): string {
    return `Receiver ajustado para entrada ${entrada}`;
  }
}