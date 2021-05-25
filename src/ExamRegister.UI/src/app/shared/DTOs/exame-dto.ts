import { CategoriaexameDTO } from "./categoriaexame-dto";
import { ClinicaDTO } from "./clinica-dto";
import { ExamemedicorespdiagnosticoDTO } from "./examemedicorespdiagnostico-dto";
import { GrupodemedicoDTO } from "./grupodemedico-dto";
import { ImagemDTO } from "./imagem-dto";
import { MedicoDTO } from "./medico-dto";
import { MedicorespDTO } from "./medicoresp-dto";
import { MedicosolicDTO } from "./medicosolic-dto";
import { OrgaoDTO } from "./orgao-dto";
import { PacienteDTO } from "./paciente-dto";
import { PecaDTO } from "./peca-dto";
import { ReuniaoDTO } from "./reuniao-dto";

export interface ExameDTO {
    idexame: string;
    idexterno: string;
    datain: Date;
    dataout: Date;
    idpaciente: string;
    idorgao: string;
    idpeca: string;
    idmedicoresp: string;
    idmedicosolic: string;
    idreuniao: string;
    idclinica: string;
    diagnostico: string;
    dadosclinicos: string;
    suspeitaclinica: string;
    peso: number;
    altura: number;
    ast: number;
    alt: number;
    ggt: number;
    colesterol: number;
    gamaglobulina: number;
    triglicerides: number;
    glicemia: number;
    falc: number;
    biltotal: number;
    bildireta: number;
    outros: string;
    inativo ?: Date;
    idgrupomedico: string;
    conclusao: string;
    observacao: string;
    transplantadofigado ?: number;
    hipertensaoarterial ?: number;
    ictericia ?: number;
    ascite ?: number;
    edema ?: number;
    circulacaocolateral ?: number;
    varizesofagicas ?: number;
    hepatomegalia ?: number;
    figadoendurecido ?: number;
    figadonodular ?: number;
    esplenomegalia ?: number;
    datatransplante ?: Date;
    descdoencaautoimune: string;
    doencaautoimune ?: number;
    usamedicamento ?: number;
    descusamedicamento: string;
    autoanticorpos: string;
    vhc ?: number;
    descvhc ?: number;
    vhb ?: number;
    descvhb ?: number;
    hiv ?: number;
    deschiv ?: number;

    Paciente: PacienteDTO;
    Orgao: OrgaoDTO;
    Peca: PecaDTO;
    GrupodeMedico: GrupodemedicoDTO;
    MedicoSolic: MedicosolicDTO;
    Clinica: ClinicaDTO;
    MedicoResp: MedicorespDTO;
    Reuniao: ReuniaoDTO;
    examemedicorespdiagnostico: ExamemedicorespdiagnosticoDTO[];
    categoriaexame: CategoriaexameDTO[];
    imagem: ImagemDTO[];
    
}
