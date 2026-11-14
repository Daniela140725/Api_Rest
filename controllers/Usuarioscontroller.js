
class UsuariosController {

    guardar(req, res) {

        let conectar = req.app.get("conectar");

        let nombre = req.body.nombre;
        let apellido = req.body.apellido;
        let direccion = req.body.direccion;
        let telefono = req.body.telefono;

        let sql = "INSERT INTO usuarios (nombre, apellido, direccion, telefono) VALUES (?, ?, ?, ?)";

        conectar.query(sql, [nombre, apellido, direccion, telefono], (error, resultado) => {

            if (error) {
                console.error(error);
                res.status(500).json({
                    mensaje: "Error al registrar usuario"
                });
            }
            else {
                res.status(201).json({
                    mensaje: "Usuario registrado correctamente",
                    id: resultado.insertId
                });
            }

        });

    }

    traer(req, res) {

        let conectar = req.app.get("conectar");

        let sql = "SELECT * FROM usuarios";

        conectar.query(sql, (error, resultado) => {

            if (error) {
                res.status(500).json({
                    mensaje: "Error al consultar usuarios"
                });
            }
            else {
                res.status(200).json(resultado);
            }

        });

    }

    buscar(req, res) {

        let conectar = req.app.get("conectar");

        let id = req.params.id;

        let sql = "SELECT * FROM usuarios WHERE id = ?";

        conectar.query(sql, [id], (error, resultado) => {

            if (error) {
                res.status(500).json({
                    mensaje: "Error al buscar usuario"
                });
            }
            else if (resultado.length === 0) {
                res.status(404).json({
                    mensaje: "Usuario no encontrado"
                });
            }
            else {
                res.status(200).json(resultado[0]);
            }

        });

    }

    actualizar(req, res) {

        let conectar = req.app.get("conectar");

        let id = req.params.id;
        let nombre = req.body.nombre;
        let apellido = req.body.apellido;
        let direccion = req.body.direccion;
        let telefono = req.body.telefono;

        let sql = "UPDATE usuarios SET nombre = ?, apellido = ?, direccion = ?, telefono = ? WHERE id = ?";

        conectar.query(sql, [nombre, apellido, direccion, telefono, id], (error, resultado) => {

            if (error) {
                res.status(500).json({
                    mensaje: "Error al actualizar usuario"
                });
            }
            else if (resultado.affectedRows === 0) {
                res.status(404).json({
                    mensaje: "Usuario no encontrado"
                });
            }
            else {
                res.status(200).json({
                    mensaje: "Usuario actualizado correctamente"
                });
            }

        });

    }

    eliminar(req, res) {

        let conectar = req.app.get("conectar");

        let id = req.params.id;

        let sql = "DELETE FROM usuarios WHERE id = ?";

        conectar.query(sql, [id], (error, resultado) => {

            if (error) {
                res.status(500).json({
                    mensaje: "Error al eliminar usuario"
                });
            }
            else if (resultado.affectedRows === 0) {
                res.status(404).json({
                    mensaje: "Usuario no encontrado"
                });
            }
            else {
                res.status(200).json({
                    mensaje: "Usuario eliminado correctamente"
                });
            }

        });

    }

}

module.exports = UsuariosController;
