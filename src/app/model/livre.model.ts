import { Genre } from "./genre.model";
import { Image } from "./image.model";
export class Livre {
    idLivre! : number;
    titreLivre! : string;
    auteur! : string;
    prixLivre! : number;
    datePublication! : Date ;
    genre! : Genre;
    image! : Image;
    imageStr!:string;

    images!: Image[];


}