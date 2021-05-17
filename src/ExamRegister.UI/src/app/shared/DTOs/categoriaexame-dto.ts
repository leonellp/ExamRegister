import { CategoriaDTO } from "./categoria-dto";

export interface CategoriaexameDTO {
    idcategoriaexame: string | null;
    idcategoria: string;
    idexame: string | null;

    categoria: CategoriaDTO;
}
