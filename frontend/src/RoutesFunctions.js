import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { useLoading } from "./components/isLoading";
import 'react-toastify/dist/ReactToastify.css';

export const useGetUsers = () => {
    const [users, usersSet] = useState([]);
    const [isLoading, setIsLoading] = useLoading();

    useEffect(() => {
        const fetchUsers = async () => {
            setIsLoading(true);
        
            try {
                const res = await axios.get("http://localhost:3001/users");
                console.log("Usuários recebidos:", res.data);  // Log dos dados retornados
                usersSet(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
            } catch (error) {
                toast.error(error.message); 
            } finally {
                setIsLoading(false);
            }
        };
        

        fetchUsers();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []); 

    return users; 
};
