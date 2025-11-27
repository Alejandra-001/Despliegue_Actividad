const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "54.242.71.32",
    user: "root",
    password: "SENA",
    database: "EduMultiPro",
});

conexion.connect(error => {
    if (error) throw error;
    console.log("✅ Conexión a la base de datos exitosa");
});

module.exports = conexion;