import mysql from "mysql"

export const db = mysql.createConnection({
    host: "ryenantest",
    user: "freedb_ryenandb",
    password: "*3VJKpFFmzWhVuY",
    database: "freedb_ryenantest",
});

db.connect((err) => {
    if (err) {
        console.error("Erro ao conectar no banco de dados:", err);
        return;
    }
    console.log("Conectado ao banco de dados");
});
