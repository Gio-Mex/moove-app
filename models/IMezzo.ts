import IUtente from "./IUtente";

interface IVehicle {
  ID: number;
  tipo: string;
  stato: string;
  assegnaUtente(user: IUtente): void;
}

class Mezzo implements IVehicle {
  ID: number;
  tipo: string;
  stato: string;

  constructor(tipo: string, stato: string = "Disponibile") {
    this.ID = Number(Math.random().toString().slice(2));
    this.tipo = tipo;
    this.stato = stato;
  }

  assegnaUtente(user: IUtente): void {
    if (this.stato === "Disponibile") {
      console.log(
        `Notifica dal mezzo ${this.tipo} ID ${this.ID}. L'utente ${user.nome} ${user.cognome}
        con email ${user.email} ha prenotato questo mezzo.`
      );
      this.stato = "In uso";
    }
  }
}

export default Mezzo;
