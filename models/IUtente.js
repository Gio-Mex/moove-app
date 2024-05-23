"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utente = /** @class */ (function () {
    function Utente(nome, cognome, email, metodoPagamento) {
        this.nome = nome;
        this.cognome = cognome;
        this.email = email;
        this.metodoPagamento = metodoPagamento;
    }
    Utente.prototype.prenotaMezzo = function (citta, mezzo) {
        for (var i = 0; i < citta.mezzi.length; i++) {
            if (citta.mezzi[i].tipo == mezzo.tipo &&
                citta.mezzi[i].stato == "Disponibile") {
                console.log("Hai prenotato il mezzo di tipo ".concat(citta.mezzi[i].tipo, " con ID ").concat(citta.mezzi[i].ID, " a ").concat(citta.nome, "."));
                citta.mezzi[i].assegnaUtente(this);
                break;
            }
            else if (i == citta.mezzi.length - 1) {
                console.log("Al momento non sono disponibili mezzi di tipo ".concat(mezzo.tipo, " a ").concat(citta.nome, "."));
            }
        }
    };
    return Utente;
}());
exports.default = Utente;
