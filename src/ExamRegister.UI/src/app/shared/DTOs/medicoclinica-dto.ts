import { ClinicaDTO } from "./clinica-dto";
import { MedicoDTO } from "./medico-dto";

export interface MedicoclinicaDTO {
    idmedcli: string | null;
    idmedico: string | null;
    idclinica: string;

    clinica: ClinicaDTO;
    medico?: MedicoDTO
}
