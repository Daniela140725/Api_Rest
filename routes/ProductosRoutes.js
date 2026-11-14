
const express = require("express");
const ProductosController = require("../controllers/ProductosController.js");

const rutaProductos = express.Router();
const productosC = new ProductosController();

rutaProductos.post("/", productosC.guardar.bind(productosC));
rutaProductos.get("/", productosC.traer.bind(productosC));
rutaProductos.get("/agotados", productosC.agotados.bind(productosC));
rutaProductos.get("/bajo-stock", productosC.bajoStock.bind(productosC));
rutaProductos.get("/:id", productosC.buscar.bind(productosC));
rutaProductos.put("/:id", productosC.actualizar.bind(productosC));
rutaProductos.delete("/:id", productosC.eliminar.bind(productosC));

module.exports = rutaProductos;
