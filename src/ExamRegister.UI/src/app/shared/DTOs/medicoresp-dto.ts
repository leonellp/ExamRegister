import { MedicoclinicaDTO } from "./medicoclinica-dto";

export interface MedicorespDTO {
    idmedico: string;
    nome: string;
    email: string;
    celular: string;
    telefone: string;
    telefone2: string;
    crm: string;
    inativo?: Date;

    medicoClinica: MedicoclinicaDTO[];
}
