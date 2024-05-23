"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Mezzo = /** @class */ (function () {
    function Mezzo(tipo, stato) {
        if (stato === void 0) { stato = "Disponibile"; }
        this.ID = Number(Math.random().toString().slice(2));
        this.tipo = tipo;
        this.stato = stato;
    }
    Mezzo.prototype.assegnaUtente = function (user) {
        if (this.stato === "Disponibile") {
            console.log("Notifica dal mezzo ".concat(this.tipo, " ID ").concat(this.ID, ". L'utente ").concat(user.nome, " ").concat(user.cognome, "\n        con email ").concat(user.email, " ha prenotato questo mezzo."));
            this.stato = "In uso";
        }
    };
    return Mezzo;
}());
exports.default = Mezzo;
