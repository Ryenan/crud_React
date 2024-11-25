export type PartialUser = {
    id?: number;
    nome?: string;
    email?: string;
    fone?: number; 
    data_nascimento?: string;
};

export type User = {
    id: number; 
    nome: string;
    email: string;
    fone: number;
    data_nascimento: string;
};
