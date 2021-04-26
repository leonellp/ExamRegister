import { MedicoDTO } from "./medico-dto";

export interface MedicogrupoDTO {
    idgrupomedico: string | null;
    idgrupo: string | null;
    idmedico: string;

    medico?: MedicoDTO;
}
