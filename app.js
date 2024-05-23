"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IUtente_1 = require("./models/IUtente");
var ICitta_1 = require("./models/ICitta");
var IMezzo_1 = require("./models/IMezzo");
// Istanze di Città, Mezzi e Utenti
var roma = new ICitta_1.default("Roma");
var madrid = new ICitta_1.default("Madrid");
var berlino = new ICitta_1.default("Berlino");
var parigi = new ICitta_1.default("Parigi");
var utente1 = new IUtente_1.default("John", "Doe", "john.doe@example.com", "Carta di credito");
var utente2 = new IUtente_1.default("Marco", "Rossi", "marco.rossi@example.com", "PayPal");
var utente3 = new IUtente_1.default("Ana", "Garcia", "ana.garcia@example.com", "Carta prepagata");
var utente4 = new IUtente_1.default("Camille", "Dupont", "camille.dupont@example.com", "Carta di credito");
var listaScooter = [];
var listaBici = [];
var listaMonopattini = [];
for (var i = 0; i < 4; i++) {
    var scooter = new IMezzo_1.default("Scooter");
    listaScooter.push(scooter);
    var bici = new IMezzo_1.default("Bicicletta");
    listaBici.push(bici);
    var monopattino = new IMezzo_1.default("Monopattino");
    listaMonopattini.push(monopattino);
}
roma.aggiungiMezzo(listaScooter[0], listaBici[0], listaBici[1], listaMonopattini[0]);
// Test aggiunta mezzi
madrid.aggiungiMezzo(listaScooter[1], listaBici[2], listaMonopattini[1]);
berlino.aggiungiMezzo(listaScooter[2], listaBici[3], listaMonopattini[2]);
parigi.aggiungiMezzo(listaScooter[3], listaMonopattini[3]);
// Test prenotazione mezzi
utente1.prenotaMezzo(roma, listaScooter[0]); // L'utente riceve conferma di prenotazione e il mezzo notifica di essere stato assegnato a quell'utente.
utente2.prenotaMezzo(roma, listaScooter[0]); // Un altro utente prova a prenotare lo stesso tipo di mezzo ma ne era disponibile solo uno in questa città. Riceve un avviso.
utente2.prenotaMezzo(roma, listaBici[0]); // L'utente prenota il mezzo come sopra.
utente3.prenotaMezzo(roma, listaBici[0]); // Un altro utente prova a prenotare lo stesso tipo di mezzo. Il primo è già prenotato quindi viene prenotato il secondo disponibile.
utente4.prenotaMezzo(madrid, listaMonopattini[0]); // Altre prenotazioni
utente3.prenotaMezzo(berlino, listaMonopattini[0]);
utente2.prenotaMezzo(berlino, listaBici[0]);
utente1.prenotaMezzo(parigi, listaScooter[0]);
utente2.prenotaMezzo(parigi, listaBici[0]); // L'utente prova a prenotare un tipo di mezzo non presente in quella città. Riceve un avviso.
console.log(roma, madrid, berlino, parigi); // Lista città con rispettivi mezzi e loro disponobilità.
