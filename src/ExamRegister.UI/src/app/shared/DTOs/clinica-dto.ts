import { EnderecoDTO } from "./endereco-dto";

export interface ClinicaDTO {
    idclinica: string;
    email: string;
    idendereco: string;
    telefone: string;
    celular: string;
    inativo?: Date;
    nome: string;
    idexterno: string;

    endereco: EnderecoDTO;
}
