const mysql = require('mysql');

const conexion = (cone) => {
    try {
        let con = cone;
        con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "tiendaeccomerce",
        });

        console.log("Conectado a la base de datos");
    } catch (error) {
        console.log(error);
    }
}

module.exports = conexion;