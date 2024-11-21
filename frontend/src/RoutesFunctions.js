import axios from "axios";
import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const useGetUsers = async () => {
    const [users, usersSet] = useState([]);
    const [edit, editSet] = useState(null);
    
    try {
        const res = await axios.get("http://localhost:3001")
        usersSet(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
        toast.error(error);
    }
};