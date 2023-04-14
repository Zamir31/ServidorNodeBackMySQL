const conexion = require('../config/db')

exports.crearProducto = async (req, res) => {

    try {
        conexion(con);
        con.connect(function (err) {
            if (err) {
              console.log(err);
            } else {
              con.query(sql, parametros, function (err, result) {
                if (err) {
                  console.log(err);
                } else {
                  res.write(JSON.stringify(result));
                  res.end();
                }
              });
            }
          });
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};


exports.obtenerProductos = async (req, res) => {

    try {

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
}

exports.actualizarProducto = async (req, res) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};

exports.obtenerProducto = async (req, res) => {

    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};

exports.deletearProducto = async (req, res) => {
    try {

        let producto = await Producto.findById(req.params.id);
        if (!producto) {
            res.status(404).json({ message: "Producto no existe" });
        }

        await Producto.findOneAndRemove({ _id: req.params.id });
        res.json({ message: "Producto eliminado"});
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};