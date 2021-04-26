import { CidadeDTO } from "./cidade-dto";
import { EstadoDTO } from "./estado-dto";

export interface EnderecoDTO {
    idendereco: string;
    cep: string;
    bairro: string;
    rua: string;
    numero: number;
    complemento: string;
    idcidade: string;
    idestado: string;
    inativo?: Date;

    cidade: CidadeDTO;
    estado: EstadoDTO;
}
