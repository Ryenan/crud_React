import './styles/globalStyles.css';
import Form from './components/form';
import styles from '../src/styles/forms.module.css'; 
import React, { useState } from 'react';
import { filterUsers, useUsers } from './components/userFunctions/userUtils';
import { handleDelete } from './components/userFunctions/handles';
import { User } from './models/types';
import { FaEdit, FaTrash } from 'react-icons/fa';

const App: React.FC = () => {
    const {users, setUsers} = useUsers(); 
    const [onEdit, setOnEdit] = useState<User | null>(null); 
    const [search, setSearch] = useState<string>(''); 

    const filteredUsers = filterUsers(users, search)

    return (

    <div className={styles.noScroll}>
            <div className={styles.body}> 
                <div className={styles.formContainer}>
                        <h1 className={styles.titulo}>Gerenciamento de Usuários</h1>
                    <div>
                       <Form
                            onEdit={onEdit}
                            setOnEdit={setOnEdit}
                            setUsers={setUsers}
                            users={users}
                        />
                    </div>
                    <div>
                        <input
                            className={styles.searchBar}
                            type="text"
                            placeholder="Buscar por nome..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            />
                        <img className={styles.imageIcoInput} src="https://endlessicons.com/wp-content/uploads/2015/08/search-icon-2-614x460.png" alt="" />
                </div>
                <ul>
                    {filteredUsers.map(user => (
                        <li key={user.id}>                        
                        {user.nome} - {user.email}
                            <div onClick={() => setOnEdit(user)}>
                                <FaEdit/>
                            </div>
                            <div onClick={() => handleDelete(user.id, setUsers)}>
                                <FaTrash/>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>

    );
};

export default App;
