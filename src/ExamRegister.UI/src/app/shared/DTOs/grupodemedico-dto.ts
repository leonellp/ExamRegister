import { MedicogrupoDTO } from "./medicogrupo-dto";

export interface GrupodemedicoDTO {
    idgrupodemedicos: string;
    idexterno: string;
    nome: string;
    inativo?: Date;

    medicoGrupo: MedicogrupoDTO[];
}
