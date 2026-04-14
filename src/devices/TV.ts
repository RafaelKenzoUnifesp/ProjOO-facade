export class TV {
  ligar(): string {
    return "TV ligada";
  }

  desligar(): string {
    return "TV desligada";
  }

  setEntrada(entrada: string): string {
    return `TV ajustada para entrada ${entrada}`;
  }
}