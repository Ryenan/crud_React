import React, { useState, useEffect } from 'react';
import { User } from '../models/types';
import { addUser, updateUser } from '../services/api';
import { loadUsers } from './userFunctions/userUtils';
import styles from '../../src/styles/forms.module.css'; 

interface FormProps {
    onEdit: User | null;
    setOnEdit: React.Dispatch<React.SetStateAction<User | null>>;
    setUsers: React.Dispatch<React.SetStateAction<User[]>>;
    users: User[];
}

const Form: React.FC<FormProps> = ({ onEdit, setOnEdit, setUsers, users }) => {
    const [formData, setFormData] = useState<User>({
        id: 0,
        nome: '',
        email: '',
        fone: 0,
        data_nascimento: '',
    });

    useEffect(() => {
        if (onEdit) {
            setFormData(onEdit);
        }
    }, [onEdit]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!formData.nome || !formData.email || !formData.fone || !formData.data_nascimento) {
            alert('Todos os campos são obrigatórios!');
            return;
        }
    
        try {
            if (formData.id) {
                await updateUser(formData.id, formData);
    
                setUsers(prevUsers =>
                    prevUsers.map(user =>
                        user.id === formData.id ? { ...user, ...formData } : user
                    )
                );
            } else {
                await addUser(formData);
                const updatedUsers = await loadUsers();
                setUsers(updatedUsers);            
            }
    
            setOnEdit(null);
            setFormData({ id: 0, nome: '', email: '', fone  : 0, data_nascimento: '' });
        } catch (error) {
            console.error('Erro ao salvar usuário:', error);
        }
    };
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: name === 'fone' ? Number(value) : value,
        }));
    };

    const handleClear = () => {
        setOnEdit(null); 
        setFormData({ id: 0, nome: '', email: '', fone: 0, data_nascimento: '' }); 
    };

    return (
    
    <div> 
        <form className={styles.collumn} onSubmit={handleSubmit}>
            <div className={styles.collumnRow}>
                <input 
                    className={styles.input}
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Nome"
                    required
                    />
                <input  
                    className={styles.input}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    />
                <input  
                    className={styles.input}
                    type="number"
                    name="fone"
                    value={formData.fone}
                    onChange={handleChange}
                    placeholder="Telefone"
                    required
                    />
                <input
                    className={styles.input}
                    type="date"
                    name="data_nascimento"
                    value={formData.data_nascimento}
                    onChange={handleChange}
                    placeholder="Data de Nascimento"
                    required
                    />
            </div>
            <div className={styles.collumnRow}>    
                <button type="submit">
                    {formData.id ? 'Atualizar Usuário' : 'Adicionar Usuário'}
                </button>
                <button type="button" onClick={handleClear}>
                    Limpar
                </button>
            </div>
        </form>
    </div>

    );
};

export default Form;
