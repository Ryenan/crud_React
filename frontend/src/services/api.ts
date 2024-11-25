import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3001/users",
});

export const getUsers = async () => {
    try {
        const response = await api.get ("/")
        return response.data;
    } catch ( error ) {
        console.error("Erro ao buscar usuários", error);
        throw error;
    }
}

export const addUser = async (userData: { nome: string, email: string, fone: number, data_nascimento: string }) => {
    try {
        const response = await api.post("/", userData);
        return response.data;
    } catch (error) {
        console.error("Erro ao adicionar usuário:", error);
        throw error;
    }
};

export const updateUser = async (id: number, userData: { nome: string, email: string, fone: number, data_nascimento: string }) => {
    try {
        const response = await api.put(`/${id}`, userData);
        return response.data;
    } catch (error) {
        console.error("Erro ao atualizar usuário:", error);
        throw error;
    }
};


export const deleteUser = async (id: number) => {
    try {
        const response = await api.delete(`/${id}`);
        return response.data;
    } catch (error) {
        console.error("Erro ao excluir usuário:", error);
        throw error;
    }
}

