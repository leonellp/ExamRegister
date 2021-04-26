export interface ImagemDTO {
    idimagem: string;
    nome: string;
    url: string;
    idexame: string;
    dataupload: Date;
    inativo?: Date;
}
