import { InformacaoDTO } from "./informacao-dto";

export interface PacienteinformacaoDTO {
    Idpacienteinformacao: string | null;
    idpaciente: string | null;
    idinformacao: string;
    informacao: InformacaoDTO | undefined;
}
