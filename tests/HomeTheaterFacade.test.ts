import test from "node:test";
import assert from "node:assert/strict";

import { TV } from "../src/devices/TV";
import { Projetor } from "../src/devices/Projetor";
import { Receiver } from "../src/devices/Receiver";
import { PlayerMidia } from "../src/devices/PlayerMidia";
import { SistemaSom } from "../src/devices/SistemaSom";
import { LuzAmbiente } from "../src/devices/LuzAmbiente";
import { HomeTheaterFacade } from "../src/facade/HomeTheaterFacade";

test("assistirFilme deve coordenar os dispositivos corretamente", () => {
  const facade = new HomeTheaterFacade(
    new TV(),
    new Projetor(),
    new Receiver(),
    new PlayerMidia(),
    new SistemaSom(),
    new LuzAmbiente()
  );

  const resultado = facade.assistirFilme("Interestelar");

  assert.equal(resultado[0], "--- Preparando home theater para assistir filme ---");
  assert.ok(resultado.includes("Luz ambiente reduzida"));
  assert.ok(resultado.includes("TV ligada"));
  assert.ok(resultado.includes("Projetor configurado no modo cinema"));
  assert.ok(resultado.includes("Sistema de som em modo surround"));
  assert.ok(resultado.includes("Reproduzindo filme: Interestelar"));
});

test("ouvirMusica deve coordenar os dispositivos corretamente", () => {
  const facade = new HomeTheaterFacade(
    new TV(),
    new Projetor(),
    new Receiver(),
    new PlayerMidia(),
    new SistemaSom(),
    new LuzAmbiente()
  );

  const resultado = facade.ouvirMusica("Bohemian Rhapsody");

  assert.equal(resultado[0], "--- Preparando home theater para ouvir musica ---");
  assert.ok(resultado.includes("Luz ambiente aumentada"));
  assert.ok(resultado.includes("Sistema de som em modo stereo"));
  assert.ok(resultado.includes("Reproduzindo musica: Bohemian Rhapsody"));
});

test("desligarSistema deve desligar os dispositivos em sequencia", () => {
  const facade = new HomeTheaterFacade(
    new TV(),
    new Projetor(),
    new Receiver(),
    new PlayerMidia(),
    new SistemaSom(),
    new LuzAmbiente()
  );

  const resultado = facade.desligarSistema();

  assert.equal(resultado[0], "--- Desligando home theater ---");
  assert.ok(resultado.includes("Player de midia parado"));
  assert.ok(resultado.includes("Sistema de som desligado"));
  assert.ok(resultado.includes("Receiver desligado"));
  assert.ok(resultado.includes("TV desligada"));
  assert.ok(resultado.includes("Luz ambiente ligada"));
});