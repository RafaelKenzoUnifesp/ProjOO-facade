export class PlayerMidia {
  ligar(): string {
    return "Player de midia ligado";
  }

  desligar(): string {
    return "Player de midia desligado";
  }

  reproduzirFilme(nome: string): string {
    return `Reproduzindo filme: ${nome}`;
  }

  reproduzirMusica(nome: string): string {
    return `Reproduzindo musica: ${nome}`;
  }

  parar(): string {
    return "Player de midia parado";
  }
}