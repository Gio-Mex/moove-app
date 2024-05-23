import IMezzo from "./IMezzo";
import ICitta from "./ICitta";

interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;
  prenotaMezzo(citta: ICitta, mezzo: IMezzo): void;
}

class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  metodoPagamento: string;
  constructor(
    nome: string,
    cognome: string,
    email: string,
    metodoPagamento: string
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.metodoPagamento = metodoPagamento;
  }
  prenotaMezzo(citta: ICitta, mezzo: IMezzo): void {
    for (let i = 0; i < citta.mezzi.length; i++) {
      if (
        citta.mezzi[i].tipo == mezzo.tipo &&
        citta.mezzi[i].stato == "Disponibile"
      ) {
        console.log(
          `Hai prenotato il mezzo di tipo ${citta.mezzi[i].tipo} con ID ${citta.mezzi[i].ID} a ${citta.nome}.`
        );
        citta.mezzi[i].assegnaUtente(this);
        break;
      } else if (i == citta.mezzi.length - 1) {
        console.log(
          `Al momento non sono disponibili mezzi di tipo ${mezzo.tipo} a ${citta.nome}.`
        );
      }
    }
  }
}

export default Utente;
