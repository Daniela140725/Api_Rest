
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

// Crear aplicacion
const app = express();

// Configuraciones
app.use(express.json());
app.use(cors());

// Conexion a MySQL
const conectar = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "daticos",
    port: 3306
});

// Verificar conexion
conectar.connect((error) => {
    if (error) {
        console.log("Error al conectar con MySQL:", error.message);
    } else {
        console.log("Conexion exitosa a MySQL");
    }
});

// Compartir conexion con los Controllers
app.set("conectar", conectar);

// Importar rutas
const rutaPrueba = require("./routes/PruebaRoutes.js");
const rutaUsuarios = require("./routes/UsuariosRoutes.js");
const rutaProductos = require("./routes/ProductosRoutes.js");

// Registrar rutas
app.use("/prueba", rutaPrueba);
app.use("/usuarios", rutaUsuarios);
app.use("/productos", rutaProductos);

// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "API REST funcionando correctamente"
    });
});

// Iniciar servidor
const PUERTO = 3000;

app.listen(PUERTO, () => {
    console.log(`Servidor ejecutandose en el puerto ${PUERTO}`);
});
