//Modulo do MySQL
const mysql = require("mysql");

//Cria uma conexão com o BD
const connection = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "xdev",
    port: process.env.DB_PORT || "3306"
});

//Nova conexão com o MySQL
connection.connect(error=>{
    if (error) throw error;
        console.log("Banco de Dados Conectado!");
    });
    
module.exports = connection;