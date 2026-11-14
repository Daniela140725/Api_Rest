
class ProductosController {

    // REGISTRAR PRODUCTO
    guardar(req, res) {

        let conectar = req.app.get("conectar");

        let nombre = req.body.nombre;
        let descripcion = req.body.descripcion;
        let precio = req.body.precio;
        let stock = req.body.stock;

        let sql = "INSERT INTO productos (nombre, descripcion, precio, stock) VALUES (?, ?, ?, ?)";

        conectar.query(sql, [nombre, descripcion, precio, stock], (error, resultado) => {

            if (error) {
                console.error(error);
                res.status(500).json({
                    mensaje: "Error al registrar producto"
                });
            } else {
                res.status(201).json({
                    mensaje: "Producto registrado correctamente",
                    id: resultado.insertId
                });
            }

        });
    }

    // CONSULTAR TODOS LOS PRODUCTOS
    traer(req, res) {

        let conectar = req.app.get("conectar");

        let sql = "SELECT * FROM productos";

        conectar.query(sql, (error, resultado) => {

            if (error) {
                res.status(500).json({
                    mensaje: "Error al consultar productos"
                });
            } else {
                res.status(200).json(resultado);
            }

        });
    }

    // BUSCAR PRODUCTO POR ID
    buscar(req, res) {

        let conectar = req.app.get("conectar");

        let id = req.params.id;

        let sql = "SELECT * FROM productos WHERE id = ?";

        conectar.query(sql, [id], (error, resultado) => {

            if (error) {
                res.status(500).json({
                    mensaje: "Error al buscar producto"
                });
            } else if (resultado.length === 0) {
                res.status(404).json({
                    mensaje: "Producto no encontrado"
                });
            } else {
                res.status(200).json(resultado[0]);
            }

        });
    }

    // ACTUALIZAR PRODUCTO
    actualizar(req, res) {

        let conectar = req.app.get("conectar");

        let id = req.params.id;
        let nombre = req.body.nombre;
        let descripcion = req.body.descripcion;
        let precio = req.body.precio;
        let stock = req.body.stock;

        let sql = "UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?";

        conectar.query(sql, [nombre, descripcion, precio, stock, id], (error, resultado) => {

            if (error) {
                res.status(500).json({
                    mensaje: "Error al actualizar producto"
                });
            } else if (resultado.affectedRows === 0) {
                res.status(404).json({
                    mensaje: "Producto no encontrado"
                });
            } else {
                res.status(200).json({
                    mensaje: "Producto actualizado correctamente"
                });
            }

        });
    }

    // ELIMINAR PRODUCTO
    eliminar(req, res) {

        let conectar = req.app.get("conectar");

        let id = req.params.id;

        let sql = "DELETE FROM productos WHERE id = ?";

        conectar.query(sql, [id], (error, resultado) => {

            if (error) {
                res.status(500).json({
                    mensaje: "Error al eliminar producto"
                });
            } else if (resultado.affectedRows === 0) {
                res.status(404).json({
                    mensaje: "Producto no encontrado"
                });
            } else {
                res.status(200).json({
                    mensaje: "Producto eliminado correctamente"
                });
            }

        });
    }

    // CONSULTAR PRODUCTOS AGOTADOS
    agotados(req, res) {

        let conectar = req.app.get("conectar");

        let sql = "SELECT * FROM productos WHERE stock = 0";

        conectar.query(sql, (error, resultado) => {

            if (error) {
                res.status(500).json({
                    mensaje: "Error al consultar productos agotados"
                });
            } else {
                res.status(200).json(resultado);
            }

        });
    }

    // CONSULTAR PRODUCTOS CON BAJO STOCK
    bajoStock(req, res) {

        let conectar = req.app.get("conectar");

        let sql = "SELECT * FROM productos WHERE stock < 5";

        conectar.query(sql, (error, resultado) => {

            if (error) {
                res.status(500).json({
                    mensaje: "Error al consultar productos con bajo stock"
                });
            } else {
                res.status(200).json(resultado);
            }

        });
    }

}

module.exports = ProductosController;
