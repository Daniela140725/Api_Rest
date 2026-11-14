
const express = require("express");
const UsuariosController = require("../controllers/Usuarioscontroller.js");

const rutaUsuarios = express.Router();
const usuariosC = new UsuariosController();

rutaUsuarios.post("/", usuariosC.guardar.bind(usuariosC));
rutaUsuarios.get("/", usuariosC.traer.bind(usuariosC));
rutaUsuarios.get("/:id", usuariosC.buscar.bind(usuariosC));
rutaUsuarios.put("/:id", usuariosC.actualizar.bind(usuariosC));
rutaUsuarios.delete("/:id", usuariosC.eliminar.bind(usuariosC));

module.exports = rutaUsuarios;
