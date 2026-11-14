
class PruebaController {

    bienvenida(req, res) {
        res.status(200).json({
            mensaje: "Bienvenido a nuestra API REST"
        });
    }

    verificar(req, res) {
        res.status(200).json({
            mensaje: "El servidor funciona correctamente",
            estado: true
        });
    }

    recibir(req, res) {
        let nombre = req.body.nombre;
        let edad = req.body.edad;

        res.status(200).json({
            mensaje: "Datos recibidos correctamente",
            nombre: nombre,
            edad: edad
        });
    }

    sumar(req, res) {
        let numero1 = Number(req.body.numero1);
        let numero2 = Number(req.body.numero2);

        let resultado = numero1 + numero2;

        res.status(200).json({
            resultado: resultado
        });
    }

}

module.exports = PruebaController;
