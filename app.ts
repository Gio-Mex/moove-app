import Utente from "./models/IUtente";
import Citta from "./models/ICitta";
import Mezzo from "./models/IMezzo";

// Istanze di Città, Mezzi e Utenti

const roma = new Citta("Roma");
const madrid = new Citta("Madrid");
const berlino = new Citta("Berlino");
const parigi = new Citta("Parigi");

const utente1 = new Utente(
  "John",
  "Doe",
  "john.doe@example.com",
  "Carta di credito"
);
const utente2 = new Utente(
  "Marco",
  "Rossi",
  "marco.rossi@example.com",
  "PayPal"
);
const utente3 = new Utente(
  "Ana",
  "Garcia",
  "ana.garcia@example.com",
  "Carta prepagata"
);
const utente4 = new Utente(
  "Camille",
  "Dupont",
  "camille.dupont@example.com",
  "Carta di credito"
);

const listaScooter: Mezzo[] = [];
const listaBici: Mezzo[] = [];
const listaMonopattini: Mezzo[] = [];

for (let i = 0; i < 4; i++) {
  let scooter = new Mezzo("Scooter");
  listaScooter.push(scooter);

  let bici = new Mezzo("Bicicletta");
  listaBici.push(bici);

  let monopattino = new Mezzo("Monopattino");
  listaMonopattini.push(monopattino);
}

roma.aggiungiMezzo(
  listaScooter[0],
  listaBici[0],
  listaBici[1],
  listaMonopattini[0]
);

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
