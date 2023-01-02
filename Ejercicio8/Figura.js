"use strict";

class Figura {

    #x;
    #y;
    #color;

    constructor(x, y) {
        this.#x = x;
        this.#y = y;
        this.#color = "#000000";
    }

    pintar() {
        console.log("Nos movemos a la posicion (" + this.#x + ", " + this.#y + ")");
        console.log("Cogemos la pintura de color " + this.#color);
    }

    esBlanca() {
        if (this.#color.toUpperCase() === "#FFFFFF") {
            return true;
        }
        return false;
    }

    setColor(color) {
        this.#color = color;
    }

}

module.exports = Figura;