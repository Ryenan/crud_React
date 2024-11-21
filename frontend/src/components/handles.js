import axios from "axios";
import { toast } from "react-toastify";

export const handleEdit = (item, setOnEdit) => {
    setOnEdit(item)
};

export const handleDelete = async (id, users, usersSet, setOnEdit) => {

    try {
        const { data } = await axios.delete("http://localhost:3001/" + id);
        
        const newArray = users.filter((user) => user.id !== id);
        usersSet(newArray);
        toast.success(data);

    } catch ({ data }) {toast.error(data);}
    
    setOnEdit(null);
}