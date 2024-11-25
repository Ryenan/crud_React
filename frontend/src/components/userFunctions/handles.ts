import { deleteUser } from '../../services/api'; 
import { User } from '../../models/types';


export const handleDelete = async (
    id: number,
    setUsers: React.Dispatch<React.SetStateAction<User[]>>
) => {
    
    const confirm = window.confirm('Você tem certeza que deseja excluir este usuário?');
    if (confirm) {
        try {
            await deleteUser(id);
            setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
        }
    }
};