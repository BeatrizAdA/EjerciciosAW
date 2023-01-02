"use strict";

const Figura = require("./Figura.js");

class Elipse extends Figura {

    #rh;
    #rv;

    constructor(x, y, rh, rv) {
        super(x, y);
        this.#rh = rh;
        this.#rv = rv;
    }

    pintar() {
        super.pintar();
        console.log("Pintamos elipse de radio " + this.#rh + " y " + this.#rv);
    }

}

module.exports = Elipse;