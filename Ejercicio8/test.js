"use strict";

const Figura = require("./Figura.js");
const Elipse = require("./Elipse.js");
const Circulo = require("./Circulo.js");

let figura = new Figura(1, 2);
figura.setColor("#ffffff");
figura.pintar();
if (figura.esBlanca()) {
    console.log("La figura es blanca");
} else {
    console.log("La figura no es blanca");
}

let elipse = new Elipse(3, 4, 5, 6);
elipse.setColor("#23b5dd");
elipse.pintar();
if (elipse.esBlanca()) {
    console.log("La elipse es blanca");
} else {
    console.log("La elipse no es blanca");
}

let circulo = new Circulo(7, 8, 9);
circulo.pintar();
if (circulo.esBlanca()) {
    console.log("El circulo es blanco");
} else {
    console.log("El circulo no es blanco");
}