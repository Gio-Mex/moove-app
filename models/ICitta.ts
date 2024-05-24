import IMezzo from "./IMezzo";

interface ICitta {
  nome: string;
  mezzi: IMezzo[];
  aggiungiMezzo(...Mezzo: IMezzo[]): void;
}

class Citta implements ICitta {
  nome: string;
  mezzi: IMezzo[];
  constructor(nome: string) {
    this.nome = nome;
    this.mezzi = [];
  }
  aggiungiMezzo(...mezzi: IMezzo[]): void {
    this.mezzi.push(...mezzi);
  }
}

export default Citta;
