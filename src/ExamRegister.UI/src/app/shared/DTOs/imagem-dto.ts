export interface ImagemDTO {
    idimagem: string | null;
    nome: string;
    url: string | null;
    idexame: string | null;
    dataupload: Date | null;
    inativo?: Date | null;
}
