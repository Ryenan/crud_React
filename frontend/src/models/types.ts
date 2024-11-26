export type PartialUser = {
    id?: number;
    nome?: string;
    email?: string;
    fone?: string; 
    data_nascimento?: string;
};

export type User = {
    id: number; 
    nome: string;
    email: string;
    fone: string;
    data_nascimento: string;
};
