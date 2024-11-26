import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { deleteUser } from "../services/api";
import { User } from "../models/types";
import styles from '../../src/styles/forms.module.css'; 

interface GridProps {
    users: User[];
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
    setOnEdit: React.Dispatch<React.SetStateAction<User | null>>;
}

const Grid: React.FC<GridProps> = ({ users, setUsers, setOnEdit }) => {
    const handleDelete = async (id: number) => {
        try {
            await deleteUser(id);
            const updatedUsers = users.filter((user) => user.id !== id);
            setUsers(updatedUsers);
        } catch (error) {
            console.error("Erro ao excluir o usuário:", error);
        }
    };

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Fone</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.nome}</td>
                        <td>{user.email}</td>
                        <td>{user.fone}</td>
                        <td>
                            <button onClick={() => setOnEdit(user)}>
                                <FaEdit />
                            </button>
                            <button onClick={() => handleDelete(user.id)}>
                                <FaTrash />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Grid;
