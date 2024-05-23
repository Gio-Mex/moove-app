"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Citta = /** @class */ (function () {
    function Citta(nome) {
        this.nome = nome;
        this.mezzi = [];
    }
    Citta.prototype.aggiungiMezzo = function () {
        var _a;
        var veicoli = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            veicoli[_i] = arguments[_i];
        }
        (_a = this.mezzi).push.apply(_a, veicoli);
    };
    return Citta;
}());
exports.default = Citta;
