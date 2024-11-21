import { db } from "../db.js";

export const getUsers = (_, res) => {
    const qUsers = "SELECT * FROM usuarios";

    db.query(qUsers, (err, data) => {
        if (err) return res.json (err);

        return res.status(200).json(data)
    });
};

export const addUsers = (req, res) => {
    const qAdd =
        "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES (?)";

    const values = [
        req.body.nome,
        red.body.email,
        red.body.fone,
        red.body.data_nascimento,
    ];

    db.query(qAdd, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    });
};

export const updateUser = (req, res) => {
    const qUpdate =
        "UPDATE usuarios SET `nome` = ?, `email` = `?`, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?"

    const values = [
        req.body.nome,
        red.body.email,
        red.body.fone,
        red.body.data_nascimento,
    ]

    db.query(qUpdate, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    });
    
}