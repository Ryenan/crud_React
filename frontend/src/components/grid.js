import React, { useState } from "react"
import { handleDelete, handleEdit } from "./handles.js";
import { Table, Thead, Tr, Th, Tbody, Td } from "../styles/stylesForComponents/grid.js"
import { FaTrash, FaEdit} from "react-icons/fa";

const Grid = ( {users, userSets, setOndEdit} ) => {

    const [onEdit, setOnEditState] = useState(null);
    
    const onEditHandler = (item) => {
        handleEdit(item, setOnEditState)
    };

    const onDeleteHandler = async (id) => {
        await handleDelete(id, users, userSets, setOnEditState)
    };

    return (
        <Table>
            <Thead>
                <Tr>
                    <Th>Nome</Th>
                    <Th>Email</Th>
                    <Th onlyWeb>Fone</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users && users.length > 0 ? (
                  users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.nome}</Td>
                        <Td width="30%">{item.email}</Td>
                        <Td onlyWeb width="20%">{item.fone}</Td>
                        <Td alignCenter width="5%"><FaEdit onClick={() => onEditHandler(item)}/></Td>
                        <Td alignCenter width="5%"><FaTrash onClick={() => onDeleteHandler(item.id)}/></Td>
                    </Tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan="5">Nenhum usuário encontrado.</td>
                    </tr>
                )}
            </Tbody>
        </Table>
    );
};

export default Grid;