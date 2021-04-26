import { HistoricopacienteDTO } from "./historicopaciente-dto";
import { PacienteinformacaoDTO } from "./pacienteinformacao-dto";

export interface PacienteDTO {
    idpaciente: string;
    idexterno: string;
    nome: string;
    sexo: string;
    nascimento: Date;
    inativo?: Date;
    historicoPaciente: HistoricopacienteDTO[];
    pacienteInformacao: PacienteinformacaoDTO[];
}
