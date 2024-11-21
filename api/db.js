import mysql from "mysql"

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "321kopi123",
    database: "crud_react_1",
});

db.connect((err) => {
    if (err) {
        console.error("Erro ao conectar no banco de dados:", err);
        return;
    }
    console.log("Conectado ao banco de dados");
});
