import { MedicoDTO } from "./medico-dto";

export interface ExamemedicorespdiagnosticoDTO {
    idexmeddiag: string | null;
    idmedico: string;
    idexame: string | null;

    medico?: MedicoDTO;
}
