import { useState, useEffect } from "react";
import { User } from "../../models/types";
import { getUsers } from "../../services/api";

export const loadUsers = async (): Promise<User[]> => {
    try {
        const fetchedUsers = await getUsers();
        return fetchedUsers;
    } catch (error) {
        console.error('Erro ao carregar usuários:', error);
        throw error;
    }
};

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await loadUsers();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        };

        fetchUsers();
    }, []);

    return { users, setUsers };
};

export const filterUsers = (users: User[], search: string): User[] => {
    return users.filter(user =>
        user.nome?.toLowerCase().includes(search.toLowerCase())
    )
}