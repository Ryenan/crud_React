import React, { useRef } from 'react';
import { FormContainer, InputArea, Label, Input, Button } from '../styles/stylesForComponents/formStyles';

const Form = ({ onEdit }) => {
    const ref = useRef();

    return (
        <FormContainer ref={ref}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="nome"/>
            </InputArea>
            <InputArea>
                <Label>Email</Label>
                <Input name="nome" type='email'/>
            </InputArea>
            <InputArea>
                <Label>Telefone</Label>
                <Input name="nome"/>
            </InputArea>
            <InputArea>
                <Label>Data de nascimento</Label>
                <Input name="nome" type="date"/>
            </InputArea>

            <Button type="submit">Salvar</Button>
        </FormContainer>
    );
}

export default Form;