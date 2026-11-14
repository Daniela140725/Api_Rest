
const express = require("express");
const PruebaController = require("../controllers/PruebaController.js");

const rutaPrueba = express.Router();
const pruebaC = new PruebaController();

rutaPrueba.get("/bienvenida", pruebaC.bienvenida.bind(pruebaC));
rutaPrueba.get("/verificar", pruebaC.verificar.bind(pruebaC));
rutaPrueba.post("/recibir", pruebaC.recibir.bind(pruebaC));
rutaPrueba.post("/sumar", pruebaC.sumar.bind(pruebaC));

module.exports = rutaPrueba;
