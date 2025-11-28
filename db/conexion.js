const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "44.217.144.224",
    user: "alejandrauser",
    password: "aleja123",
    database: "EduMultiPro",
});

conexion.connect(error => {
    if (error) throw error;
    console.log("✅ Conexión a la base de datos exitosa");
});

module.exports = conexion;