import { db } from "../db.js";

const getUserValues = (body) => [
    body.nome,
    body.email,
    body.fone,
    body.data_nascimento
];

const executeQuery = (query, params, res, successMessage) => {
    db.query(query, params, (err, data) => {
        if (err) return res.json(err);

        const response = {
            data: data,
            message: successMessage 
        };

        return res.status(200).json(response);
    });
};

export const getUsers = (_, res) => {
    const qUsers = "SELECT * FROM usuarios";

    db.query(qUsers, (err, data) => {
        if (err) {
            console.error("Erro na consulta SQL:", err);
            return res.status(500).json({ error: "Erro na consulta ao banco de dados" });
        }

        console.log("Resultado da consulta (data):", data);
        if (data.length === 0) {
            console.log("Nenhum usuário encontrado no banco.");
            return res.status(404).json({ message: "Nenhum usuário encontrado" });
        }

        console.log("Usuários encontrados no banco:", data);
        return res.status(200).json(data);
    });
};



export const addUser = (req, res) => {
    const qAdd = "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES (?)";
    const values = getUserValues(req.body);
    const successMessage = "Usuário criado com sucesso"; 

    executeQuery(qAdd, [values], res, successMessage);
};

export const updateUser = (req, res) => {
    const qUpdate = "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";
    const values = getUserValues(req.body);
    const successMessage = "Usuário atualizado com sucesso"; 

    executeQuery(qUpdate, [...values, req.params.id], res, successMessage);
};

export const deleteUser = (req, res) => {
    const qDelete = "DELETE FROM usuarios WHERE `id` = ?";
    const successMessage = "Usuário deletado com sucesso"; 

    executeQuery(qDelete, [req.params.id], res, successMessage); 
};
