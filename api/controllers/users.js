import { db } from "../db.js";

// Função para extrair os valores do body
const getUserValues = (body) => [
    body.nome,
    body.email,
    body.fone,
    body.data_nascimento
];

// Função para executar a query no banco de dados
const executeQuery = (query, params, res, successMessage) => {
    db.query(query, params, (err, data) => {
        if (err) return res.json(err);

        const response = {
            data: data,
            message: successMessage // Aqui está o uso correto da variável successMessage
        };

        return res.status(200).json(response);
    });
};

// Função para buscar os usuários
export const getUsers = (_, res) => {
    const qUsers = "SELECT * FROM usuarios";
    const successMessage = "Conectado com sucesso"; // Defina o successMessage

    executeQuery(qUsers, [], res, successMessage); // Passe o successMessage para a função
};

export const addUser = (req, res) => {
    const qAdd = "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`) VALUES (?)";
    const values = getUserValues(req.body);
    const successMessage = "Usuário criado com sucesso"; // Defina o successMessage

    executeQuery(qAdd, [values], res, successMessage); // Passe o successMessage para a função
};

// Função para atualizar um usuário
export const updateUser = (req, res) => {
    const qUpdate = "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ? WHERE `id` = ?";
    const values = getUserValues(req.body);
    const successMessage = "Usuário atualizado com sucesso"; // Defina o successMessage

    executeQuery(qUpdate, [...values, req.params.id], res, successMessage); // Passe o successMessage para a função
};

// Função para deletar um usuário
export const deleteUser = (req, res) => {
    const qDelete = "DELETE FROM usuarios WHERE `id` = ?";
    const successMessage = "Usuário deletado com sucesso"; // Defina o successMessage

    executeQuery(qDelete, [req.params.id], res, successMessage); // Passe o successMessage para a função
};
