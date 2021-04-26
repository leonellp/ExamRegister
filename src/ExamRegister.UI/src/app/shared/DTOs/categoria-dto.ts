export interface CategoriaDTO {
    idcategoria: string;
    nome: string;
    nomecompleto: string
    idcategoriapai?: string;
    inativo?: Date
    idexterno: string
}
