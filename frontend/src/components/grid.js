import React from "react"
import axios from "axios";
import { Table, Thead, Tr, Th, Tbody, Td } from "../styles/stylesForComponents/grid"
import { FaTrash, FaEdit} from "react-icons/fa";
import { toast } from "react-toastify";

const Grid = ( {users} ) => {
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
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="30%">{item.nome}</Td>
                        <Td width="30%">{item.email}</Td>
                        <Td onlyWeb width="20%">{item.fone}</Td>
                        <Td width="5%"><FaEdit/></Td>
                        <Td width="5%"><FaTrash/></Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid;